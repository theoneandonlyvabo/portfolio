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
        padding: '120px 56px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
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
              box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 2px var(--skill-color); 
              filter: brightness(0.95); 
            }
            50% { 
              box-shadow: 0 4px 12px rgba(0,0,0,0.6), 0 0 12px var(--skill-color); 
              filter: brightness(1.1); 
            }
          }
        `}
      </style>

      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: '600px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: '#888888',
              marginBottom: '16px',
            }}
          >
            03 / STACK
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.0,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
            }}
          >
            What I build with
          </h2>
        </div>

        {/* Skills */}
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

            const animationDelayOffset = (index % 5) * 0.4

            const isIdleState = hoveredSkillId === null
            const breathDuration = 3 + (index % 3)
            const breathDelay = index * 0.5

            const breathAnimation = isIdleState
              ? `neonBreathing ${breathDuration}s ease-in-out infinite ${breathDelay}s`
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
                  animationDelay: `${animationDelayOffset}s`,
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
                      transformOrigin: 'center',
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
                      transition: `
                        width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                        border-radius 0.3s ease,
                        padding 0.3s ease,
                        box-shadow 0.3s ease
                      `
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: isSkillHovered ? 'flex-start' : 'center',
                        justifyContent: isSkillHovered ? 'flex-start' : 'center',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        position: isSkillHovered ? 'relative' : 'absolute',
                        top: isSkillHovered ? '0px' : '50%',
                        left: isSkillHovered ? '0px' : '50%',
                        transform: isSkillHovered
                          ? currentScale
                          : `translate(-50%, -50%) ${currentScale}`,
                        
                        transformOrigin: 'center',
                        filter: imgFilter,
                        marginBottom: isSkillHovered ? '12px' : '0px',
                      }}
                    >
                      <img
                        src={skillItem.imagePath}
                        alt={`${skillItem.label} icon`}
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
                        pointerEvents: isSkillHovered ? 'auto' : 'none',
                        height: isSkillHovered ? 'auto' : '0px',
                        opacity: isSkillHovered ? 1 : 0,
                        visibility: isSkillHovered ? 'visible' : 'hidden',
                        overflow: 'hidden',
                        transition: 'opacity 0.25s ease 0.35s, transform 0.25s ease 0.35s',
                        transform: isSkillHovered ? 'translateY(0px)' : 'translateY(10px)',
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        marginBottom: '8px', 
                        flexWrap: 'wrap',
                        width: '100%',
                        justifyContent: 'flex-start',
                      }}>                        <h3 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>
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
                            IN STUDY
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                        {skillItem.description}
                      </p>

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