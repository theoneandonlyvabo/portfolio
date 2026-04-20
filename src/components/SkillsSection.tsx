'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const skillsData = [
  {
    id: 'typescript', label: 'TypeScript', category: 'language', color: 'rgba(64,96,208,0.7)',
    description: 'Bahasa utama untuk semua proyek web. Digunakan di seluruh full-stack dengan Next.js dan Node.',
    related: ['React', 'Next.js', 'Node.js'], offsetY: -30, imagePath: '/images/typescript.png'
  },
  {
    id: 'claude', label: 'Claude', category: 'AI Tools', color: 'rgba(217, 119, 87, 0.7)',
    description: 'Expertise dalam utilisasi Anthropic LLM dan Claude Code secara maksimal untuk percepatan development workflow.',
    related: ['Anthropic', 'LLM', 'Claude Code'], offsetY: 15, imagePath: '/images/claude.png'
  },
  {
    id: 'java', label: 'Java', category: 'language', color: 'rgba(80,60,160,0.7)',
    description: 'Strongest systems language. Digunakan untuk membangun EternaFall — full game engine dari nol.',
    related: ['AWT/Canvas', 'Game Systems'], offsetY: 40, imagePath: '/images/java.png'
  },
  {
    id: 'go', label: 'Go', category: 'language', color: 'rgba(40,140,140,0.65)',
    description: 'Backend dan tooling. Membangun Grimoire — TUI documentation tool — sepenuhnya dengan Go.',
    related: ['Bubbletea', 'Cobra', 'CLI'], offsetY: -10, imagePath: '/images/golang.png'
  },
  {
    id: 'react', label: 'React', category: 'frontend', color: 'rgba(64,96,208,0.55)',
    description: 'Component-driven UI. Digunakan untuk membangun QIOS smart kiosk dan aplikasi web modern.',
    related: ['Next.js', 'TypeScript'], offsetY: 50, imagePath: '/images/react.png'
  },
  {
    id: 'nextjs', label: 'Next.js', category: 'frontend', color: 'rgba(64,96,208,0.6)',
    description: 'Full-stack React framework. App Router, API routes, SSR — digunakan di proyek produksi.',
    related: ['React', 'TypeScript', 'Vercel'], offsetY: -40, imagePath: '/images/nextjs.png'
  },
  {
    id: 'laravel', label: 'Laravel', category: 'backend', color: 'rgba(100,60,60,0.6)',
    description: 'PHP backend framework. Digunakan untuk Moneytor — AI-powered personal finance app.',
    related: ['PHP', 'MySQL'], offsetY: 20, imagePath: '/images/laravel.png'
  },
  {
    id: 'nodejs', label: 'Node.js', category: 'backend', color: 'rgba(50,100,70,0.6)',
    description: 'Server-side JavaScript. API design, REST endpoints, middleware architecture.',
    related: ['Express', 'TypeScript'], offsetY: -20, imagePath: '/images/nodejs.png'
  },
  {
    id: 'postgres', label: 'PostgreSQL', category: 'data', color: 'rgba(60,80,120,0.55)',
    description: 'Primary relational database. Schema design, indexing, dan optimasi query.',
    related: ['MySQL', 'Prisma'], offsetY: 60, imagePath: '/images/postgresql.png'
  },
  {
    id: 'figma', label: 'Figma', category: 'design', color: 'rgba(80,60,100,0.5)',
    description: 'UI/UX design dan prototyping. Digunakan untuk wireframing sebelum tahap development.',
    related: ['UI/UX', 'Design Systems'], offsetY: -50, imagePath: '/images/figma.png'
  },
  {
    id: 'php', label: 'PHP', category: 'language', color: 'rgba(90,70,130,0.5)',
    description: 'Server-side scripting. Digunakan bersama Laravel untuk backend web development.',
    related: ['Laravel', 'MySQL'], offsetY: 30, imagePath: '/images/php.png'
  },
  {
    id: 'javascript', label: 'JavaScript', category: 'language', color: 'rgba(240,219,79,0.55)',
    description: 'Core web programming language. Digunakan untuk logika frontend dinamis dan scripting.',
    related: ['TypeScript', 'React'], offsetY: -15, imagePath: '/images/javascript.png'
  },
  {
    id: 'python', label: 'Python', category: 'language', color: 'rgba(50,90,80,0.5)',
    description: 'Data analytics dan scripting. Digunakan untuk riset, otomasi, dan eksplorasi Machine Learning.',
    related: ['Data Analytics', 'Looker Studio'], offsetY: 45, imagePath: '/images/python.png'
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null)

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) visibilityObserver.observe(sectionRef.current)
    return () => visibilityObserver.disconnect()
  }, [])

  return (
    <section
      id="stack"
      ref={sectionRef}
      style={{
        background: '#000000',
        padding: '120px 56px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <style>
        {`
          @keyframes floatAsymmetric {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
        `}
      </style>

      {/* Subtle deep blue ambient background */}
      <div style={{
        position: 'absolute', top: '10%', right: '15%',
        width: '600px', height: '500px',
        background: 'radial-gradient(circle, rgba(64,96,208,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', color: 'rgba(64,96,208,0.9)', marginBottom: '16px',
          }}>
            03 / STACK
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.0, color: '#FFFFFF',
            letterSpacing: '-0.03em',
          }}>
            What I build with
          </h2>
        </div>

        {/* Hive Container - Asymmetric Layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          maxWidth: '950px',
          margin: '0 auto',
          paddingBottom: '100px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {skillsData.map((skillItem, index) => {
            const isSkillHovered = hoveredSkillId === skillItem.id
            const isAnotherSkillHovered = hoveredSkillId !== null && !isSkillHovered
            const animationDelayOffset = (index % 5) * 0.4

            return (
              <div
                key={skillItem.id}
                onMouseEnter={() => setHoveredSkillId(skillItem.id)}
                onMouseLeave={() => setHoveredSkillId(null)}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  transform: `translateY(${skillItem.offsetY}px)`,
                  animation: `floatAsymmetric ${4 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${animationDelayOffset}s`,
                  zIndex: isSkillHovered ? 50 : 1,
                  opacity: isAnotherSkillHovered ? 0.3 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                {/* Inner Container: Liquid Glass Effect */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isSkillHovered ? '280px' : '120px',
                  height: isSkillHovered ? 'auto' : '120px',
                  minHeight: isSkillHovered ? '160px' : '120px',
                  padding: isSkillHovered ? '24px' : '0px',
                  borderRadius: isSkillHovered ? '24px' : '50%',
                  background: isSkillHovered 
                    ? 'rgba(12, 16, 25, 0.9)' 
                    : 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px) saturate(150%)',
                  border: isSkillHovered 
                    ? `1px solid rgba(64,96,208,0.5)`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSkillHovered 
                    ? `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${skillItem.color}` 
                    : `inset 0 0 25px ${skillItem.color.replace('0.7', '0.2').replace('0.6', '0.2').replace('0.5', '0.2')}, 0 4px 12px rgba(0,0,0,0.1)`,
                  display: 'flex',
                  flexDirection: isSkillHovered ? 'column' : 'row',
                  alignItems: isSkillHovered ? 'flex-start' : 'center',
                  justifyContent: isSkillHovered ? 'flex-start' : 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                  
                  {/* PNG Image State */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    transition: 'all 0.4s ease',
                    marginBottom: isSkillHovered ? '16px' : '0px',
                    transform: isSkillHovered ? 'scale(0.8)' : 'scale(1)',
                    transformOrigin: 'top left',
                    opacity: isSkillHovered ? 1 : 0.85,
                  }}>
                    <Image 
                      src={skillItem.imagePath} 
                      alt={`${skillItem.label} icon`} 
                      width={40} 
                      height={40} 
                      style={{ objectFit: 'contain' }}
                      priority={index < 5}
                    />
                  </div>

                  {/* Expanded Content */}
                  <div style={{
                    opacity: isSkillHovered ? 1 : 0,
                    height: isSkillHovered ? 'auto' : '0px',
                    visibility: isSkillHovered ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease 0.1s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-sans)', fontWeight: 600,
                        fontSize: '16px', color: '#FFFFFF',
                        letterSpacing: '-0.02em', margin: 0
                      }}>
                        {skillItem.label}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '8px',
                        letterSpacing: '0.12em', color: 'rgba(64,96,208,0.9)',
                        padding: '2px 6px',
                        border: '1px solid rgba(64,96,208,0.3)',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                      }}>
                        {skillItem.category}
                      </span>
                    </div>

                    <p style={{
                      fontFamily: 'var(--font-sans)', fontWeight: 300,
                      fontSize: '12px', color: 'rgba(255,255,255,0.7)', 
                      lineHeight: 1.6, marginBottom: '12px',
                    }}>
                      {skillItem.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {skillItem.related.map((relatedItem) => (
                        <span key={relatedItem} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '9px',
                          color: 'rgba(255,255,255,0.6)',
                          padding: '4px 8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '100px',
                          background: 'rgba(255,255,255,0.02)',
                        }}>
                          {relatedItem}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const skillsData = [
  {
    id: 'typescript', label: 'TypeScript', category: 'language', color: 'rgba(64,96,208,0.7)',
    description: 'Bahasa utama untuk semua proyek web. Digunakan di seluruh full-stack dengan Next.js dan Node.',
    related: ['React', 'Next.js', 'Node.js'], offsetY: -30, imagePath: '/images/typescript.png'
  },
  {
    id: 'claude', label: 'Claude', category: 'AI Tools', color: 'rgba(217, 119, 87, 0.7)',
    description: 'Expertise dalam utilisasi Anthropic LLM dan Claude Code secara maksimal untuk percepatan development workflow.',
    related: ['Anthropic', 'LLM', 'Claude Code'], offsetY: 15, imagePath: '/images/claude.png'
  },
  {
    id: 'java', label: 'Java', category: 'language', color: 'rgba(80,60,160,0.7)',
    description: 'Strongest systems language. Digunakan untuk membangun EternaFall — full game engine dari nol.',
    related: ['AWT/Canvas', 'Game Systems'], offsetY: 40, imagePath: '/images/java.png'
  },
  {
    id: 'go', label: 'Go', category: 'language', color: 'rgba(40,140,140,0.65)',
    description: 'Backend dan tooling. Membangun Grimoire — TUI documentation tool — sepenuhnya dengan Go.',
    related: ['Bubbletea', 'Cobra', 'CLI'], offsetY: -10, imagePath: '/images/golang.png'
  },
  {
    id: 'react', label: 'React', category: 'frontend', color: 'rgba(64,96,208,0.55)',
    description: 'Component-driven UI. Digunakan untuk membangun QIOS smart kiosk dan aplikasi web modern.',
    related: ['Next.js', 'TypeScript'], offsetY: 50, imagePath: '/images/react.png'
  },
  {
    id: 'nextjs', label: 'Next.js', category: 'frontend', color: 'rgba(64,96,208,0.6)',
    description: 'Full-stack React framework. App Router, API routes, SSR — digunakan di proyek produksi.',
    related: ['React', 'TypeScript', 'Vercel'], offsetY: -40, imagePath: '/images/nextjs.png'
  },
  {
    id: 'laravel', label: 'Laravel', category: 'backend', color: 'rgba(100,60,60,0.6)',
    description: 'PHP backend framework. Digunakan untuk Moneytor — AI-powered personal finance app.',
    related: ['PHP', 'MySQL'], offsetY: 20, imagePath: '/images/laravel.png'
  },
  {
    id: 'nodejs', label: 'Node.js', category: 'backend', color: 'rgba(50,100,70,0.6)',
    description: 'Server-side JavaScript. API design, REST endpoints, middleware architecture.',
    related: ['Express', 'TypeScript'], offsetY: -20, imagePath: '/images/nodejs.png'
  },
  {
    id: 'postgres', label: 'PostgreSQL', category: 'data', color: 'rgba(60,80,120,0.55)',
    description: 'Primary relational database. Schema design, indexing, dan optimasi query.',
    related: ['MySQL', 'Prisma'], offsetY: 60, imagePath: '/images/postgresql.png'
  },
  {
    id: 'figma', label: 'Figma', category: 'design', color: 'rgba(80,60,100,0.5)',
    description: 'UI/UX design dan prototyping. Digunakan untuk wireframing sebelum tahap development.',
    related: ['UI/UX', 'Design Systems'], offsetY: -50, imagePath: '/images/figma.png'
  },
  {
    id: 'php', label: 'PHP', category: 'language', color: 'rgba(90,70,130,0.5)',
    description: 'Server-side scripting. Digunakan bersama Laravel untuk backend web development.',
    related: ['Laravel', 'MySQL'], offsetY: 30, imagePath: '/images/php.png'
  },
  {
    id: 'javascript', label: 'JavaScript', category: 'language', color: 'rgba(240,219,79,0.55)',
    description: 'Core web programming language. Digunakan untuk logika frontend dinamis dan scripting.',
    related: ['TypeScript', 'React'], offsetY: -15, imagePath: '/images/javascript.png'
  },
  {
    id: 'python', label: 'Python', category: 'language', color: 'rgba(50,90,80,0.5)',
    description: 'Data analytics dan scripting. Digunakan untuk riset, otomasi, dan eksplorasi Machine Learning.',
    related: ['Data Analytics', 'Looker Studio'], offsetY: 45, imagePath: '/images/python.png'
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null)

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) visibilityObserver.observe(sectionRef.current)
    return () => visibilityObserver.disconnect()
  }, [])

  return (
    <section
      id="stack"
      ref={sectionRef}
      style={{
        background: '#000000',
        padding: '120px 56px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <style>
        {`
          @keyframes floatAsymmetric {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
        `}
      </style>

      {/* Subtle deep blue ambient background */}
      <div style={{
        position: 'absolute', top: '10%', right: '15%',
        width: '600px', height: '500px',
        background: 'radial-gradient(circle, rgba(64,96,208,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', color: 'rgba(64,96,208,0.9)', marginBottom: '16px',
          }}>
            03 / STACK
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.0, color: '#FFFFFF',
            letterSpacing: '-0.03em',
          }}>
            What I build with
          </h2>
        </div>

        {/* Hive Container - Asymmetric Layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          maxWidth: '950px',
          margin: '0 auto',
          paddingBottom: '100px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {skillsData.map((skillItem, index) => {
            const isSkillHovered = hoveredSkillId === skillItem.id
            const isAnotherSkillHovered = hoveredSkillId !== null && !isSkillHovered
            const animationDelayOffset = (index % 5) * 0.4

            return (
              <div
                key={skillItem.id}
                onMouseEnter={() => setHoveredSkillId(skillItem.id)}
                onMouseLeave={() => setHoveredSkillId(null)}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  transform: `translateY(${skillItem.offsetY}px)`,
                  animation: `floatAsymmetric ${4 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${animationDelayOffset}s`,
                  zIndex: isSkillHovered ? 50 : 1,
                  opacity: isAnotherSkillHovered ? 0.3 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                {/* Inner Container: Liquid Glass Effect */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isSkillHovered ? '280px' : '120px',
                  height: isSkillHovered ? 'auto' : '120px',
                  minHeight: isSkillHovered ? '160px' : '120px',
                  padding: isSkillHovered ? '24px' : '0px',
                  borderRadius: isSkillHovered ? '24px' : '50%',
                  background: isSkillHovered 
                    ? 'rgba(12, 16, 25, 0.9)' 
                    : 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px) saturate(150%)',
                  border: isSkillHovered 
                    ? `1px solid rgba(64,96,208,0.5)`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSkillHovered 
                    ? `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${skillItem.color}` 
                    : `inset 0 0 25px ${skillItem.color.replace('0.7', '0.2').replace('0.6', '0.2').replace('0.5', '0.2')}, 0 4px 12px rgba(0,0,0,0.1)`,
                  display: 'flex',
                  flexDirection: isSkillHovered ? 'column' : 'row',
                  alignItems: isSkillHovered ? 'flex-start' : 'center',
                  justifyContent: isSkillHovered ? 'flex-start' : 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                  
                  {/* PNG Image State */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    transition: 'all 0.4s ease',
                    marginBottom: isSkillHovered ? '16px' : '0px',
                    transform: isSkillHovered ? 'scale(0.8)' : 'scale(1)',
                    transformOrigin: 'top left',
                    opacity: isSkillHovered ? 1 : 0.85,
                  }}>
                    <Image 
                      src={skillItem.imagePath} 
                      alt={`${skillItem.label} icon`} 
                      width={40} 
                      height={40} 
                      style={{ objectFit: 'contain' }}
                      priority={index < 5}
                    />
                  </div>

                  {/* Expanded Content */}
                  <div style={{
                    opacity: isSkillHovered ? 1 : 0,
                    height: isSkillHovered ? 'auto' : '0px',
                    visibility: isSkillHovered ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease 0.1s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-sans)', fontWeight: 600,
                        fontSize: '16px', color: '#FFFFFF',
                        letterSpacing: '-0.02em', margin: 0
                      }}>
                        {skillItem.label}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '8px',
                        letterSpacing: '0.12em', color: 'rgba(64,96,208,0.9)',
                        padding: '2px 6px',
                        border: '1px solid rgba(64,96,208,0.3)',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                      }}>
                        {skillItem.category}
                      </span>
                    </div>

                    <p style={{
                      fontFamily: 'var(--font-sans)', fontWeight: 300,
                      fontSize: '12px', color: 'rgba(255,255,255,0.7)', 
                      lineHeight: 1.6, marginBottom: '12px',
                    }}>
                      {skillItem.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {skillItem.related.map((relatedItem) => (
                        <span key={relatedItem} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '9px',
                          color: 'rgba(255,255,255,0.6)',
                          padding: '4px 8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '100px',
                          background: 'rgba(255,255,255,0.02)',
                        }}>
                          {relatedItem}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}