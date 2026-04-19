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
    body: 'Online school meant more time. More time meant more building. Explored full-stack, explored systems, explored what depth felt like.',
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
    body: "Two UTBK attempts. SISFOR UI. Didn't make it. Chose to build anyway. Settled at UPNVJ and pushed further than the destination ever required.",
    tags: ['Resilience', 'UPNVJ'],
    accent: false,
  },
  {
    year: 'Now',
    era: 'Present',
    title: 'Building Anyway',
    body: "Product launches. Competition finals. A Java game engine. A Go TUI tool. The institution doesn't define the output.",
    tags: ['QIOS', 'EternaFall', 'Grimoire'],
    accent: true,
  },
]

const CARD_W = 380
const CARD_GAP = 24

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = sectionRef.current.offsetHeight - window.innerHeight
      const p = Math.max(0, Math.min(1, -rect.top / total))
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active index — which card is at center
  const activeF = progress * (ERAS.length - 1)
  const activeIndex = Math.round(activeF)

  // Translate so active card is centered
  const centerOffset = typeof window !== 'undefined' ? window.innerWidth / 2 - CARD_W / 2 : 600
  const translateX = centerOffset - activeIndex * (CARD_W + CARD_GAP)

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{
        height: `${ERAS.length * 110}vh`,
        background: 'var(--black)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>

        {/* Background ambient */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 60%, rgba(64,96,208,0.05) 0%, transparent 60%)',
        }} />

        {/* Header */}
        <div style={{
          padding: '0 56px', marginBottom: '56px',
          position: 'relative', zIndex: 2,
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', color: 'var(--blue)',
            marginBottom: '10px',
          }}>
            02 / JOURNEY
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: 0.9, color: 'var(--white)',
              letterSpacing: '-0.01em',
            }}>
              HOW I GOT HERE
            </h2>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.1em', color: 'var(--gray-2)',
            }}>
              {activeIndex + 1} / {ERAS.length}
            </span>
          </div>
        </div>

        {/* Cards track */}
        <div style={{
          position: 'relative', zIndex: 2,
          overflow: 'visible',
        }}>
          <div style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: 'transform 0.06s linear',
            willChange: 'transform',
          }}>
            {ERAS.map((era, i) => {
              const dist = i - activeF
              const absDist = Math.abs(dist)
              const isActive = absDist < 0.5

              // Perspective transform for edge cards
              const rotateY = dist * -8
              const scale = Math.max(0.82, 1 - absDist * 0.09)
              const opacity = Math.max(0.2, 1 - absDist * 0.35)
              const blur = Math.max(0, absDist - 0.5) * 2

              return (
                <div
                  key={era.year}
                  style={{
                    flexShrink: 0,
                    width: `${CARD_W}px`,
                    opacity,
                    transform: `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`,
                    transition: 'opacity 0.3s, transform 0.06s linear',
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                  }}
                >
                  <div style={{
                    background: isActive
                      ? 'rgba(255,255,255,0.04)'
                      : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isActive && era.accent
                      ? 'rgba(64,96,208,0.25)'
                      : 'rgba(255,255,255,0.06)'}`,
                    backdropFilter: isActive ? 'blur(12px)' : 'none',
                    padding: '36px',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>

                    {/* Glow on active accent */}
                    {isActive && era.accent && (
                      <div style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none',
                        background: 'radial-gradient(ellipse at top left, rgba(64,96,208,0.1) 0%, transparent 60%)',
                      }} />
                    )}

                    <div>
                      <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'flex-start', marginBottom: '20px',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-display)', fontSize: '44px',
                          color: isActive && era.accent ? 'var(--blue)' : 'var(--gray-3)',
                          lineHeight: 1, transition: 'color 0.4s',
                        }}>
                          {era.year}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '9px',
                          letterSpacing: '0.15em',
                          color: isActive && era.accent ? 'var(--blue)' : 'var(--gray-2)',
                          padding: '4px 10px',
                          border: `1px solid ${isActive && era.accent
                            ? 'rgba(64,96,208,0.3)'
                            : 'var(--border)'}`,
                          transition: 'all 0.4s',
                        }}>
                          {era.era.toUpperCase()}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: '24px',
                        color: isActive ? 'var(--white)' : 'var(--gray-1)',
                        letterSpacing: '-0.01em', marginBottom: '12px',
                        lineHeight: 1.1, transition: 'color 0.4s',
                      }}>
                        {era.title.toUpperCase()}
                      </h3>

                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '13px',
                        fontWeight: 300, color: 'var(--gray-1)',
                        lineHeight: 1.7,
                      }}>
                        {era.body}
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {era.tags.map((tag) => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '9px',
                          letterSpacing: '0.08em', color: 'var(--gray-2)',
                          padding: '3px 9px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border)',
                        }}>
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

        {/* Progress dots */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', gap: '8px', alignItems: 'center',
        }}>
          {ERAS.map((_, i) => (
            <div key={i} style={{
              width: i === activeIndex ? '20px' : '4px',
              height: '4px',
              borderRadius: '2px',
              background: i === activeIndex ? 'var(--blue)' : 'var(--gray-2)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {/* Progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1px', background: 'var(--border)',
        }}>
          <div style={{
            height: '100%', width: `${progress * 100}%`,
            background: 'var(--blue)', transition: 'width 0.06s linear',
          }} />
        </div>
      </div>
    </section>
  )
}