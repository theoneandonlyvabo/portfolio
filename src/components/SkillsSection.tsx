'use client'

import { useRef, useEffect, useState } from 'react'
import { SKILLS } from '@/lib/constants'

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="stack"
      ref={ref}
      style={{
        background: 'var(--deep)',
        padding: '120px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '500px',
        height: '400px',
        background: 'radial-gradient(ellipse at top right, rgba(64,96,208,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--blue)',
            marginBottom: '12px',
          }}>
            03 / STACK
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 0.9,
              color: 'var(--white)',
              letterSpacing: '-0.01em',
            }}>
              WHAT I<br />BUILD WITH
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--gray-1)',
              maxWidth: '280px',
              lineHeight: 1.7,
              flexShrink: 0,
            }}>
              Primary stack is TypeScript/Next.js.
              Most comfortable in Go and Java.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
        }}>
          {SKILLS.map((cat, i) => (
            <div
              key={cat.category}
              style={{
                background: 'var(--deep)',
                padding: '36px 32px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ${i * 0.08}s, transform 0.6s ${i * 0.08}s`,
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: 'var(--blue)',
                marginBottom: '20px',
              }}>
                {cat.category.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--gray-1)',
                      padding: '6px 12px',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(64,96,208,0.3)'
                      e.currentTarget.style.color = 'var(--white)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--gray-1)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}