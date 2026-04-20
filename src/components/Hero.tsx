'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isComponentMounted, setIsComponentMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    setIsComponentMounted(true)
    const handleMouseMove = (mouseEvent: MouseEvent) => setMousePosition({
      x: mouseEvent.clientX / window.innerWidth,
      y: mouseEvent.clientY / window.innerHeight,
    })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!isComponentMounted) return null

  // Calculate dynamic glow coordinates based on mouse position
  const dynamicGlowX = 30 + mousePosition.x * 40
  const dynamicGlowY = 20 + mousePosition.y * 40

  const floatingShapes = [
    { top: '15%', left: '12%', size: '30px', type: 'circle', color: '64, 96, 208', floatDuration: '7s', breatheDuration: '4s', delay: '0s' },
    { top: '65%', left: '85%', size: '55px', type: 'ring', color: '64, 96, 208', floatDuration: '9s', breatheDuration: '5s', delay: '1s' },
    { top: '70%', left: '18%', size: '20px', type: 'diamond', color: '64, 96, 208', floatDuration: '6s', breatheDuration: '3s', delay: '2.5s' },
    { top: '25%', left: '75%', size: '60px', type: 'circle', color: '64, 96, 208', floatDuration: '11s', breatheDuration: '6s', delay: '1.5s' },
    { top: '80%', left: '60%', size: '35px', type: 'ring', color: '64, 96, 208', floatDuration: '8s', breatheDuration: '4.5s', delay: '0.5s' },
    { top: '35%', left: '25%', size: '25px', type: 'diamond', color: '64, 96, 208', floatDuration: '8.5s', breatheDuration: '4s', delay: '3s' }
  ]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: '#000000', // Deep pitch-black void
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* ─── Inject Custom Animations for Shapes ─── */}
      <style>
        {`
          @keyframes shapeHover {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-40px) rotate(15deg); }
          }
          @keyframes shapeBreathe {
            0%, 100% { opacity: 0.15; transform: scale(0.9); box-shadow: 0 0 10px currentColor; }
            50% { opacity: 0.6; transform: scale(1.1); box-shadow: 0 0 35px currentColor; }
          }
        `}
      </style>

      {/* ─── Background: Abstract Digital Data Field ─── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
      }}>
        {/* Main interactive volumetric glow */}
        <div style={{
          position: 'absolute',
          top: '0', left: '0', width: '100%', height: '100%',
          background: `radial-gradient(ellipse 70% 60% at ${dynamicGlowX}% ${dynamicGlowY}%, rgba(64, 96, 208, 0.18) 0%, transparent 65%)`,
          transition: 'background 0.5s ease',
        }} />

        {/* Volumetric light bloom 1 */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-5%',
          width: '70vw', height: '80vh',
          background: 'radial-gradient(ellipse, rgba(64, 96, 208, 0.22) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animation: 'blobA 16s ease-in-out infinite',
        }} />

        {/* Volumetric light bloom 2 */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '10%',
          width: '50vw', height: '60vh',
          background: 'radial-gradient(ellipse, rgba(64, 96, 208, 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'blobB 20s ease-in-out infinite',
        }} />

        {/* ─── Floating Ambient Shapes ─── */}
        {floatingShapes.map((shapeConfig, index) => (
          <div key={`shape-${index}`} style={{
            position: 'absolute',
            top: shapeConfig.top,
            left: shapeConfig.left,
            animation: `shapeHover ${shapeConfig.floatDuration} ease-in-out infinite`,
            animationDelay: shapeConfig.delay,
            color: `rgba(${shapeConfig.color}, 1)` 
          }}>
            <div style={{
              width: shapeConfig.size,
              height: shapeConfig.size,
              animation: `shapeBreathe ${shapeConfig.breatheDuration} ease-in-out infinite`,
              animationDelay: shapeConfig.delay,
              ...(shapeConfig.type === 'circle' && {
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(${shapeConfig.color}, 0.8) 0%, rgba(${shapeConfig.color}, 0) 70%)`,
                filter: 'blur(8px)',
              }),
              ...(shapeConfig.type === 'ring' && {
                borderRadius: '50%',
                border: `2px solid rgba(${shapeConfig.color}, 0.5)`,
                boxShadow: `inset 0 0 10px rgba(${shapeConfig.color}, 0.3)`,
              }),
              ...(shapeConfig.type === 'diamond' && {
                transform: 'rotate(45deg)',
                border: `1px solid rgba(${shapeConfig.color}, 0.6)`,
                background: `rgba(${shapeConfig.color}, 0.1)`,
                boxShadow: `0 0 15px rgba(${shapeConfig.color}, 0.2)`,
              })
            }} />
          </div>
        ))}

        {/* Cascading Vertical Data-Light Columns */}
        {[
          { left: '10%', h: '100%', o: 0.15, delay: '0s', w: '2px', color: '64, 96, 208' },
          { left: '22%', h: '85%', o: 0.08, delay: '0.3s', w: '1px', color: '64, 96, 208' }, 
          { left: '35%', h: '100%', o: 0.12, delay: '0.6s', w: '3px', color: '64, 96, 208' }, 
          { left: '50%', h: '70%', o: 0.05, delay: '0.9s', w: '1px', color: '64, 96, 208' },
          { left: '65%', h: '95%', o: 0.18, delay: '1.2s', w: '2px', color: '64, 96, 208' }, 
          { left: '78%', h: '80%', o: 0.09, delay: '0.4s', w: '1px', color: '64, 96, 208' }, 
          { left: '90%', h: '100%', o: 0.14, delay: '0.8s', w: '2px', color: '64, 96, 208' }, 
        ].map((columnConfig, index) => (
          <div key={index} style={{
            position: 'absolute',
            bottom: 0,
            left: columnConfig.left,
            width: columnConfig.w,
            height: columnConfig.h,
            background: `linear-gradient(to top, rgba(${columnConfig.color}, ${columnConfig.o * 3}), rgba(${columnConfig.color}, ${columnConfig.o}) 40%, transparent)`,
            boxShadow: `0 0 15px rgba(${columnConfig.color}, ${columnConfig.o})`,
            animation: `stripFloat ${12 + index * 2}s ease-in-out infinite`,
            animationDelay: columnConfig.delay,
          }} />
        ))}

        {/* Interlocking Digital Cipher Core */}
        <div style={{
          position: 'absolute', bottom: '5%', left: '50%',
          transform: 'translateX(-50%)',
          width: '300px', height: '300px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.8,
        }}>
           {/* Core ambient portal glow */}
           <div style={{
            position: 'absolute', width: '150%', height: '150%',
            background: 'radial-gradient(circle, rgba(64, 96, 208, 0.2) 0%, transparent 60%)',
            filter: 'blur(30px)',
          }} />
          {/* Outer etched cipher ring */}
          <div style={{
            position: 'absolute', width: '100%', height: '100%',
            border: '1px solid rgba(64, 96, 208, 0.15)',
            borderTop: '2px solid rgba(64, 96, 208, 0.6)',
            borderBottom: '2px solid rgba(64, 96, 208, 0.5)',
            borderRadius: '50%',
            animation: 'spinRing 35s linear infinite',
          }} />
          {/* Middle interlocking multi-layered portal */}
          <div style={{
            position: 'absolute', width: '65%', height: '65%',
            border: '1px dashed rgba(64, 96, 208, 0.3)',
            borderRadius: '50%',
            animation: 'spinRing 20s linear infinite reverse',
          }} />
          {/* Inner pulsing core */}
          <div style={{
            position: 'absolute', width: '25%', height: '25%',
            background: 'radial-gradient(circle, rgba(64, 96, 208, 0.6) 0%, transparent 70%)',
            borderRadius: '50%',
            boxShadow: '0 0 40px rgba(64, 96, 208, 0.4)',
            animation: 'pulse 3s ease-in-out infinite',
          }} />
        </div>

        {/* Subtle Digital Dust Matrix */}
        <svg style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', opacity: 0.35,
        }}>
          {Array.from({ length: 8 }).map((_, rowIndex) =>
            Array.from({ length: 16 }).map((_, colIndex) => (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={colIndex * 100 + (rowIndex % 2 === 0 ? 50 : 0)}
                cy={rowIndex * 100 + 50}
                r="1"
                fill="rgba(64, 96, 208, 0.5)" 
              />
            ))
          )}
        </svg>

        {/* Deep cinematic shadow transition at the bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '40%',
          background: 'linear-gradient(to top, #000000 10%, transparent 100%)',
          zIndex: 5,
        }} />
      </div>

      {/* ─── Nav ─── */}
      <nav style={{
        position: 'relative', zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 56px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)',
        }}>
          airel.adrivano
        </span>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['journey', 'stack', 'work', 'contact'].map((navItem) => (
            <a key={navItem} href={`#${navItem}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={hoverEvent => hoverEvent.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={hoverEvent => hoverEvent.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              {navItem}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── Main Content ─── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', zIndex: 10,
        padding: '0 56px 80px',
        textAlign: 'center',
        gap: '0',
      }}>

        {/* Advanced Tech Status Badge */}
        <div className="fade-in" style={{
          animationDelay: '0.1s', opacity: 0,
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 14px',
          background: 'rgba(64, 96, 208, 0.08)',
          border: '1px solid rgba(64, 96, 208, 0.25)',
          borderRadius: '100px',
          marginBottom: '36px',
        }}>
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'rgb(64, 96, 208)', 
            boxShadow: '0 0 8px rgba(64, 96, 208, 0.8)',
            animation: 'pulse 2.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.15em', color: 'rgba(64, 96, 208, 0.9)', 
          }}>
            system online / available
          </span>
        </div>

        <h1 className="fade-up" style={{
          animationDelay: '0.2s', opacity: 0,
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 'clamp(52px, 8vw, 120px)',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          marginBottom: '28px',
          textShadow: '0 4px 32px rgba(64, 96, 208, 0.3)', 
        }}>
          Airel Adrivano
        </h1>

        <p className="fade-in" style={{
          animationDelay: '0.4s', opacity: 0,
          fontFamily: 'var(--font-sans)', fontWeight: 300,
          fontSize: 'clamp(14px, 1.6vw, 18px)',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '48px',
        }}>
          Full-stack engineer building products end-to-end —
          from game engines to enterprise platforms.
          Depth over breadth.
        </p>

        {/* CTAs */}
        <div className="fade-in" style={{
          animationDelay: '0.55s', opacity: 0,
          display: 'flex', gap: '12px', alignItems: 'center',
          marginBottom: '80px',
        }}>
          <a href="#work" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 500,
            fontSize: '13px', letterSpacing: '0.02em',
            padding: '12px 28px',
            background: '#FFFFFF', color: '#000000',
            textDecoration: 'none', borderRadius: '100px',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={hoverEvent => hoverEvent.currentTarget.style.opacity = '0.85'}
            onMouseLeave={hoverEvent => hoverEvent.currentTarget.style.opacity = '1'}
          >
            View Work →
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 400,
            fontSize: '13px', letterSpacing: '0.02em',
            padding: '12px 28px',
            border: '1px solid rgba(64, 96, 208, 0.3)',
            color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
            borderRadius: '100px', transition: 'all 0.2s',
            background: 'rgba(64, 96, 208, 0.03)',
          }}
            onMouseEnter={hoverEvent => {
              hoverEvent.currentTarget.style.borderColor = 'rgba(64, 96, 208, 0.8)'
              hoverEvent.currentTarget.style.background = 'rgba(64, 96, 208, 0.1)'
              hoverEvent.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={hoverEvent => {
              hoverEvent.currentTarget.style.borderColor = 'rgba(64, 96, 208, 0.3)'
              hoverEvent.currentTarget.style.background = 'rgba(64, 96, 208, 0.03)'
              hoverEvent.currentTarget.style.color = 'rgba(255,255,255,0.8)'
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Floating Info Labels */}
        <div className="fade-in" style={{
          animationDelay: '0.7s', opacity: 0,
          position: 'relative', width: '100%', maxWidth: '900px', height: '0',
        }}>
          {[
            { label: 'Bogor, ID', sub: 'Based in', x: '4%', y: '-20px' },
            { label: 'Full-Stack', sub: 'Primary', x: '35%', y: '10px' },
            { label: 'UPNVJ', sub: 'Education', x: '67%', y: '-10px' },
            { label: 'Open to work', sub: 'Status', x: '88%', y: '15px' },
          ].map((infoItem) => (
            <div key={infoItem.label} style={{
              position: 'absolute',
              left: infoItem.x,
              top: infoItem.y,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px',
                letterSpacing: '0.15em', color: 'rgba(64, 96, 208, 0.9)',
                textTransform: 'uppercase',
              }}>
                {infoItem.sub}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)', fontWeight: 400,
                fontSize: '12px', color: 'rgba(255,255,255,0.8)',
              }}>
                {infoItem.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}