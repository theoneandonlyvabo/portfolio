'use client'

import { useEffect, useState, useRef } from 'react'
import { SKILLS_DETAILED } from '@/lib/constants'

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null)

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
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
        padding: '0px 50px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
      }}
    >
      <style>
        {`
          @keyframes floatAsymmetric {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          
          @keyframes neonBreathing {
            0%, 100% { 
              box-shadow: 0 25px 100px rgba(0,0,0,0.5), 0 0 2px var(--skill-color); 
              filter: brightness(0.95); 
            }
            50% { 
              box-shadow: 0 25px 100px rgba(0,0,0,0.6), 0 0 12px var(--skill-color); 
              filter: brightness(1.1); 
            }
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: '#888888',
            marginBottom: '16px',
          }}>
            03 / STACK
          </div>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
          }}>
            What I build with
          </h2>
        </div>

        <div
          style={{
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
          }}
        >
          {SKILLS_DETAILED.map((skillItem, index) => {
            const isSkillHovered = hoveredSkillId === skillItem.id
            const isAnotherSkillHovered =
              hoveredSkillId !== null && !isSkillHovered

            const isIdleState = hoveredSkillId === null

            const breathAnimation = isIdleState
              ? `neonBreathing ${3 + (index % 3)}s ease-in-out infinite ${index * 0.5}s`
              : 'none'

            const isFigma = skillItem.id === 'figma'
            const idleScale = isFigma ? 'scale(0.75)' : 'scale(1)'
            const hoverScale = isFigma ? 'scale(0.55)' : 'scale(0.7)'
            const currentScale = isSkillHovered ? hoverScale : idleScale

            const needsInvert =
              skillItem.id === 'nextjs' || skillItem.id === 'ollama'

            const imgFilter = needsInvert && !isSkillHovered
              ? 'invert(1) brightness(1.5)'
              : needsInvert
              ? 'invert(1)'
              : 'none'

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
                  zIndex: isSkillHovered ? 50 : 1,
                  opacity: isAnotherSkillHovered ? 0.3 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <div style={{ '--skill-color': skillItem.color } as React.CSSProperties}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: isSkillHovered ? '280px' : '120px',
                      height: isSkillHovered ? 'auto' : '120px',
                      minHeight: isSkillHovered ? '160px' : '0px',
                      padding: isSkillHovered ? '24px' : '0px',
                      borderRadius: isSkillHovered ? '20px' : '50%',
                      background: '#111111',
                      border: `2px solid ${skillItem.color}`,
                      boxShadow: isSkillHovered
                        ? `0 20px 40px rgba(0,0,0,0.9), 0 0 40px ${skillItem.color}25`
                        : `0 4px 12px rgba(0,0,0,0.5), 0 0 20px ${skillItem.color}18`,
                      display: 'flex',
                      flexDirection: isSkillHovered ? 'column' : 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      animation: breathAnimation,
                      transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                      filter: isSkillHovered ? 'blur(0px)' : 'blur(0.3px)',
                    }}
                  >
                    {/* Icon idle */}
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: isSkillHovered ? 'absolute' : 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) ${currentScale}`,
                        opacity: isSkillHovered ? 0 : 1,
                        transition: 'all 0.25s ease',
                        filter: imgFilter,
                      }}
                    >
                      <img
                        src={skillItem.imagePath}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    {/* Expanded */}
                    <div
                      style={{
                        width: '100%',

                        /* 🔥 langsung ilang pas unhover */
                        opacity: isSkillHovered ? 1 : 0,
                        visibility: isSkillHovered ? 'visible' : 'hidden',

                        /* hanya animasi saat masuk, bukan keluar */
                        transition: isSkillHovered
                          ? 'opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s'
                          : 'none',

                        transform: isSkillHovered ? 'translateY(0px)' : 'translateY(10px)',

                        pointerEvents: isSkillHovered ? 'auto' : 'none',
                      }}
                    >
                      {isSkillHovered && (
                        <div style={{
                          width: '40px',
                          height: '40px',
                          marginBottom: '10px',
                          opacity: 0,
                          animation: 'fadeIn 0.3s ease forwards 0.2s'
                        }}>
                          <img src={skillItem.imagePath} style={{ width: '100%' }} />
                        </div>
                      )}

                      {/* HEADER ROW */}
                      <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        marginBottom: '8px', 
                        flexWrap: 'wrap',
                        alignItems: 'center'
                      }}>
                        <h3 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>
                          {skillItem.label}
                        </h3>

                        <span style={{
                          fontSize: '8px',
                          color: skillItem.color,
                          padding: '2px 6px',
                          border: `1px solid ${skillItem.color}60`,
                          borderRadius: '100px',
                        }}>
                          {skillItem.category}
                        </span>

                        {skillItem.isExperimental && (
                          <span style={{
                            fontSize: '8px',
                            color: '#FFB800',
                            padding: '2px 6px',
                            border: `1px dashed #FFB80080`,
                            borderRadius: '100px',
                          }}>
                            EXPERIMENTAL
                          </span>
                        )}
                      </div>

                      {/* DESCRIPTION */}
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
                        {skillItem.description}
                      </p>

                      {/* TAGS */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {skillItem.related.map((rel) => (
                          <span key={rel} style={{ fontSize: '9px', opacity: 0.7 }}>
                            {rel}
                          </span>
                        ))}
                      </div>
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