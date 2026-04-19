'use client'

import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { label: 'Full-Stack', value: 90 },
  { label: 'Architecture', value: 82 },
  { label: 'Game Dev', value: 75 },
  { label: 'Backend', value: 85 },
  { label: 'Product', value: 78 },
  { label: 'CLI/Tools', value: 80 },
]

function RadarChart() {
  const size = 260
  const cx = size / 2
  const cy = size / 2
  const r = 100
  const n = SKILLS.length

  const angleOf = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2

  const pointAt = (i: number, radius: number) => {
    const a = angleOf(i)
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) }
  }

  const dataPoints = SKILLS.map((s, i) => pointAt(i, r * (s.value / 100)))
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z'

  const gridLevels = [0.25, 0.5, 0.75, 1]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4060d0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4060d0" stopOpacity="0.05" />
        </radialGradient>
        <filter id="radarGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid levels */}
      {gridLevels.map((level) => {
        const pts = SKILLS.map((_, i) => pointAt(i, r * level))
        const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z'
        return (
          <path
            key={level}
            d={path}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        )
      })}

      {/* Axis lines */}
      {SKILLS.map((_, i) => {
        const outer = pointAt(i, r)
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={outer.x} y2={outer.y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        )
      })}

      {/* Data fill */}
      <path d={dataPath} fill="url(#radarFill)" />

      {/* Data stroke */}
      <path
        d={dataPath}
        fill="none"
        stroke="#4060d0"
        strokeWidth="1.5"
        strokeOpacity="0.8"
        filter="url(#radarGlow)"
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#4060d0" fillOpacity="0.9" />
      ))}

      {/* Labels */}
      {SKILLS.map((s, i) => {
        const labelPt = pointAt(i, r + 22)
        return (
          <text
            key={i}
            x={labelPt.x}
            y={labelPt.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
            fill="rgba(144,144,160,0.8)"
            letterSpacing="0.08em"
          >
            {s.label.toUpperCase()}
          </text>
        )
      })}
    </svg>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    setMounted(true)
    const fn = (e: MouseEvent) => setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  if (!mounted) return null

  const gx = mouse.x * 100
  const gy = mouse.y * 100

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: 'var(--black)',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── Background layers ── */}

      {/* Mouse-tracking glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(700px circle at ${gx}% ${gy}%, rgba(64,96,208,0.07) 0%, transparent 70%)`,
        transition: 'background 0.4s ease',
      }} />

      {/* Static ambient blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '5%',
        width: '600px', height: '600px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(64,96,208,0.12) 0%, transparent 65%)',
        animation: 'float1 14s ease-in-out infinite',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '500px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(64,96,208,0.08) 0%, transparent 65%)',
        animation: 'float3 18s ease-in-out infinite',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '40%',
        width: '300px', height: '300px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(80,112,224,0.06) 0%, transparent 65%)',
        animation: 'float2 22s ease-in-out infinite',
        filter: 'blur(30px)',
      }} />

      {/* Geometric: rotating ring */}
      <div style={{
        position: 'absolute', top: '12%', right: '18%',
        width: '180px', height: '180px', pointerEvents: 'none',
        border: '1px solid rgba(64,96,208,0.12)',
        borderRadius: '50%',
        animation: 'spinSlow 30s linear infinite',
      }} />
      <div style={{
        position: 'absolute', top: '14%', right: '20%',
        width: '140px', height: '140px', pointerEvents: 'none',
        border: '1px solid rgba(64,96,208,0.07)',
        borderRadius: '50%',
        animation: 'spinSlow 20s linear infinite reverse',
      }} />

      {/* Geometric: floating dot grid */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 120 + 60}
              cy={row * 100 + 50}
              r="1"
              fill="rgba(64,96,208,0.25)"
            />
          ))
        )}
      </svg>

      {/* Layered vertical strips — Recognito-inspired */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 118px,
            rgba(64,96,208,0.02) 118px,
            rgba(64,96,208,0.02) 120px
          )
        `,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'relative', zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 56px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: '0.15em', color: 'var(--gray-2)',
        }}>
          airel.adrivano
        </span>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['journey', 'stack', 'work', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.1em', color: 'var(--gray-2)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-2)'}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        padding: '0 56px', position: 'relative', zIndex: 10,
        gap: '0',
      }}>

        {/* Left: text block */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* Label */}
          <div className="fade-in" style={{ animationDelay: '0.1s', opacity: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'var(--blue)', animation: 'pulse 2.5s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.2em', color: 'var(--gray-1)',
            }}>
              developer — builder — jakarta
            </span>
          </div>

          {/* Name */}
          <div className="fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px, 10vw, 140px)',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              color: 'var(--white)',
            }}>
              AIREL
              <br />
              <span style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(64,96,208,0.6)',
              }}>
                ADRIVANO
              </span>
            </h1>
          </div>

          {/* Descriptor */}
          <p className="fade-in" style={{
            animationDelay: '0.45s', opacity: 0,
            fontFamily: 'var(--font-body)', fontSize: '14px',
            fontWeight: 300, color: 'var(--gray-1)',
            maxWidth: '360px', lineHeight: 1.8,
          }}>
            Full-stack engineer. I build products end-to-end —
            from game engines to enterprise platforms.
          </p>

          {/* CTAs */}
          <div className="fade-in" style={{ animationDelay: '0.6s', opacity: 0, display: 'flex', gap: '12px' }}>
            <a href="#work" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.12em', padding: '11px 24px',
              background: 'var(--blue)', color: 'var(--white)',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              VIEW WORK
            </a>
            <a href="#contact" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.12em', padding: '11px 24px',
              border: '1px solid var(--border-hover)', color: 'var(--gray-1)',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(64,96,208,0.4)'
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
        </div>

        {/* Right: radar chart */}
        <div className="fade-in" style={{
          animationDelay: '0.5s', opacity: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '16px',
          flexShrink: 0,
        }}>
          <div style={{
            position: 'relative',
            padding: '24px',
            background: 'rgba(64,96,208,0.04)',
            border: '1px solid rgba(64,96,208,0.1)',
            backdropFilter: 'blur(8px)',
          }}>
            <RadarChart />
            {/* Center glow */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px',
              background: 'radial-gradient(ellipse, rgba(64,96,208,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '9px',
            letterSpacing: '0.2em', color: 'var(--gray-2)',
          }}>
            CAPABILITY INDEX
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-in" style={{
        animationDelay: '1s', opacity: 0,
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '9px',
          letterSpacing: '0.25em', color: 'var(--gray-2)',
        }}>
          SCROLL
        </span>
        <div style={{
          width: '1px', height: '36px',
          background: 'linear-gradient(to bottom, var(--gray-2), transparent)',
        }} />
      </div>
    </section>
  )
}