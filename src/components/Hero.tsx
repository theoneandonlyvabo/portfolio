'use client'

import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!mounted) return null

  const glowX = mousePos.x * 100
  const glowY = mousePos.y * 100

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Ambient glow — follows mouse subtly */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(232,160,69,0.05) 0%, transparent 70%)`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Static ambient bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '40%',
          background: 'radial-gradient(ellipse at center bottom, rgba(232,160,69,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Nav */}
      <nav style={{
        position: 'relative',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px 48px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--gray-2)',
        }}>
          airel.adrivano
        </span>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['journey', 'stack', 'work', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'var(--gray-2)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-2)')}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 48px',
        position: 'relative',
        zIndex: 10,
        gap: '0px',
      }}>

        {/* Label */}
        <div
          className="fade-in"
          style={{
            animationDelay: '0.1s',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--amber)',
            animation: 'shimmer 2.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--gray-1)',
          }}>
            developer — builder — jakarta
          </span>
        </div>

        {/* Name */}
        <h1
          className="fade-up"
          style={{
            animationDelay: '0.2s',
            opacity: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 14vw, 200px)',
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            color: 'var(--white)',
          }}
        >
          AIREL
          <br />
          <span style={{ color: 'var(--amber)' }}>ADRIVANO</span>
        </h1>

        {/* Descriptor */}
        <p
          className="fade-in"
          style={{
            animationDelay: '0.5s',
            opacity: 0,
            marginTop: '40px',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--gray-1)',
            textAlign: 'center',
            maxWidth: '420px',
            lineHeight: 1.7,
          }}
        >
          Full-stack engineer. I build products end-to-end —
          from game engines to enterprise platforms.
        </p>

        {/* CTA row */}
        <div
          className="fade-in"
          style={{
            animationDelay: '0.65s',
            opacity: 0,
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <a
            href="#work"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              padding: '12px 28px',
              background: 'var(--amber)',
              color: 'var(--black)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              padding: '12px 28px',
              border: '1px solid var(--border-hover)',
              color: 'var(--gray-1)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--amber)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--gray-1)'
            }}
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Stats */}
        <div
          className="fade-in"
          style={{
            animationDelay: '0.8s',
            opacity: 0,
            marginTop: '80px',
            display: 'flex',
            gap: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {[
            { value: '4+', label: 'Active projects' },
            { value: '3×', label: 'Competition finalist' },
            { value: '5', label: 'Languages' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '40px',
                color: 'var(--white)',
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--gray-2)',
                marginTop: '6px',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fade-in"
        style={{
          animationDelay: '1.1s',
          opacity: 0,
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'var(--gray-2)',
        }}>
          SCROLL
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--gray-2), transparent)',
        }} />
      </div>
    </section>
  )
}