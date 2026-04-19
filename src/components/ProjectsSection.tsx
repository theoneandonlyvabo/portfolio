'use client'

import { useRef, useEffect, useState } from 'react'
import { PROJECTS } from '@/lib/constants'

const META: Record<string, { impact: string; role: string; year: string; color: string }> = {
  qios: {
    role: 'Product Lead / Full-Stack',
    year: '2024',
    impact: 'Unified finance, inventory, and AI analytics into one SME platform. Built for corporate deployment at scale.',
    color: '#c8923a',
  },
  eternalfall: {
    role: 'Solo Developer',
    year: '2025',
    impact: 'Custom Java rendering engine, AP-based battle economy, 3-tier parry system. Shipped because it had meaning, not a deadline.',
    color: '#7a6a5a',
  },
  grimoire: {
    role: 'Solo Developer',
    year: '2025',
    impact: 'Developer documentation tool that lives in the terminal. Built because context-switching mid-flow kills momentum.',
    color: '#4a5a4a',
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
        padding: '120px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(232,160,69,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--amber)',
            marginBottom: '12px',
          }}>
            04 / WORK
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 0.9,
              color: 'var(--white)',
              letterSpacing: '-0.01em',
            }}>
              WHAT I SHIPPED
            </h2>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--gray-2)',
            }}>
              HOVER TO OPEN
            </span>
          </div>
        </div>

        {/* Shelf */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          height: '480px',
          borderBottom: '2px solid var(--surface-2)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s, transform 0.8s',
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
            pointerEvents: 'none',
          }} />

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
                  position: 'relative',
                  height: '100%',
                  flexShrink: 0,
                  width: isActive ? '520px' : isOther ? '80px' : '180px',
                  transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden',
                  borderRight: '1px solid var(--border)',
                  background: isActive ? 'var(--surface)' : 'var(--deep)',
                  cursor: 'default',
                }}
              >
                {/* Spine */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 0',
                  borderRight: isActive ? '1px solid var(--border)' : 'none',
                  zIndex: 2,
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    background: isActive ? meta.color : 'var(--gray-3)',
                    transition: 'background 0.4s',
                  }} />

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: isActive ? 'var(--amber)' : 'var(--gray-2)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    paddingLeft: '12px',
                    transition: 'color 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    letterSpacing: '0.05em',
                    color: isActive ? 'var(--white)' : 'var(--gray-2)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    paddingLeft: '10px',
                    transition: 'color 0.3s',
                  }}>
                    {project.title.toUpperCase()}
                  </span>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--gray-2)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    paddingLeft: '12px',
                  }}>
                    {meta.year}
                  </span>
                </div>

                {/* Open content */}
                <div style={{
                  position: 'absolute',
                  left: '80px',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.3s 0.15s',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  {/* Screenshot placeholder */}
                  <div style={{
                    flex: '0 0 55%',
                    background: 'var(--surface-2)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--border)',
                    overflow: 'hidden',
                  }}>
                    {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                      <div key={pos} style={{
                        position: 'absolute',
                        ...(pos.includes('top') ? { top: '10px' } : { bottom: '10px' }),
                        ...(pos.includes('left') ? { left: '10px' } : { right: '10px' }),
                        width: '10px',
                        height: '10px',
                        borderTop: pos.includes('top') ? `1px solid ${meta.color}66` : 'none',
                        borderBottom: pos.includes('bottom') ? `1px solid ${meta.color}66` : 'none',
                        borderLeft: pos.includes('left') ? `1px solid ${meta.color}66` : 'none',
                        borderRight: pos.includes('right') ? `1px solid ${meta.color}66` : 'none',
                      }} />
                    ))}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px)`,
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: 'var(--gray-2)',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      SCREENSHOT
                    </span>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: `linear-gradient(to top, ${meta.color}11, transparent)`,
                    }} />
                  </div>

                  {/* Info */}
                  <div style={{
                    flex: 1,
                    padding: '20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                  }}>
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                      }}>
                        <h3 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '28px',
                          lineHeight: 1,
                          letterSpacing: '-0.01em',
                          color: 'var(--white)',
                        }}>
                          {project.title.toUpperCase()}
                        </h3>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          letterSpacing: '0.1em',
                          color: 'var(--amber)',
                          padding: '3px 8px',
                          border: '1px solid rgba(232,160,69,0.2)',
                          flexShrink: 0,
                          marginLeft: '12px',
                        }}>
                          {meta.role.toUpperCase()}
                        </span>
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        fontWeight: 300,
                        color: 'var(--gray-1)',
                        lineHeight: 1.7,
                      }}>
                        {meta.impact}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '9px',
                            color: 'var(--gray-2)',
                            padding: '2px 7px',
                            border: '1px solid var(--border)',
                            background: 'var(--surface-2)',
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
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          letterSpacing: '0.12em',
                          color: 'var(--amber)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        GITHUB
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {!isActive && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to right, transparent 70%, ${meta.color}08)`,
                    pointerEvents: 'none',
                  }} />
                )}
              </div>
            )
          })}

          {/* Right fill */}
          <div style={{
            flex: 1,
            borderLeft: '1px solid var(--border)',
            height: '100%',
            background: 'var(--deep)',
            opacity: 0.4,
          }} />
        </div>

        {/* Shelf label */}
        <div style={{
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: 'var(--gray-2)',
          }}>
            SELECTED WORKS — {projects.length} PROJECTS
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: 'var(--gray-2)',
          }}>
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  )
}