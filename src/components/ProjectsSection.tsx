'use client'

import { useRef, useEffect, useState } from 'react'
import { PROJECTS } from '@/lib/constants'

const FEATURED = ['qios', 'eternafall', 'grimoire']

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
        background: '#000',
        padding: '120px 56px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: '#666',
            marginBottom: '12px',
          }}>
            04 / WORK
          </div>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.05,
            color: '#fff',
            letterSpacing: '-0.03em',
          }}>
            Selected Work
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          gap: '16px',
          height: '460px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {projects.map((project) => {
            const isActive = active === project.id
            const isOther = active !== null && !isActive

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActive(project.id)}
                onMouseLeave={() => setActive(null)}
                style={{
                  flex: isActive ? '3 0 0' : isOther ? '0.6 0 0' : '1 0 0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'flex 0.5s cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                }}
              >

                {/* Collapsed */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.25s',
                }}>
                  <span style={{
                    fontSize: '10px',
                    color: '#666',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {project.year}
                  </span>

                  <span style={{
                    fontSize: '16px',
                    color: '#888',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                  }}>
                    {project.title}
                  </span>
                </div>

                {/* Expanded */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.3s 0.1s',
                }}>
                  
                  {/* Screenshot */}
                  <div style={{
                    flex: '0 0 55%',
                    overflow: 'hidden',
                    background: '#111',
                  }}>
                    <img
                      src={`/screenshots/${project.id}-ss-1.jpeg`}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isActive ? 'scale(1)' : 'scale(1.05)',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    
                    <div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '10px',
                        gap: '12px',
                      }}>
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: 600,
                          color: '#fff',
                          margin: 0,
                        }}>
                          {project.title}
                        </h3>

                        <span style={{
                          fontSize: '10px',
                          color: '#888',
                          fontFamily: 'var(--font-mono)',
                          whiteSpace: 'nowrap',
                        }}>
                          {project.role}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '13px',
                        color: '#aaa',
                        lineHeight: 1.6,
                        marginBottom: '12px',
                      }}>
                        {project.description}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '6px',
                        flexWrap: 'wrap',
                      }}>
                        {project.tags.map(tag => (
                          <span key={tag} style={{
                            fontSize: '9px',
                            color: '#666',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '3px 8px',
                            borderRadius: '100px',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.links[0] && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          style={{
                            fontSize: '11px',
                            color: '#fff',
                            textDecoration: 'none',
                          }}
                        >
                          View →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#555',
          fontFamily: 'var(--font-mono)',
        }}>
          <span>{projects.length} projects</span>
          <span>{new Date().getFullYear()}</span>
        </div>

      </div>
    </section>
  )
}