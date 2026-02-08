export interface HeroData {
  name: string;
  titles: string[];
  description: string;
  socials: { github: string; linkedin: string; email: string };
}

export interface NavItem {
  name: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  navItems: NavItem[];
}

export interface AboutSkill {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface FunFact {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface AboutData {
  title: string;
  birthDate?: string;
  studiesStartDate?: string;
  paragraphs: string[];
  skills: AboutSkill[];
  funFacts: FunFact[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillsData {
  title: string;
  skillCategories: SkillCategory[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  color: string;
}

export interface ExperienceData {
  title: string;
  techIcons: Record<string, string>;
  experiences: ExperienceItem[];
}

export interface ProjectCategory {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  icon: string;
  color: string;
}

export interface ProjectsData {
  title: string;
  viewMoreLink: string;
  techIcons: Record<string, string>;
  projectCategories: ProjectCategory[];
}

export interface ContactDetail {
  icon: string;
  title: string;
  value: string;
  href?: string;
  color?: string;
}

export interface ContactSocial {
  icon: string;
  href: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  contactDetails: ContactDetail[];
  socialsTitle: string;
  socials: ContactSocial[];
  footerText: string;
}

export interface PortfolioData {
  hero: HeroData;
  header: HeaderData;
  about: AboutData;
  skills: SkillsData;
  experience: ExperienceData;
  projects: ProjectsData;
  contact: ContactData;
}
