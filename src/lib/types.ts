export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  title: string
  description: string
  why: string
  tags: string[]
  links: ProjectLink[]
  image?: string
  status: 'active' | 'in-progress' | 'archived'
  featured: boolean
}

export type SkillCategory = {
  category: string
  items: string[]
}

/**
 * 🔥 NEW: detailed skill (buat SkillsSection)
 */
export type Skill = {
  id: string
  label: string
  category: string
  color: string
  description: string
  related: string[]
  offsetY: number
  imagePath: string
  isExperimental?: boolean
}

export type SocialLink = {
  label: string
  url: string
}

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}