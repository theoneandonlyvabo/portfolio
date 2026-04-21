import type { Project, SkillCategory, SocialLink, Skill } from "./types"

export const BIO = {
  name: "Vano",
  title: "Developer | Product Builder",
  subtitle: "Full-stack engineer with game dev depth. Comfortable in Go and Java.",
  description:
    "Systems Information student at UPN Veteran Jakarta. I build products end-to-end — from strategy to execution. Primary stack: TypeScript/Next.js, Go, Java. Currently shipping QIOS (SME operations platform), Moneytor (AI finance app), and EternaFall (pure Java 2D RPG). Also exploring game architecture, scalable systems, and what actually matters.",
  philosophy: "Build from scratch. Understand deeply. Ship with intention.",
}

export const PROJECTS: Project[] = [
  {
    id: "qios",
    title: "QIOS",
    description:
      "Web-based SME operations platform integrating finance, inventory, and analytics. AI-driven insights to reduce operational risk. Built with Next.js and TypeScript.",
    why: "End-to-end product development. From problem identification to full-stack execution with real business impact.",
    tags: ["Next.js", "TypeScript", "Full Stack", "AI Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/qios-web" },
    ],
    image: "/screenshots/qios.png",
    status: "in-progress",
    featured: true,
  },
  {
    id: "eternalfall",
    title: "EternaFall",
    description:
      "Pure Java 2D RPG. Custom rendering engine, battle system with AP economy, NPC dialog system, full inventory architecture. Built without game engine.",
    why: "Full control over every system. No abstractions hiding how things work. Game architecture and performance optimization from scratch.",
    tags: ["Java", "Game Dev", "Custom Engine", "Architecture"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/project-eternal" },
    ],
    image: "/screenshots/eternalfall.png",
    status: "active",
    featured: true,
  },
  {
    id: "grimoire",
    title: "Grimoire",
    description:
      "Developer-focused documentation tool built in Go. TUI application for managing code knowledge and team insights directly in the development workflow.",
    why: "Backend systems thinking. Different paradigm than web. Go's simplicity forces clarity in architecture.",
    tags: ["Go", "TUI", "CLI", "Developer Tools"],
    links: [
      { label: "GitHub", url: "https://github.com/theoneandonlyvabo/grimoire" },
    ],
    image: "/screenshots/grimoire.png",
    status: "active",
    featured: true,
  },
]

/**
 * ⚠️ Ini buat section simple list (bukan animated bubbles)
 */
export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Go", "PHP", "C"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Figma"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express", "Laravel", "Go (Concurrency)", "REST API"],
  },
  {
    category: "Databases & Tools",
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
 * 🔥 Ini yang dipake buat SkillsSection (bubble UI)
 */
export const SKILLS_DETAILED: Skill[] = [
  {
    id: "typescript",
    label: "TypeScript",
    category: "language",
    color: "#3178C6",
    description:
      "Bahasa utama untuk semua proyek web. Digunakan di seluruh full-stack dengan Next.js dan Node.",
    related: ["React", "Next.js", "Node.js"],
    offsetY: -30,
    imagePath: "/images/typescript.png",
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "language",
    color: "#F7DF1E",
    description:
      "Core web programming language. Digunakan untuk logika frontend dinamis dan scripting.",
    related: ["TypeScript", "React"],
    offsetY: 15,
    imagePath: "/images/javascript.png",
  },
  {
    id: "python",
    label: "Python",
    category: "language",
    color: "#3776AB",
    description:
      "Data analytics dan scripting. Digunakan untuk riset, otomasi, dan eksplorasi Machine Learning.",
    related: ["Data Analytics", "Looker Studio"],
    offsetY: -10,
    imagePath: "/images/python.png",
  },
  {
    id: "java",
    label: "Java",
    category: "language",
    color: "#5382A1",
    description:
      "Strongest systems language. Digunakan untuk membangun EternaFall — full game engine dari nol.",
    related: ["AWT/Canvas", "Game Systems"],
    offsetY: 40,
    imagePath: "/images/java.png",
  },
  {
    id: "go",
    label: "Go",
    category: "language",
    color: "#00ADD8",
    description:
      "Backend dan tooling. Membangun Grimoire — TUI documentation tool — sepenuhnya dengan Go.",
    related: ["Bubbletea", "Cobra", "CLI"],
    offsetY: -20,
    imagePath: "/images/golang.png",
  },
  {
    id: "php",
    label: "PHP",
    category: "language",
    color: "#777BB4",
    description:
      "Server-side scripting. Digunakan bersama Laravel untuk backend web development.",
    related: ["Laravel", "MySQL"],
    offsetY: 30,
    imagePath: "/images/php.png",
  },

  {
    id: "react",
    label: "React",
    category: "frontend",
    color: "#61DAFB",
    description:
      "Component-driven UI. Digunakan untuk membangun QIOS smart kiosk dan aplikasi web modern.",
    related: ["Next.js", "TypeScript"],
    offsetY: -30,
    imagePath: "/images/react.png",
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "frontend",
    color: "#FFFFFF",
    description:
      "Full-stack React framework. App Router, API routes, SSR — digunakan di proyek produksi.",
    related: ["React", "TypeScript", "Vercel"],
    offsetY: 20,
    imagePath: "/images/nextjs.png",
  },
  {
    id: "nodejs",
    label: "Node.js",
    category: "backend",
    color: "#339933",
    description:
      "Server-side JavaScript. API design, REST endpoints, middleware architecture.",
    related: ["Express", "TypeScript"],
    offsetY: -40,
    imagePath: "/images/nodejs.png",
  },
  {
    id: "laravel",
    label: "Laravel",
    category: "backend",
    color: "#FF2D20",
    description:
      "PHP backend framework. Digunakan untuk Moneytor — AI-powered personal finance app.",
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
    description:
      "Primary relational database. Schema design, indexing, dan optimasi query.",
    related: ["MySQL", "Prisma"],
    offsetY: -15,
    imagePath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "mysql",
    label: "MySQL",
    category: "data",
    color: "#00758F",
    description:
      "Relational database management system. Digunakan untuk menyimpan dan mengelola data.",
    related: ["PHP", "Laravel", "Postgres"],
    offsetY: 35,
    imagePath: "/images/mysql.png",
  },
  {
    id: "figma",
    label: "Figma",
    category: "design",
    color: "#F24E1E",
    description:
      "UI/UX design dan prototyping. Digunakan untuk wireframing sebelum tahap development.",
    related: ["UI/UX", "Design Systems"],
    offsetY: -45,
    imagePath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    id: "claude",
    label: "Claude",
    category: "AI Tools",
    color: "#D97757",
    description:
      "Expertise dalam utilisasi Anthropic LLM dan Claude Code secara maksimal untuk percepatan development workflow.",
    related: ["Anthropic", "LLM", "Claude Code"],
    offsetY: 15,
    imagePath: "/images/claude.png",
  },
  {
    id: "ollama",
    label: "Ollama",
    category: "AI Tools",
    color: "#FFFFFF",
    description:
      "Eksperimen menjalankan model LLM secara lokal (Local AI) untuk riset privasi dan efisiensi model deployment.",
    related: ["Local LLM", "AI Models"],
    offsetY: -25,
    imagePath: "/images/ollama.png",
    isExperimental: true,
  },
  {
    id: "openclaw",
    label: "OpenClaw",
    category: "AI Tools",
    color: "#FF3B30",
    description:
      "Eksplorasi penggunaan tool AI tingkat lanjut untuk integrasi workflow, automasi riset, dan research flow development.",
    related: ["AI Agents", "Automation"],
    offsetY: 25,
    imagePath: "/images/openclaw.png",
    isExperimental: true,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/theoneandonlyvabo" },
  { label: "LinkedIn", url: "https://linkedin.com/in/aireladrivano" },
  { label: "Email", url: "mailto:aireladrivano196@gmail.com" },
  { label: "Instagram", url: "https://instagram.com/aireladrivano" },
]

export const CHATBOT_SYSTEM_PROMPT = `You are a portfolio assistant for Vano (Airel Adrivano), a full-stack developer and product builder.

... (tetap sama, ga gw ubah)`