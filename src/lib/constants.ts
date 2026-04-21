import type { Project, SkillCategory, SocialLink, Skill } from "./types"

export const BIO = {
  name: "Vano",
  title: "Developer | Product Builder",
  subtitle: "Full-stack engineer with game dev depth. Comfortable in Go and Java.",
  description:
    "Systems Information student at UPN Veteran Jakarta. I build products end-to-end — from strategy to execution. Primary stack: TypeScript/Next.js, Go, Java.",
  philosophy: "Build from scratch. Understand deeply. Ship with intention.",
}

export const PROJECTS: Project[] = [
  {
    id: "qios",
    title: "QIOS",
    description:
      "SME operations platform integrating finance, inventory, and analytics with AI-driven insights.",
    why:
      "End-to-end product development. From problem discovery to full-stack execution with real business impact.",
    tags: ["Next.js", "TypeScript", "Full Stack", "AI"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/qios-web" },
    ],
    image: "/screenshots/qios-ss-1.jpeg",
    role: "Product Lead / Full-Stack",
    year: "2024",
    status: "in-progress",
    featured: true,
  },
  {
    id: "eternalfall",
    title: "EternaFall",
    description:
      "Pure Java 2D RPG with custom rendering engine, battle system, and full game architecture.",
    why:
      "Built without a game engine to fully control systems, performance, and architecture from scratch.",
    tags: ["Java", "Game Dev", "Engine", "Architecture"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/project-eternal" },
    ],
    image: "/screenshots/eternalfall-ss-1.jpeg",
    role: "Solo Developer",
    year: "2025",
    status: "active",
    featured: true,
  },
  {
    id: "grimoire",
    title: "Grimoire",
    description:
      "Terminal-based documentation tool for developers to manage knowledge without leaving the workflow.",
    why:
      "Built to eliminate context switching and explore backend/system design using Go.",
    tags: ["Go", "CLI", "TUI", "Dev Tool"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/grimoire" },
    ],
    image: "/screenshots/grimoire-ss-1.jpeg",
    role: "Solo Developer",
    year: "2025",
    status: "active",
    featured: true,
  },
]

/**
 * simple list section
 */
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
    items: ["Node.js", "Express", "Laravel", "Go Concurrency", "REST API"],
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

/**
 * animated bubbles
 */
export const SKILLS_DETAILED: Skill[] = [
  {
    id: "typescript",
    label: "TypeScript",
    category: "language",
    color: "#3178C6",
    description: "Primary language for full-stack web development.",
    related: ["React", "Next.js", "Node"],
    offsetY: -30,
    imagePath: "/icons/typescript.png",
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "language",
    color: "#F7DF1E",
    description: "Core web language for dynamic frontend logic.",
    related: ["TypeScript", "React"],
    offsetY: 15,
    imagePath: "/icons/javascript.png",
  },
  {
    id: "python",
    label: "Python",
    category: "language",
    color: "#3776AB",
    description: "Used for data analysis and scripting.",
    related: ["Analytics", "Automation"],
    offsetY: -10,
    imagePath: "/icons/python.png",
  },
  {
    id: "java",
    label: "Java",
    category: "language",
    color: "#5382A1",
    description: "Core language for systems and game engine development.",
    related: ["Game Dev", "Systems"],
    offsetY: 40,
    imagePath: "/icons/java.png",
  },
  {
    id: "go",
    label: "Go",
    category: "language",
    color: "#00ADD8",
    description: "Backend and CLI tooling language.",
    related: ["CLI", "Concurrency"],
    offsetY: -20,
    imagePath: "/icons/golang.png",
  },
  {
    id: "php",
    label: "PHP",
    category: "language",
    color: "#777BB4",
    description: "Backend scripting with Laravel ecosystem.",
    related: ["Laravel", "MySQL"],
    offsetY: 30,
    imagePath: "/icons/php.png",
  },

  {
    id: "react",
    label: "React",
    category: "frontend",
    color: "#61DAFB",
    description: "Component-based UI development.",
    related: ["Next.js", "TypeScript"],
    offsetY: -30,
    imagePath: "/icons/react.png",
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "frontend",
    color: "#FFFFFF",
    description: "Full-stack React framework for production apps.",
    related: ["React", "Vercel"],
    offsetY: 20,
    imagePath: "/icons/nextjs.png",
  },
  {
    id: "nodejs",
    label: "Node.js",
    category: "backend",
    color: "#339933",
    description: "Server-side JavaScript runtime.",
    related: ["Express", "API"],
    offsetY: -40,
    imagePath: "/icons/nodejs.png",
  },
  {
    id: "laravel",
    label: "Laravel",
    category: "backend",
    color: "#FF2D20",
    description: "PHP framework for backend systems.",
    related: ["PHP", "MySQL"],
    offsetY: 45,
    imagePath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },

  {
    id: "postgres",
    label: "PostgreSQL",
    category: "data",
    color: "#336791",
    description: "Primary relational database.",
    related: ["SQL", "Schema Design"],
    offsetY: -15,
    imagePath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "mysql",
    label: "MySQL",
    category: "data",
    color: "#00758F",
    description: "Relational database for web systems.",
    related: ["Laravel", "PHP"],
    offsetY: 35,
    imagePath: "/icons/mysql.png",
  },

  {
    id: "figma",
    label: "Figma",
    category: "design",
    color: "#F24E1E",
    description: "UI/UX design and prototyping.",
    related: ["Design System"],
    offsetY: -45,
    imagePath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },

  {
    id: "claude",
    label: "Claude",
    category: "AI",
    color: "#D97757",
    description: "LLM-assisted development workflow.",
    related: ["LLM", "AI Tools"],
    offsetY: 15,
    imagePath: "/icons/claude.png",
  },
  {
    id: "ollama",
    label: "Ollama",
    category: "AI",
    color: "#FFFFFF",
    description: "Local LLM experimentation.",
    related: ["Local AI"],
    offsetY: -25,
    imagePath: "/icons/ollama.png",
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