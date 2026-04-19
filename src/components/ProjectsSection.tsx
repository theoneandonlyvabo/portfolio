'use client'

import { useRef, useEffect, useState } from 'react'
import { PROJECTS } from '@/lib/constants'

const META: Record<string, { impact: string; role: string; year: string; gradient: string }> = {
  qios: {
    role: 'Product Lead / Full-Stack',
    year: '2024',
    impact: 'Unified finance, inventory, and AI analytics into one SME platform. Built for corporate deployment at scale.',
    gradient: 'radial-gradient(ellipse at top left, rgba(64,96,208,0.18) 0%, transparent 60%)',
  },
  eternalfall: {
    role: 'Solo Developer',
    year: '2025',
    impact: 'Custom Java rendering engine, AP-based battle economy, 3-tier parry system. Shipped because it had meaning, not a deadline.',
    gradient: 'radial-gradient(ellipse at top left, rgba(80,60,140,0.18) 0%, transparent 60%)',
  },
  grimoire: {
    role: 'Solo Developer',
    year: '2025',
    impact: 'Developer documentation tool that lives in the terminal. Built because context-switching mid-flow kills momentum.',
    gradient: 'radial-gradient(ellipse at top left, rgba(40,80,60,0.18) 0%, transparent 60%)',
  },
}

const FEATURED = ['qios', 'eternalfall', 'grimoire']

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const projects = PROJECTS.filter((p) => FEATURED.includes(p.id))

  return (
    <section
      id="work"
      ref={ref}
      style={{
        background: 'var(--black)',
        padding: '140px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse at bottom, rgba(64,96,208,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', color: 'var(--blue)', marginBottom: '10px',
          }}>
            04 / WORK
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 0.9, color: 'var(--white)',
              letterSpacing: '-0.01em',
            }}>
              WHAT I SHIPPED
            </h2>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.15em', color: 'var(--gray-2)',
            }}>
              HOVER TO OPEN
            </span>
          </div>
        </div>

        {/* Shelf — Fey-style cards */}
        <div style={{
          display: 'flex',
          gap: '12px',
          height: '500px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s, transform 0.8s',
        }}>
          {projects.map((project, i) => {
            const meta = META[project.id]
            const isActive = active === project.id
            const isOther = active !== null && !isActive

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActive(project.id)}
                onMouseLeave={() => setActive(null)}
                style={{
                  flex: isActive ? '3 0 0' : isOther ? '0.4 0 0' : '1 0 0',
                  transition: 'flex 0.5s cubic-bezier(0.16,1,0.3,1)',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  position: 'relative',
                  cursor: 'default',
                }}
              >
                {/* Gradient overlay per project */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: meta.gradient,
                  opacity: isActive ? 1 : 0.4,
                  transition: 'opacity 0.4s',
                }} />

                {/* Collapsed: vertical label */}
                <div style={{
                  position: 'absolute',
                  top: 0, bottom: 0, left: 0, right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '28px 20px',
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.2s',
                  pointerEvents: isActive ? 'none' : 'auto',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px',
                    letterSpacing: '0.15em', color: 'var(--gray-2)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.05em',
                    }}>
                      {project.title.toUpperCase()}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '9px',
                      color: 'var(--gray-2)', letterSpacing: '0.1em',
                    }}>
                      {meta.year}
                    </span>
                  </div>
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: 'var(--gray-2)',
                  }} />
                </div>

                {/* Expanded content */}
                <div style={{
                  position: 'absolute', inset: 0,
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.35s 0.1s',
                  display: 'flex', flexDirection: 'column',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}>
                  {/* Screenshot placeholder */}
                  <div style={{
                    flex: '0 0 55%',
                    background: 'rgba(255,255,255,0.02)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* Scanline texture */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `repeating-linear-gradient(
                        0deg, transparent, transparent 3px,
                        rgba(255,255,255,0.008) 3px,
                        rgba(255,255,255,0.008) 4px
                      )`,
                    }} />
                    {/* Corner marks */}
                    {['tl', 'tr', 'bl', 'br'].map((c) => (
                      <div key={c} style={{
                        position: 'absolute',
                        top: c.startsWith('t') ? '14px' : 'auto',
                        bottom: c.startsWith('b') ? '14px' : 'auto',
                        left: c.endsWith('l') ? '14px' : 'auto',
                        right: c.endsWith('r') ? '14px' : 'auto',
                        width: '10px', height: '10px',
                        borderTop: c.startsWith('t') ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        borderBottom: c.startsWith('b') ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        borderLeft: c.endsWith('l') ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        borderRight: c.endsWith('r') ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      }} />
                    ))}
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '9px',
                      letterSpacing: '0.2em', color: 'rgba(255,255,255,0.15)',
                      position: 'relative', zIndex: 1,
                    }}>
                      SCREENSHOT
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{
                    flex: 1, padding: '24px 28px',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    <div>
                      <div style={{
                        display: 'flex', alignItems: 'flex-start',
                        justifyContent: 'space-between', marginBottom: '10px', gap: '12px',
                      }}>
                        <h3 style={{
                          fontFamily: 'var(--font-display)', fontSize: '26px',
                          lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--white)',
                        }}>
                          {project.title.toUpperCase()}
                        </h3>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '8px',
                          letterSpacing: '0.1em', color: 'rgba(64,96,208,0.8)',
                          padding: '3px 8px',
                          border: '1px solid rgba(64,96,208,0.2)',
                          flexShrink: 0, whiteSpace: 'nowrap',
                        }}>
                          {meta.role.toUpperCase()}
                        </span>
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '12px',
                        fontWeight: 300, color: 'var(--gray-1)', lineHeight: 1.7,
                      }}>
                        {meta.impact}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{
                            fontFamily: 'var(--font-mono)', fontSize: '8px',
                            letterSpacing: '0.08em', color: 'var(--gray-2)',
                            padding: '2px 7px',
                            border: '1px solid rgba(255,255,255,0.06)',
                            background: 'rgba(255,255,255,0.03)',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.links[0]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)', fontSize: '9px',
                          letterSpacing: '0.12em', color: 'rgba(64,96,208,0.8)',
                          textDecoration: 'none',
                          display: 'flex', alignItems: 'center', gap: '5px',
                        }}
                      >
                        GITHUB
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Shelf label */}
        <div style={{
          marginTop: '20px', display: 'flex', justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '9px',
            letterSpacing: '0.2em', color: 'var(--gray-2)',
          }}>
            SELECTED WORKS — {projects.length} PROJECTS
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '9px',
            letterSpacing: '0.15em', color: 'var(--gray-2)',
          }}>
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  )
}