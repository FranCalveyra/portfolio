---
title: "Featured Projects"
weight: 4
section_id: "projects"
nav_title: "Projects"
build:
  render: never

viewMoreLink: "https://github.com/FranCalveyra"

techIcons:
  React: "https://skillicons.dev/icons?i=react"
  PostgreSQL: "https://skillicons.dev/icons?i=postgresql"
  Tailwind CSS: "https://skillicons.dev/icons?i=tailwind"
  TypeScript: "https://skillicons.dev/icons?i=typescript"
  Java: "https://skillicons.dev/icons?i=java"
  Kotlin: "https://skillicons.dev/icons?i=kotlin"
  Spring: "https://skillicons.dev/icons?i=spring"
  Gradle: "https://skillicons.dev/icons?i=gradle"
  Go: "https://skillicons.dev/icons?i=go"
  Rust: "https://skillicons.dev/icons?i=rust"
  J-Pro: "https://avatars.githubusercontent.com/u/32846447?v=4"
  JavaFX: "https://www.qftest.com/blog/resources/JavaFX.png"
  Markdown: "https://skillicons.dev/icons?i=md"
  Azure: "https://skillicons.dev/icons?i=azure"
  Nginx: "https://skillicons.dev/icons?i=nginx"
  Redis: "https://skillicons.dev/icons?i=redis"
  Next: "https://skillicons.dev/icons?i=nextjs"
  Vercel: "https://skillicons.dev/icons?i=vercel"
  Langchain: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAiZAAZAA0"
  Terraform: "https://skillicons.dev/icons?i=terraform"
  Hugo: "https://icon.icepanel.io/Technology/svg/Hugo.svg"
  Python: "https://skillicons.dev/icons?i=python"
  Ollama: "https://images.seeklogo.com/logo-png/59/2/ollama-logo-png_seeklogo-593420.png"
  SQLite: "https://skillicons.dev/icons?i=sqlite"
  Docker: "https://skillicons.dev/icons?i=docker"
  GitHub Actions: "https://skillicons.dev/icons?i=githubactions"
  GoReleaser: "https://avatars.githubusercontent.com/u/24697112?v=4"
  LangGraph: "https://raw.githubusercontent.com/FranCalveyra/FranCalveyra/main/icons/langchain.svg"
  New Relic: "https://raw.githubusercontent.com/FranCalveyra/FranCalveyra/main/icons/new-relic.svg"
  Auth0: "https://cdn.simpleicons.org/auth0"

projects:
  - title: "Claude Desktop Swap"
    description: "An open-source Go CLI that switches between multiple Claude Desktop accounts without logging out, treating the app's local SQLite cookie database as the authoritative session state. Features atomic profile snapshot/restore with WAL checkpointing, rollback on failed writes, and strict file permissions, shipped as versioned cross-platform binaries via GoReleaser."
    technologies: ["Go", "SQLite", "GitHub Actions", "GoReleaser"]
    image: "https://raw.githubusercontent.com/FranCalveyra/claude-desktop-swap/main/assets/claude-desktop-swap-512.png"
    image_fit: "contain"
    github: "https://github.com/FranCalveyra/claude-desktop-swap"
    icon: "Globe"

  - title: "Polyglot"
    description: "An open-source AI skill library that lets agents translate files between formats by discovering or building the required converter at runtime, instead of relying on hardcoded conversions. Built on a LangGraph agentic backend orchestrating skill discovery, conversion and format validation, with Azure infrastructure fully provisioned through Terraform and a test harness spanning unit, integration and security scanning."
    technologies: ["LangGraph", "Python", "Terraform", "Azure"]
    image: "/portfolio/assets/polyglot-logo.jpeg"
    image_fit: "contain"
    github: "https://github.com/Polyglot-Austral"
    icon: "Globe"

  - title: "Chess Engine"
    description: "A Java-based Chess Engine with a responsive JavaFX GUI. It supports variants like Capablanca Chess and Chess960, and was developed with a strong focus on applying SOLID principles for a clean and maintainable codebase."
    technologies: ["Java", "J-Pro", "JavaFX", "Kotlin", "Gradle", "Docker", "Markdown"]
    image: "https://digital-game-technology-2021.imgix.net/media/Headers/dgt-electronic-plastic-chess-pieces.jpg?auto=format&crop=focalpoint&domain=digital-game-technology-2021.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=721&ixlib=php-3.3.1&q=82&w=1081"
    github: "https://github.com/FranCalveyra/chess"
    live: "https://chess-engine-lk8z.onrender.com/"
    icon: "Globe"

  - title: "Snippet-Searcher"
    description: "A microservices-based system for managing custom LSP code snippets. It allows for uploading, editing, and execution with its own compiler and testing framework. Built with a robust and scalable architecture for handling complex code operations."
    technologies: ["React", "PostgreSQL", "TypeScript", "Java", "Kotlin", "Spring", "Gradle", "Azure", "Redis", "Nginx", "Docker", "New Relic", "Auth0"]
    image: "https://opensource.com/sites/default/files/lead-images/search_find_code_python_programming.png"
    github: "https://github.com/Al-Fajor"
    live: "https://francalveyra.github.io/portfolio"
    icon: "Globe"

  - title: "Portfolio"
    description: "A minimal, dependency-free portfolio site built with Hugo and pure Markdown. It features a self-typing hero animation, glassmorphism cards, scroll-triggered fade-ins, and a responsive timeline — all powered by vanilla CSS and JS with zero npm dependencies."
    technologies: ["Hugo", "Markdown", "Go"]
    image: "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp"
    github: "https://github.com/FranCalveyra/portfolio"
    live: "https://francalveyra.github.io/portfolio"
    icon: "Globe"

  - title: "Agentic DevTools"
    description: "A terminal-based AI assistant for Python code quality. Paste code and ask it to lint, format, refactor, or run tests — the agent picks the right tool, executes it, and explains the results. Features RAG-powered refactoring with GitHub repo indexing."
    technologies: ["Python", "Langchain", "Ollama"]
    image: "https://opensource.com/sites/default/files/lead-images/terminal_command_linux_desktop_code.jpg"
    github: "https://github.com/FranCalveyra/agentic-devtools"
    icon: "Globe"

  - title: "Rusty Instagram Bot"
    description: "A Rust backend integrating with Meta's Instagram Graph API for DM auto-replies, webhook forwarding, and story uploads. Features HMAC-SHA256 signature verification and a Terraform-provisioned Azure cloud environment."
    technologies: ["Rust", "Terraform", "Azure"]
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png"
    github: "https://github.com/FranCalveyra/rusty-instagram-bot"
    icon: "Globe"

  - title: "Austral Map"
    description: "Interactive curriculum visualizer for the Universidad Austral Facultad de Ingeniería careers. It allows students to explore the curriculum of their chosen career and see the dependencies between subjects."
    technologies: ["React", "Next", "Tailwind CSS", "TypeScript", "Vercel"]
    image: "https://scontent.ffdo5-1.fna.fbcdn.net/v/t1.6435-9/106284541_3072441476136208_1825826628869176645_n.png?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Xqc5qUiiGlIQ7kNvwHfSKkV&_nc_oc=AdqRMv1FATNXvZ7RhJBdfQUcoJegb70wjPn6nqNhBPWQRQLp2iEdIuCypp3LbKVzcJaeujpNYZrpLBGTVr2yvnJB&_nc_zt=23&_nc_ht=scontent.ffdo5-1.fna&_nc_gid=S5Wb6Gpp0YMV1OgdZrtCHQ&_nc_ss=7a3a8&oh=00_Af1C1YAERlfhtCgpLdkHUGOWw-_Yf0T1rvFYOX6R85Cocg&oe=69FD254F"
    github: "https://github.com/FranCalveyra/austral-map-v2"
    live: "https://austral-map-v2.vercel.app/"
    icon: "Globe"
---
