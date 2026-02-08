// scripts/sync-db.ts
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { google } from "googleapis";
import * as dotenv from "dotenv";
import * as fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

// --- Types (aligned with src/types/portfolio.ts) ---
interface HeroData {
  name: string;
  titles: string[];
  description: string;
  socials: { github: string; linkedin: string; email: string };
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  color: string;
}

interface ExperienceData {
  title: string;
  techIcons: Record<string, string>;
  experiences: ExperienceItem[];
}

interface ProjectCategory {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  icon: string;
  color: string;
}

interface ProjectsData {
  title: string;
  viewMoreLink: string;
  techIcons: Record<string, string>;
  projectCategories: ProjectCategory[];
}

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

interface SkillsData {
  title: string;
  skillCategories: SkillCategory[];
}

interface PortfolioData {
  hero: HeroData;
  header: { logo: string; navItems: { name: string; href: string }[] };
  about: {
    title: string;
    birthDate?: string;
    studiesStartDate?: string;
    paragraphs: string[];
    skills: {
      icon: string;
      title: string;
      description: string;
      color: string;
    }[];
    funFacts: { icon: string; value: string; label: string; color: string }[];
  };
  skills: SkillsData;
  experience: ExperienceData;
  projects: ProjectsData;
  contact: Record<string, unknown>;
}

// --- Configuration ---
const useLocal = process.env.USE_LOCAL === "true" || false;

interface ServiceAccountKey {
  project_id?: string;
  client_email?: string;
  private_key?: string;
  [key: string]: unknown;
}
const serviceAccountPath = join(__dirname, "serviceAccountKey.json");
const serviceAccount: ServiceAccountKey = (() => {
  try {
    const fromFile = fs.readFileSync(serviceAccountPath, "utf-8");
    return JSON.parse(fromFile) as ServiceAccountKey;
  } catch {
    return JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT || "{}"
    ) as ServiceAccountKey;
  }
})();
const DOC_ID = process.env.GOOGLE_DOC_ID || "";

if (!serviceAccount.project_id) {
  console.error(
    "❌ Missing service account. Add scripts/serviceAccountKey.json or set FIREBASE_SERVICE_ACCOUNT."
  );
  process.exit(1);
}
if (!useLocal && !DOC_ID) {
  console.error(
    "❌ Missing environment variable: GOOGLE_DOC_ID (required when useLocal is false)"
  );
  process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount as Parameters<typeof cert>[0]),
});
const db = getFirestore();

const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/documents.readonly"],
});
const docs = google.docs({ version: "v1", auth });

/** Paragraph shape from Google Docs API (body and table cells). */
type DocParagraph = {
  elements?: { textRun?: { content?: string } }[];
  paragraphStyle?: { namedStyleType?: string };
};

/** Table cell content is an array of structural elements (paragraphs, nested tables). */
type StructuralElement = {
  paragraph?: DocParagraph;
  table?: {
    tableRows?: { tableCells?: { content?: StructuralElement[] }[] }[];
  };
};

type StyledLine = { style: string; text: string };

/** Extract text and style from a single paragraph element. */
function paragraphToStyledLine(p: DocParagraph): StyledLine | null {
  if (!p?.elements) return null;
  const text = p.elements
    .map((e) => e.textRun?.content ?? "")
    .join("")
    .trim();
  if (!text) return null;
  const style = p.paragraphStyle?.namedStyleType ?? "NORMAL_TEXT";
  return { style, text };
}

/** Sentinel style to mark end of a table row so we can chunk experiences/projects by row. */
const TABLE_ROW_END = "__TABLE_ROW_END__";

/** Recursively extract paragraphs from body content and from inside tables (row-by-row, cell-by-cell). */
function extractParagraphs(
  content: StructuralElement[] | undefined
): StyledLine[] {
  const result: StyledLine[] = [];
  if (!content) return result;

  for (const element of content) {
    if (element.paragraph) {
      const line = paragraphToStyledLine(element.paragraph);
      if (line) result.push(line);
      continue;
    }
    if (element.table?.tableRows) {
      for (const row of element.table.tableRows) {
        for (const cell of row.tableCells ?? []) {
          const inner = extractParagraphs(cell.content);
          result.push(...inner);
        }
        result.push({ style: TABLE_ROW_END, text: "" });
      }
    }
  }
  return result;
}

/** Section-delimiter styles in Google Docs (Heading 1, Heading 2, Title). */
const SECTION_HEADING_STYLES = new Set(["HEADING_1", "HEADING_2", "TITLE"]);

/** Sub-section style: use Heading 3 in the Doc for each experience block and each project title. */
const SUB_SECTION_HEADING_STYLES = new Set(["HEADING_3"]);

/** Group paragraphs into sections by HEADING_1/HEADING_2/TITLE. First block before any is "Profile". */
function groupBySections(paragraphs: StyledLine[]): Map<string, StyledLine[]> {
  const sections = new Map<string, StyledLine[]>();
  let currentSection = "Profile";
  let currentLines: StyledLine[] = [];

  for (const item of paragraphs) {
    const { style, text } = item;
    if (!text && style !== TABLE_ROW_END) continue;

    if (SECTION_HEADING_STYLES.has(style)) {
      if (currentLines.length > 0) {
        sections.set(currentSection, [...currentLines]);
        currentLines = [];
      }
      currentSection = text.trim();
    } else {
      currentLines.push({ style, text });
    }
  }
  if (currentLines.length > 0) {
    sections.set(currentSection, currentLines);
  }
  return sections;
}

/** Split a section's styled lines into chunks by HEADING_3. Each chunk starts with the heading line. */
function splitBySubHeadings(
  styledLines: StyledLine[],
  subStyles: Set<string> = SUB_SECTION_HEADING_STYLES
): StyledLine[][] {
  const chunks: StyledLine[][] = [];
  let current: StyledLine[] = [];

  for (const item of styledLines) {
    if (item.style === TABLE_ROW_END) continue;
    if (subStyles.has(item.style)) {
      if (current.length > 0) chunks.push(current);
      current = [item];
    } else {
      current.push(item);
    }
  }
  if (current.length > 0) chunks.push(current);
  return chunks;
}

/** Split section content by table row boundaries (when content came from tables). */
function splitByTableRows(styledLines: StyledLine[]): StyledLine[][] {
  const chunks: StyledLine[][] = [];
  let current: StyledLine[] = [];
  for (const item of styledLines) {
    if (item.style === TABLE_ROW_END) {
      if (current.length > 0) chunks.push(current);
      current = [];
    } else {
      current.push(item);
    }
  }
  if (current.length > 0) chunks.push(current);
  return chunks;
}

/** Chunk looks like a table row (few cells), not a description block. */
function isTableRowChunk(chunk: StyledLine[]): boolean {
  const lines = chunk.map((p) => p.text).filter(Boolean);
  if (lines.length === 0 || lines.length > 4) return false;
  return !lines[0].trimStart().startsWith("●");
}

/** Chunk looks like role description (bullets or multiple lines). */
function isDescriptionChunk(chunk: StyledLine[]): boolean {
  const lines = chunk.map((p) => p.text).filter(Boolean);
  if (lines.length === 0) return false;
  return lines.some((l) => l.trimStart().startsWith("●")) || lines.length >= 3;
}

/** Turn bullet lines into a single description string. */
function descriptionChunkToText(chunk: StyledLine[]): string {
  return chunk
    .map((p) => p.text.trim())
    .filter(Boolean)
    .map((l) => (/^●\s*/.test(l) ? l.replace(/^●\s*/, "").trim() : l))
    .join(" ")
    .trim();
}

/** True if line looks like company name or location (not a bullet/sentence). */
function looksLikeLeadingInfo(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  if (/^●\s*/.test(t)) return false;
  if (t.length > 80) return false;
  if (looksLikeDuration(t)) return false;
  if (/\b(Developed|Engineered|Collaborated|Contributed|Gained|Participated|Spearheaded|Orchestrated|Built|Designed)\b/i.test(t)) return false;
  if (/,/.test(t)) return true;
  if (/\b(CABA|Buenos Aires|Remote)\b/i.test(t)) return true;
  if (t.length <= 30 && /^[A-Za-z0-9\s&.-]+$/.test(t) && !/\b(using|with|for|and|the)\b/i.test(t)) return true;
  return false;
}

/** True if line looks like a job title (short, role-like) or duration - should not be in description body. */
function looksLikeLeadingLine(line: string): boolean {
  const t = line.trim();
  if (!t) return true;
  if (looksLikeDuration(t)) return true;
  if (/^●\s*/.test(t)) return false;
  if (t.length <= 40 && /\b(Developer|Engineer|Trainee|Intern|Manager|Designer|Software)\b/i.test(t)) return true;
  if (looksLikeLeadingInfo(t)) return true;
  return false;
}

/**
 * Strip leading duration/title/location lines from a description chunk.
 * Also strips a duration prefix from the first line if it's concatenated with the description (e.g. "December 2024 – April 2025 Gained...").
 * Returns the chunk without those lines, and the first duration found (if any) so we can set exp.duration when the table didn't provide it.
 */
function stripLeadingInfoFromDescription(
  chunk: StyledLine[]
): { stripped: StyledLine[]; leadingDuration?: string } {
  let start = 0;
  let leadingDuration: string | undefined;
  for (let i = 0; i < chunk.length; i++) {
    const text = chunk[i].text.trim();
    if (!looksLikeLeadingLine(chunk[i].text)) break;
    if (!leadingDuration && looksLikeDuration(text)) leadingDuration = text;
    start = i + 1;
  }
  let stripped: StyledLine[] = start === 0 ? chunk : chunk.slice(start);
  if (stripped.length > 0) {
    const firstText = stripped[0].text;
    const extracted = extractLeadingDuration(firstText);
    if (extracted) {
      if (!leadingDuration) leadingDuration = extracted.duration;
      if (extracted.rest) {
        stripped = [
          { ...stripped[0], text: extracted.rest },
          ...stripped.slice(1),
        ];
      } else {
        stripped = stripped.slice(1);
      }
    }
  }
  return { stripped, leadingDuration };
}

/**
 * Split a description chunk so trailing company/location lines (next job's leading info)
 * are not included in the description. Returns { descriptionPart, overflowPart }.
 * If overflow is a single line like "Globant CABA, Buenos Aires", split into two lines (company, location).
 */
function splitDescriptionFromLeadingOverflow(
  chunk: StyledLine[]
): { descriptionPart: StyledLine[]; overflowPart: StyledLine[] } {
  const lines = chunk.map((p) => p.text);
  let cut = lines.length;
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (!line) continue;
    if (!looksLikeLeadingInfo(lines[i])) break;
    cut = i;
  }
  if (cut >= lines.length) {
    return { descriptionPart: chunk, overflowPart: [] };
  }
  const descriptionPart = chunk.slice(0, cut);
  let overflowPart = chunk.slice(cut);
  if (overflowPart.length === 1) {
    const t = overflowPart[0].text.trim();
    const commaIdx = t.indexOf(",");
    if (commaIdx > 0) {
      const company = t.slice(0, commaIdx).trim();
      const location = t.slice(commaIdx + 1).trim();
      if (company && location) {
        overflowPart = [
          { style: overflowPart[0].style, text: company },
          { style: overflowPart[0].style, text: location },
        ];
      }
    }
  }
  return { descriptionPart, overflowPart };
}

/**
 * Parse experience section when it contains tables + following bullets.
 * Structure: table (2 rows = leading info) → bullet block (description) → next table → ...
 * A new table starts a new position. Trailing company/location in a description chunk
 * (next job's leading info) is stripped and prepended to the next table.
 */
function parseExperiencesFromTableAndBullets(
  styledLines: StyledLine[]
): Omit<ExperienceItem, "technologies" | "color">[] {
  const chunks = splitByTableRows(styledLines);
  const experiences: Omit<ExperienceItem, "technologies" | "color">[] = [];
  let i = 0;
  let pendingLeading: StyledLine[] = [];

  while (i < chunks.length) {
    let chunk = chunks[i];
    if (pendingLeading.length > 0 && isTableRowChunk(chunk)) {
      chunk = [...pendingLeading, ...chunk];
      pendingLeading = [];
    }
    const lines = chunk.map((p) => p.text).filter(Boolean);

    if (
      isTableRowChunk(chunk) &&
      i + 1 < chunks.length &&
      isTableRowChunk(chunks[i + 1])
    ) {
      const merged = [...chunk, ...chunks[i + 1]];
      const exp = parseOneExperienceBlock(
        merged.map((p) => p.text).filter(Boolean)
      );
      if (exp) {
        if (i + 2 < chunks.length && isDescriptionChunk(chunks[i + 2])) {
          const { descriptionPart, overflowPart } =
            splitDescriptionFromLeadingOverflow(chunks[i + 2]);
          const { stripped, leadingDuration } = stripLeadingInfoFromDescription(descriptionPart);
          exp.description = descriptionChunkToText(stripped);
          if (!exp.duration && leadingDuration) exp.duration = normalizeDuration(leadingDuration);
          if (overflowPart.length > 0) pendingLeading = overflowPart;
          i += 3;
        } else {
          i += 2;
        }
        experiences.push(exp);
      } else {
        i += 2;
      }
    } else if (isTableRowChunk(chunk)) {
      const exp = parseOneExperienceBlock(lines);
      if (exp) {
        if (i + 1 < chunks.length && isDescriptionChunk(chunks[i + 1])) {
          const { descriptionPart, overflowPart } =
            splitDescriptionFromLeadingOverflow(chunks[i + 1]);
          const { stripped, leadingDuration } = stripLeadingInfoFromDescription(descriptionPart);
          exp.description = descriptionChunkToText(stripped);
          if (!exp.duration && leadingDuration) exp.duration = normalizeDuration(leadingDuration);
          if (overflowPart.length > 0) pendingLeading = overflowPart;
          i += 2;
        } else {
          i += 1;
        }
        experiences.push(exp);
      } else {
        i += 1;
      }
    } else {
      i += 1;
    }
  }

  return experiences;
}

/** Max length for hero description (short blurb only). */
const HERO_DESCRIPTION_MAX_LEN = 500;

/** Parse Profile section into name and short description (hero). Stops at first blank line. */
function parseProfile(lines: string[]): { name: string; description: string } {
  const name = lines[0]?.trim() ?? "";
  const descLines: string[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) break; // first blank line = end of hero description paragraph
    descLines.push(line);
  }
  let description = descLines.join(" ").trim();
  if (description.length > HERO_DESCRIPTION_MAX_LEN) {
    description = description.slice(0, HERO_DESCRIPTION_MAX_LEN - 3) + "...";
  }
  return { name, description };
}

/** Split by tab or 2+ spaces (company \t location or "Company    Location") */
function splitTwoParts(line: string): [string, string] {
  const parts = line
    .split(/\t|\s{2,}/)
    .map((s) => s.trim())
    .filter(Boolean);
  return [parts[0] ?? "", parts[1] ?? ""];
}

/** Normalize duration for display (trim, "Ongoing" → "Present"). */
function normalizeDuration(s: string): string {
  return s.trim().replace(/\bOngoing\b/i, "Present");
}

/** Matches duration strings like "October 2025 – Ongoing", "December 2024 – April 2025", "2022 - Present". */
function looksLikeDuration(s: string): boolean {
  const t = s.trim();
  return (
    /^[A-Za-z]+\s+\d{4}\s*[-–—]\s*(?:[A-Za-z]+\s+\d{4}|ongoing|present|current)$/i.test(
      t
    ) ||
    /^\d{4}\s*[-–—]\s*(?:[A-Za-z]+\s+\d{4}|ongoing|present|current)$/i.test(
      t
    ) ||
    /^[A-Za-z]+\s+\d{4}\s*[-–—]\s*[A-Za-z]+\s+\d{4}$/i.test(t)
  );
}

/** Regexes to match a duration at the start of a string (capture duration, rest). */
const DURATION_PREFIX =
  /^([A-Za-z]+\s+\d{4}\s*[-–—]\s*(?:[A-Za-z]+\s+\d{4}|ongoing|present|current))\s*(.*)$/i;
const DURATION_PREFIX_NUM =
  /^(\d{4}\s*[-–—]\s*(?:[A-Za-z]+\s+\d{4}|ongoing|present|current))\s*(.*)$/i;
const DURATION_PREFIX_TWO_MONTHS =
  /^([A-Za-z]+\s+\d{4}\s*[-–—]\s*[A-Za-z]+\s+\d{4})\s*(.*)$/i;

/** If the string starts with a duration, return it and the rest; otherwise return null. */
function extractLeadingDuration(
  s: string
): { duration: string; rest: string } | null {
  const t = s.trim();
  for (const re of [
    DURATION_PREFIX,
    DURATION_PREFIX_NUM,
    DURATION_PREFIX_TWO_MONTHS,
  ]) {
    const m = t.match(re);
    if (m) return { duration: m[1].trim(), rest: m[2].trim() };
  }
  return null;
}

/**
 * Parse a single experience block. Supports:
 * - Paragraph format: line0 = company (optional \\t location), line1 = title \\t duration, then bullets.
 * - Table format (one row): line0 = company, line1 = role, line2 = duration, rest = description.
 * - Table format (two rows merged): 4 lines = location, company, duration, title (row1: loc|company, row2: duration|role).
 */
function parseOneExperienceBlock(
  lines: string[]
): Omit<ExperienceItem, "technologies" | "color"> | null {
  const trimmed = lines.map((l) => l.trim()).filter(Boolean);
  if (trimmed.length < 2) return null;

  let company: string;
  let location: string;
  let title: string;
  let duration: string;
  let description: string;

  const hasTabOrSpaces = (s: string) => /\t|\s{2,}/.test(s);

  // Two-row table merged: 3–5 lines = duration + title, company, location (any order)
  if (trimmed.length >= 3 && trimmed.length <= 5) {
    const durationIdx = trimmed.findIndex((s) => looksLikeDuration(s));
    if (durationIdx >= 0) {
      const durationVal = trimmed[durationIdx];
      const rest = trimmed.filter((_, i) => i !== durationIdx);
      const locationVal =
        rest.find(
          (s) =>
            s === "Remote" ||
            /,/.test(s) ||
            /\b(CABA|Buenos\s*Aires|Buenos Aires)\b/i.test(s)
        ) ?? "";
      const titleVal =
        rest.find((s) =>
          /\b(Developer|Engineer|Trainee|Intern|Manager|Designer|Software)\b/i.test(
            s
          )
        ) ?? "";
      const companyVal =
        rest.find((s) => s !== locationVal && s !== titleVal) ?? "";
      if (titleVal || companyVal) {
        title = titleVal;
        company = companyVal;
        location = locationVal;
        duration = normalizeDuration(durationVal);
        description = "";
        return { title, company, location, duration, description };
      }
    }
  }

  if (trimmed.length >= 3 && !hasTabOrSpaces(trimmed[1])) {
    // Table layout (one row): company | role | duration | description
    company = trimmed[0];
    title = trimmed[1];
    duration = normalizeDuration(trimmed[2]);
    location = "";
    const rest = trimmed.slice(3);
    description = rest
      .map((l) => (/^●\s*/.test(l) ? l.replace(/^●\s*/, "").trim() : l))
      .join(" ")
      .trim();
  } else {
    // Paragraph layout: line0 = company \\t location, line1 = title \\t duration, then bullets
    [company, location] = splitTwoParts(trimmed[0]);
    const [titlePart, durationPart] = splitTwoParts(trimmed[1]);
    title = titlePart;
    duration = normalizeDuration(durationPart);
    const bullets: string[] = [];
    for (let i = 2; i < trimmed.length; i++) {
      const line = trimmed[i];
      if (/^●\s*/.test(line)) bullets.push(line.replace(/^●\s*/, "").trim());
    }
    description = bullets.join(" ").trim();
  }

  if (!company && !title) return null;
  return { title, company, location, duration, description };
}

/** Parse Experience section: either by HEADING_3 chunks (one block per chunk) or legacy block-by-block. */
function parseExperience(
  lines: string[],
  oneBlockPerChunk: boolean
): Omit<ExperienceItem, "technologies" | "color">[] {
  if (oneBlockPerChunk) {
    const item = parseOneExperienceBlock(lines);
    return item ? [item] : [];
  }
  const items: Omit<ExperienceItem, "technologies" | "color">[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const [company, location] = splitTwoParts(line);
    i++;
    if (i >= lines.length) break;
    const [title, duration] = splitTwoParts(lines[i]);
    i++;
    const bullets: string[] = [];
    while (i < lines.length && /^●\s*/.test(lines[i])) {
      bullets.push(lines[i].replace(/^●\s*/, "").trim());
      i++;
    }
    const description = bullets.join(" ");
    if (company || title) {
      items.push({ title, company, location, duration, description });
    }
  }
  return items;
}

/**
 * Parse a single project block. Supports:
 * - Paragraph format: line0 = title, then bullets, then "Used Technologies: ..."
 * - Table format: line0 = title, line1 = description, line2 = "Used Technologies: ..." (or description in one cell, tech in next)
 */
function parseOneProjectBlock(
  lines: string[]
): { title: string; description: string; technologies: string[] } | null {
  const trimmed = lines.map((l) => l.trim()).filter(Boolean);
  if (trimmed.length === 0) return null;
  const title = trimmed[0];
  const techIdx = trimmed.findIndex((l) => /used technologies?:\s*/i.test(l));
  let description: string;
  let technologies: string[] = [];
  if (techIdx >= 0) {
    const techLine = trimmed[techIdx]
      .replace(/^.*used technologies?:\s*/i, "")
      .trim();
    technologies = techLine
      .split(/[·|,\s-]+/)
      .map((t) => t.trim())
      .filter(Boolean);
    const descParts = trimmed
      .slice(1, techIdx)
      .map((l) => (/^●\s*/.test(l) ? l.replace(/^●\s*/, "").trim() : l));
    description = descParts.join(" ").trim();
  } else {
    const bullets: string[] = [];
    let i = 1;
    while (i < trimmed.length && /^●\s*/.test(trimmed[i])) {
      bullets.push(trimmed[i].replace(/^●\s*/, "").trim());
      i++;
    }
    description = bullets.join(" ").trim();
  }
  return { title, description, technologies };
}

/** Parse Projects section: either by HEADING_3 chunks (one project per chunk, first line = title) or legacy. */
function parseProjects(
  lines: string[],
  oneProjectPerChunk: boolean
): { title: string; description: string; technologies: string[] }[] {
  if (oneProjectPerChunk) {
    const proj = parseOneProjectBlock(lines);
    return proj ? [proj] : [];
  }
  const items: {
    title: string;
    description: string;
    technologies: string[];
  }[] = [];
  let i = 0;
  while (i < lines.length) {
    const firstLine = lines[i];
    if (!firstLine?.trim()) {
      i++;
      continue;
    }
    const [titlePart] = splitTwoParts(firstLine);
    const title = titlePart || firstLine.trim();
    i++;
    const bullets: string[] = [];
    while (i < lines.length && /^●\s*/.test(lines[i])) {
      bullets.push(lines[i].replace(/^●\s*/, "").trim());
      i++;
    }
    const description = bullets.join(" ");
    let technologies: string[] = [];
    if (i < lines.length && /used technologies?:\s*/i.test(lines[i])) {
      const techLine = lines[i]
        .replace(/^.*used technologies?:\s*/i, "")
        .trim();
      technologies = techLine
        .split(/[·|,\s-]+/)
        .map((t) => t.trim())
        .filter(Boolean);
      i++;
    }
    if (title) items.push({ title, description, technologies });
  }
  return items;
}

/** Parse "Skills & Interests" – technical line like "● Technical: Kotlin, Rust, ..." */
function parseSkillsLine(line: string): string[] {
  const match = line.match(/●\s*Technical:\s*(.+)/i);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Default tech icon URL (skillicons.dev placeholder for unknown techs). */
const DEFAULT_TECH_ICON = "https://skillicons.dev/icons?i=generic";

async function syncData() {
  console.log("🚀 Starting Sync...");

  try {
    // Load portfolio data (local file is always used as base when merging from Doc)
    const fallbackPath = join(__dirname, "../src/data/portfolio-data.json");
    const fallback: PortfolioData = JSON.parse(
      fs.readFileSync(fallbackPath, "utf-8")
    );

    if (useLocal) {
      // Use local data as-is and write to Firestore
      const portfolioRef = db.collection("portfolio").doc("data");
      await portfolioRef.set(fallback);
      console.log("✅ Firestore portfolio/data updated from local file.");
      return;
    }

    // Extract document from Google Docs (GOOGLE_DOC_ID)
    // Ensure the Doc is shared with the service account email (Viewer is enough).
    const res = await docs.documents
      .get({ documentId: DOC_ID })
      .catch((err: { code?: number; cause?: { status?: string } }) => {
        if (err?.code === 403 || err?.cause?.status === "PERMISSION_DENIED") {
          console.error(
            "\n📌 Share your Google Doc with this email (Viewer access):",
            serviceAccount.client_email || "(unknown)"
          );
          console.error(
            "   In Google Docs: Open the doc → Share → Add the email above.\n"
          );
        }
        throw err;
      });
    const content = res.data.body?.content as StructuralElement[] | undefined;
    const paragraphs = extractParagraphs(content);
    const sections = groupBySections(paragraphs);

    // --- Hero (from Profile) ---
    const profileStyled = sections.get("Profile") ?? [];
    const profileLines = profileStyled.map((p) => p.text);
    const { name, description } = parseProfile(profileLines);
    if (name) fallback.hero.name = name;
    if (description) fallback.hero.description = description;

    // --- Experience (tables = leading info; bullets after a table = that position's description; new table = new position) ---
    const experienceStyled = sections.get("Experience") ?? [];
    const hasTableRows = experienceStyled.some(
      (p) => p.style === TABLE_ROW_END
    );
    const experienceLines = experienceStyled.map((p) => p.text).filter(Boolean);
    const parsedExperiences = hasTableRows
      ? parseExperiencesFromTableAndBullets(experienceStyled)
      : (() => {
          const experienceChunks = splitBySubHeadings(experienceStyled);
          return experienceChunks.length > 1
            ? experienceChunks.flatMap((chunk) => {
                const lines = chunk.map((p) => p.text);
                return parseExperience(lines, true);
              })
            : parseExperience(experienceLines, false);
        })();
    if (parsedExperiences.length > 0) {
      const colors = [
        "from-blue-500 to-cyan-500",
        "from-green-500 to-teal-500",
        "from-purple-500 to-pink-500",
      ];
      fallback.experience.experiences = parsedExperiences.map((exp, idx) => {
        const techNames =
          exp.description.match(
            /\b(Python|Flutter|Dart|Rive|GitHub|GitLab|Git|Kotlin|Spring|Go|Rust|React|TypeScript|Qt|ScreenCaptureKit|PyObjC|PyAudio)\b/gi
          ) ?? [];
        const technologies = [...new Set(techNames)].slice(0, 6);
        return {
          ...exp,
          technologies,
          color: colors[idx % colors.length],
        };
      });
    }

    // --- Projects (from tables: one row = one project; or use HEADING_3 per project title) ---
    const projectStyled = sections.get("Projects") ?? [];
    const projectHasTableRows = projectStyled.some(
      (p) => p.style === TABLE_ROW_END
    );
    const projectLines = projectStyled.map((p) => p.text).filter(Boolean);
    const parsedProjects = projectHasTableRows
      ? splitByTableRows(projectStyled)
          .map((row) =>
            parseOneProjectBlock(row.map((p) => p.text).filter(Boolean))
          )
          .filter(
            (
              p
            ): p is {
              title: string;
              description: string;
              technologies: string[];
            } => p != null
          )
      : (() => {
          const projectChunks = splitBySubHeadings(projectStyled);
          return projectChunks.length > 1
            ? projectChunks.flatMap((chunk) => {
                const lines = chunk.map((p) => p.text);
                return parseProjects(lines, true);
              })
            : parseProjects(projectLines, false);
        })();
    if (parsedProjects.length > 0) {
      const normalizeTitle = (t: string) =>
        t.toLowerCase().replace(/[\s-]/g, "");
      const byTitle = new Map(
        fallback.projects.projectCategories.map((p) => [
          normalizeTitle(p.title),
          p,
        ])
      );
      fallback.projects.projectCategories = parsedProjects.map((p) => {
        const existing = byTitle.get(normalizeTitle(p.title));
        return {
          title: p.title,
          description: p.description,
          technologies: p.technologies,
          image:
            existing?.image ??
            fallback.projects.projectCategories[0]?.image ??
            "",
          github: existing?.github ?? fallback.projects.viewMoreLink,
          live: existing?.live ?? "",
          icon: existing?.icon ?? "Globe",
          color: existing?.color ?? "from-blue-500 to-cyan-500",
        };
      });
    }

    // --- Skills (from "Skills & Interests" technical line) ---
    const skillsStyled = sections.get("Skills & Interests") ?? [];
    const skillsLines = skillsStyled.map((p) => p.text);
    const techSkillNames = skillsLines.flatMap(parseSkillsLine);
    if (techSkillNames.length > 0) {
      const skillCategories = fallback.skills.skillCategories;
      const allIcons: Record<string, string> = {
        ...fallback.experience.techIcons,
        ...fallback.projects.techIcons,
      };
      const iconFor = (name: string): string => {
        const exact = allIcons[name];
        if (exact) return exact;
        const key = name.replace(/\s+/g, "").replace(/\./g, "").toLowerCase();
        const match = Object.keys(allIcons).find(
          (k) => k.replace(/\s+/g, "").replace(/\./g, "").toLowerCase() === key
        );
        return match ? allIcons[match] : DEFAULT_TECH_ICON;
      };
      const fromCvCategory: SkillCategory = {
        title: "From CV",
        skills: techSkillNames.map((name) => ({
          name,
          icon: iconFor(name),
        })),
      };
      fallback.skills.skillCategories = [fromCvCategory, ...skillCategories];
    }

    // Write single document to portfolio/data (app reads this)
    const portfolioRef = db.collection("portfolio").doc("data");
    await portfolioRef.set(fallback);

    console.log("✅ Firestore portfolio/data updated from Google Doc!");
  } catch (error) {
    console.error("❌ Error during sync:", error);
    process.exit(1);
  }
}

syncData();
