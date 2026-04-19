'use client'

import { useRef, useEffect, useState } from 'react'

const ERAS = [
  {
    year: '2009',
    era: 'Origin',
    title: 'First Contact',
    body: 'Grew up inside games. Started pulling apart how they worked instead of just playing them. Curiosity over consumption.',
    tags: ['Game Architecture', 'System Curiosity'],
    accent: false,
  },
  {
    year: '2014',
    era: 'Discovery',
    title: 'First Line of Code',
    body: 'Got a laptop. Wrote HTML for the first time. Realized I could build the things I was consuming. That realization never left.',
    tags: ['HTML/CSS', 'Web Fundamentals'],
    accent: false,
  },
  {
    year: '2020',
    era: 'Acceleration',
    title: 'Full Immersion',
    body: 'Online school meant more time. More time meant more building. Explored full-stack, explored systems, explored what depth actually felt like.',
    tags: ['Full-Stack', 'Systems Thinking'],
    accent: false,
  },
  {
    year: '2021',
    era: 'Clarity',
    title: 'Passion Locked In',
    body: 'First real projects. First competitions. Stopped treating this as a hobby. It was the direction. Everything else was secondary.',
    tags: ['First Projects', 'Competitions'],
    accent: true,
  },
  {
    year: '2024',
    era: 'Pivot',
    title: 'Redirected',
    body: 'Two UTBK attempts. SISFOR UI. Didn\'t make it. Chose to build anyway. Settled at UPNVJ and pushed further than the destination ever required.',
    tags: ['Resilience', 'UPNVJ'],
    accent: false,
  },
  {
    year: 'Now',
    era: 'Present',
    title: 'Building Anyway',
    body: 'Product launches. Competition finals. A Java game engine. A Go TUI tool. The institution doesn\'t define the output.',
    tags: ['QIOS', 'EternaFall', 'Grimoire'],
    accent: true,
  },
]

export default function JourneySection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = sectionRef.current.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const p = Math.max(0, Math.min(1, scrolled / total))
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const translateX = progress * (ERAS.length - 1) * -360

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{
        height: `${ERAS.length * 120}vh`,
        background: 'var(--black)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 60%, rgba(232,160,69,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Header */}
        <div style={{
          padding: '0 64px',
          marginBottom: '64px',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--amber)',
            marginBottom: '12px',
          }}>
            02 / JOURNEY
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7vw, 88px)',
              lineHeight: 0.9,
              color: 'var(--white)',
              letterSpacing: '-0.01em',
            }}>
              HOW I GOT HERE
            </h2>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--gray-2)',
              letterSpacing: '0.1em',
            }}>
              {Math.round(progress * (ERAS.length - 1)) + 1} / {ERAS.length}
            </span>
          </div>
        </div>

        {/* Track */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          overflow: 'visible',
          padding: '0 64px',
        }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '24px',
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.05s linear',
              willChange: 'transform',
            }}
          >
            {ERAS.map((era, i) => {
              const dist = Math.abs(progress * (ERAS.length - 1) - i)
              const isActive = dist < 0.8
              const opacity = Math.max(0.25, 1 - dist * 0.5)
              const scale = Math.max(0.92, 1 - dist * 0.04)

              return (
                <div
                  key={era.year}
                  style={{
                    flexShrink: 0,
                    width: '336px',
                    opacity,
                    transform: `scale(${scale}) translateY(${dist * 6}px)`,
                    transition: 'opacity 0.3s, transform 0.3s',
                  }}
                >
                  <div style={{
                    background: isActive ? 'var(--surface)' : 'var(--deep)',
                    border: `1px solid ${era.accent && isActive ? 'rgba(232,160,69,0.2)' : 'var(--border)'}`,
                    padding: '36px',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s',
                  }}>
                    {/* Top */}
                    <div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '24px',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '48px',
                          color: era.accent && isActive ? 'var(--amber)' : 'var(--gray-3)',
                          lineHeight: 1,
                          transition: 'color 0.3s',
                        }}>
                          {era.year}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          color: era.accent && isActive ? 'var(--amber)' : 'var(--gray-2)',
                          padding: '4px 10px',
                          border: `1px solid ${era.accent && isActive ? 'rgba(232,160,69,0.3)' : 'var(--border)'}`,
                          transition: 'all 0.3s',
                        }}>
                          {era.era.toUpperCase()}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '28px',
                        color: 'var(--white)',
                        letterSpacing: '-0.01em',
                        marginBottom: '16px',
                        lineHeight: 1.1,
                      }}>
                        {era.title.toUpperCase()}
                      </h3>

                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        fontWeight: 300,
                        color: 'var(--gray-1)',
                        lineHeight: 1.7,
                      }}>
                        {era.body}
                      </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {era.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            color: 'var(--gray-2)',
                            padding: '4px 10px',
                            background: 'var(--surface-2)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border)',
        }}>
          <div style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: 'var(--amber)',
            transition: 'width 0.05s linear',
          }} />
        </div>
      </div>
    </section>
  )
}