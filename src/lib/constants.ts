import type { Project, SkillCategory, SocialLink, Skill } from "./types"

export const BIO = {
  name: "Vano",
  title: "Developer | Product Builder",
  subtitle: "Full-stack engineer with systems and game dev depth.",
  description:
    "Systems Information student at UPN Veteran Jakarta. I build products end-to-end — from problem discovery, system design, to implementation. Focused on TypeScript/Next.js, Go, and Java.",
  philosophy: "Build from scratch. Understand deeply. Ship with intention.",
}

export const PROJECTS: Project[] = [
  {
    id: "qios",
    title: "QIOS",
    description:
      "Multi-tenant SME operations platform handling finance, inventory, and analytics with structured data flows and AI-assisted insights.",
    why:
      "Focused on real-world system design: multi-tenant architecture, data isolation, and operational workflows from scratch.",
    tags: ["Next.js", "TypeScript", "Full Stack", "Multi-tenant", "System Design"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/qios-web" },
    ],
    image: "/screenshots/qios-ss-1.jpeg",
    role: "Product Lead / Full-Stack",
    year: "2025",
    status: "in-progress",
    featured: true,
  },
  {
    id: "eternafall",
    title: "ETERNAFALL",
    description:
      "2D RPG built in pure Java with a custom rendering loop, entity system, and battle mechanics without relying on external engines.",
    why:
      "Exploration of low-level control over game architecture, including rendering pipeline, game loop, and system modularity.",
    tags: ["Java", "Game Development", "Rendering", "Engine Architecture"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/project-eternal" },
    ],
    image: "/screenshots/eternafall-ss-1.jpeg",
    role: "Solo Developer",
    year: "2026",
    status: "active",
    featured: true,
  },
  {
    id: "grimoire",
    title: "Grimoire",
    description:
      "Terminal-based knowledge management tool designed for developers to capture and retrieve information without leaving the CLI.",
    why:
      "Built to explore CLI ergonomics, file-based data handling, and lightweight system design using Go.",
    tags: ["Go", "CLI", "TUI", "Developer Tooling", "Systems"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/grimoire" },
    ],
    image: "/screenshots/grimoire-ss-1.jpeg",
    role: "Solo Developer",
    year: "2026",
    status: "active",
    featured: true,
  },
]

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Go", "PHP", "C"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind", "HTML/CSS", "Figma"],
  },
  {
    category: "Backend & Systems",
    items: ["Express", "Laravel", "Go Concurrency", "REST API"],
  },
  {
    category: "Data & Tools",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Linux"],
  },
  {
    category: "Specialties",
    items: [
      "Game Development (Java)",
      "System Architecture",
      "CLI/TUI Tools",
      "Full-Stack Product Development",
    ],
  },
]

export const SKILLS_DETAILED: Skill[] = [
  {
    id: "java",
    label: "Java",
    category: "Language",
    color: "#5382A1",
    description:
      "Used for building custom systems and game engine architecture with full control over memory and execution flow.",
    related: ["Game Engine", "Systems Design"],
    offsetY: 40,
    imagePath: "/icons/java.png",
  },
  {
    id: "go",
    label: "Go",
    category: "Language",
    color: "#00ADD8",
    description:
      "Used for backend services and CLI tools, leveraging concurrency primitives for efficient system-level operations.",
    related: ["Concurrency", "CLI Tools", "Backend Systems"],
    offsetY: -20,
    imagePath: "/icons/golang.png",
  },
  {
    id: "python",
    label: "Python",
    category: "Language",
    color: "#3776AB",
    description:
      "Used for scripting, data processing, and lightweight automation tasks.",
    related: ["Automation", "Data Processing"],
    offsetY: -10,
    imagePath: "/icons/python.png",
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "Language",
    color: "#3178C6",
    description:
      "Primary language for building scalable full-stack applications with strong typing and maintainable architecture.",
    related: ["Next.js", "API Design", "Frontend Architecture"],
    offsetY: -30,
    imagePath: "/icons/typescript.png",
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "Language",
    color: "#F7DF1E",
    description:
      "Core language for web runtime behavior and interoperability across frontend and backend environments.",
    related: ["Browser APIs", "Node.js"],
    offsetY: 15,
    imagePath: "/icons/javascript.png",
  },
  {
    id: "php",
    label: "PHP",
    category: "Language",
    color: "#777BB4",
    description:
      "Used within Laravel ecosystem to build structured backend systems and handle server-side logic.",
    related: ["Laravel", "Backend Systems"],
    offsetY: 30,
    imagePath: "/icons/php.png",
  },
  {
    id: "laravel",
    label: "Laravel",
    category: "Backend",
    color: "#FF2D20",
    description:
      "Framework for building structured backend applications with MVC patterns and database-driven workflows.",
    related: ["PHP", "MySQL", "REST API"],
    offsetY: 45,
    imagePath: "/icons/laravel.png",
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "Backend & Frontend",
    color: "#FFFFFF",
    description:
      "Full-stack React framework used for building production-ready applications with server-side rendering and API routes.",
    related: ["React", "TypeScript", "SSR"],
    offsetY: 20,
    imagePath: "/icons/nextjs.png",
  },
  {
    id: "springboot",
    label: "Spring Boot",
    category: "Backend",
    color: "#45d000",
    description:
      "Java framework for building scalable backend services with structured configuration and dependency management.",
    related: ["Java", "REST API"],
    offsetY: -30,
    imagePath: "/icons/springboot.png",
  },
  {
    id: "mysql",
    label: "MySQL",
    category: "Data",
    color: "#006c85",
    description:
      "Relational database used for structured data storage in transactional systems.",
    related: ["SQL", "Laravel"],
    offsetY: 35,
    imagePath: "/icons/mysql.png",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    category: "Data",
    color: "#336791",
    description:
      "Primary relational database for designing robust schemas and handling complex queries.",
    related: ["Schema Design", "Query Optimization"],
    offsetY: -15,
    imagePath: "/icons/postgresql.png",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    category: "Data",
    color: "#47A248",
    description:
      "Document-based database used for flexible and unstructured data storage when schema rigidity is not required.",
    related: ["NoSQL", "Flexible Schema"],
    offsetY: 25,
    imagePath: "/icons/mongodb.png",
  },
  {
    id: "figma",
    label: "Figma",
    category: "UI/UX / Design",
    color: "#F24E1E",
    description:
      "Used for designing interfaces and prototyping product flows before implementation.",
    related: ["UI Systems", "Design Workflow"],
    offsetY: -45,
    imagePath: "/icons/figma.png",
  },
  {
    id: "claude",
    label: "Claude",
    category: "AI",
    color: "#D97757",
    description:
      "Used as an LLM assistant to accelerate development, reasoning, and code iteration.",
    related: ["LLM Workflow", "AI-assisted Dev"],
    offsetY: 15,
    imagePath: "/icons/claude.png",
  },
  {
    id: "ollama",
    label: "Ollama",
    category: "AI",
    color: "#FFFFFF",
    description:
      "Used for running and experimenting with local LLMs in controlled environments.",
    related: ["Local AI", "LLM Systems"],
    offsetY: -25,
    imagePath: "/icons/ollama.png",
    isExperimental: true,
  },
  {
    id: "openclaw",
    label: "OpenClaw",
    category: "AI / Tools",
    description:
      "Lightweight tool for orchestrating and experimenting with local LLM workflows.",
    color: "#ff3232",
    offsetY: 10,
    related: ["LLM", "Local AI", "Prompting"],
    imagePath: "/icons/openclaw.png",
    isExperimental: true,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/theoneandonlyvabo" },
  { label: "LinkedIn", url: "https://linkedin.com/in/aireladrivano" },
  { label: "Email", url: "mailto:aireladrivano196@gmail.com" },
  { label: "Instagram", url: "https://instagram.com/aireladrivano" },
]

export const CHATBOT_SYSTEM_PROMPT = `You are a portfolio assistant for Vano (Airel Adrivano)...`