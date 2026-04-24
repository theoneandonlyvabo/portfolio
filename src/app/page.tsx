'use client'

import Hero from '@/components/Hero'
import JourneySection from '@/components/JourneySection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ChatbotSection from '@/components/ChatbotSection'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0)
    
    // Also clear any stored scroll position
    if (window.history && window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <main>
      <Hero />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ChatbotSection />
    </main>
  )
}