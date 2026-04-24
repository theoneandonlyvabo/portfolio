'use client'

import { useRef, useEffect, useState } from 'react'

const ERAS = [
  {
    year: '2012',
    era: 'Origin',
    title: 'PC or PlayStation?',
    body: 'Got offered a choice between a PlayStation and a PC. Chose the PC. That moment sparked my curiosity and slowly introduced me to how computers actually work.',
    tags: ['Hardware', 'Curiosity'],
    color: '64,96,208',
  },
  {
    year: '2016',
    era: 'Discovery',
    title: 'First Line of Code',
    body: 'Middle school HTML class. Being around friends who were already into tech made it easier to get into it. I started learning by doing and just kept going.',
    tags: ['HTML/CSS', 'Al-Izhar'],
    color: '255,200,50',
  },
  {
    year: '2019',
    era: 'Searching',
    title: 'Figuring Things Out',
    body: 'Looked into different paths: mechanical engineering, electrical, statistics. Tried to explore everything, but kept coming back to the same place.',
    tags: ['Self-Discovery', 'Direction'],
    color: '50,200,120',
  },
  {
    year: '2024',
    era: 'Fracture',
    title: 'Four Walls, Four Rejections',
    body: "Failed UTBK. Ended up at UPNVJ. 2 years, four tries to get into SI UI, didn't make it. Started believing I was incompatible with the institution I always wanted.",
    tags: ['Resilience', 'UPNVJ'],
    color: '255,100,50',
  },
  {
    year: 'Now',
    era: 'Present',
    title: 'I Am the Institution',
    body: "Realized I don't need the institution to validate the direction. Multiple competition wins. Skalar Solutions. 2030 SUKSES!. ETERNAFALL. Not proving it to anyone else, proving it to myself.",
    tags: ['Skalar Solutions', 'EternaFall', 'Grimoire'],
    color: 'chroma',
  },
]

// 8 Photo configs with varying ratios, placements, and rotations
// anchored to top & left for a consistent fluid layout
const ORGANIC_PHOTOS = [
  { id: 1, src: '/photos/3:4 selfie.jpeg',   ratio: '3/4', w: '32%', top: '1%',  left: '4%',  rotate: '-11deg', delay: '0.2s', z: 3 },
  { id: 6, src: '/photos/4:3 yearbook.jpeg', ratio: '4/3', w: '42%', top: '1%',  left: '42%', rotate: '7deg',   delay: '0.8s', z: 2 },
  { id: 3, src: '/photos/3:4 share.jpeg',    ratio: '3/4', w: '30%', top: '22%', left: '70%', rotate: '13deg',  delay: '0.5s', z: 4 },
  { id: 2, src: '/photos/3:4 photo.jpeg',    ratio: '3/4', w: '30%', top: '30%', left: '-1%', rotate: '-15deg', delay: '1.5s', z: 5 },
  { id: 8, src: '/photos/1:1 mip.jpeg',      ratio: '1/1', w: '36%', top: '26%', left: '31%', rotate: '-2deg',  delay: '0s',   z: 8 },
  { id: 5, src: '/photos/4:3 og.jpeg',       ratio: '4/3', w: '41%', top: '58%', left: '32%', rotate: '-5deg',  delay: '1.2s', z: 6 },
  { id: 4, src: '/photos/3:4 2030.jpeg',     ratio: '3/4', w: '29%', top: '58%', left: '70%', rotate: '10deg',  delay: '2.5s', z: 5 },
  { id: 7, src: '/photos/4:3 basket.jpeg',   ratio: '4/3', w: '42%', top: '64%', left: '2%',  rotate: '-3deg',  delay: '2.1s', z: 5 },
]

const cardWidth = 440
const cardGap = 24

export default function AboutAndJourneySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(1280)
  const [floatIndex, setFloatIndex] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleHorizontalScroll = () => {
    if (!scrollContainerRef.current) return
    const scrollLeft = scrollContainerRef.current.scrollLeft
    setFloatIndex(scrollLeft / (cardWidth + cardGap))
  }

  const horizontalPadding = Math.max(0, windowWidth / 2 - cardWidth / 2)
  const activeIndex = Math.min(Math.max(Math.round(floatIndex), 0), ERAS.length - 1)
  const activeColor = ERAS[activeIndex].color

  return (
    <section
      id="about-journey"
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        padding: '140px 0 120px',
      }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes chromaPulse {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Organic float using CSS Variables for rotation so each photo stays tilted */
        @keyframes organicFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--r)); }
          50%      { transform: translateY(-8px) rotate(calc(var(--r) + 1.5deg)); }
        }

        /* Sleek, dark-mode glassmorphism style matching the cards */
        .scrapbook-photo {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          box-shadow: 0 16px 40px -8px rgba(0,0,0,0.8);
          overflow: hidden;
          background: rgba(10,12,16,0.6);
          backdrop-filter: blur(10px);
          animation: organicFloat 6s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      z-index 0.3s ease, 
                      box-shadow 0.4s ease, 
                      border-color 0.4s ease;
          cursor: pointer;
        }

        /* Inner subtle glow to match the era cards */
        .scrapbook-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          box-shadow: inset 0 0 20px rgba(255,255,255,0.03);
          pointer-events: none;
        }

        .scrapbook-photo:hover {
          z-index: 20 !important;
          transform: scale(1.15) rotate(0deg) !important;
          border-color: rgba(255,255,255,0.25);
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.05);
          animation: none;
        }

        .era-card {
          transition:
            opacity 0.25s ease,
            filter 0.25s ease,
            transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .era-card-inner {
          transition:
            background 0.35s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw', height: '100vh',
          pointerEvents: 'none', zIndex: 1,
          transition: 'background 0.9s ease-in-out',
          ...(activeColor === 'chroma'
            ? {
                background: 'linear-gradient(120deg, rgba(255,0,0,0.08), rgba(255,165,0,0.08), rgba(255,255,0,0.08), rgba(0,128,0,0.08), rgba(0,0,255,0.08), rgba(75,0,130,0.08), rgba(238,130,238,0.08))',
                backgroundSize: '200% 200%',
                animation: 'chromaPulse 8s ease infinite',
                maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 65%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 65%)',
              }
            : {
                background: `radial-gradient(ellipse at center, rgba(${activeColor},0.13) 0%, transparent 65%)`,
              }),
        }}
      />

      {/* Header + About */}
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '0 56px',
          position: 'relative',
          zIndex: 2,
          marginBottom: '80px',
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', color: '#666666',
            marginBottom: '16px', textTransform: 'uppercase',
          }}>
            01 / ORIGIN
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.0, color: '#FFFFFF',
            letterSpacing: '-0.03em',
          }}>
            The Journey
          </h2>
        </div>

        {/* 2-col: About text + Organic Scrapbook Collage */}
        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', alignItems: 'center' }}>

          {/* Left: Text */}
          <div style={{ flex: '1 1 450px' }}>
            {[
              "My name is Vano. I'm driven by creation, imagination, and the urge to build things that actually matter. Since I was young, I've always thought in scale, not just about experiencing the world, but about shaping something that leaves a mark on it. Ambition has never been something I need to manage, it's just how I naturally operate.",
              "That brought me into software engineering and product development. I'm drawn to turning nothing into something structured and usable. Most of my work is in web development, but my real interest runs deeper: backend systems, architecture, and how things work under the surface, mostly through Java and Go.",
              'At the core, I build, I learn, I refine. One principle drives everything: create and impact the world. As a famous saying went: "If You wanna make history, You gotta call Your own shots."',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                  marginBottom: i < 2 ? '28px' : '0',
                  textAlign: 'justify',
                  letterSpacing: '0.01em',
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right: Scrapbook Collage */}
          <div
            style={{
              flex: '1 1 400px',
              position: 'relative',
              height: '460px',
            }}
          >
            {ORGANIC_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="scrapbook-photo"
                style={{
                  width: photo.w,
                  aspectRatio: photo.ratio,
                  top: photo.top,
                  left: photo.left,
                  zIndex: photo.z,
                  animationDelay: photo.delay,
                  ...( { '--r': photo.rotate } as React.CSSProperties ),
                }}
              >
                <img
                  src={photo.src}
                  alt={`Vano Moment ${photo.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const parent = t.parentElement
                    if (parent) {
                      parent.style.background = 'rgba(255,255,255,0.03)'
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-family:monospace;font-size:10px;">${photo.ratio}</div>`
                    }
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Journey horizontal scroll */}
      <div
        ref={scrollContainerRef}
        onScroll={handleHorizontalScroll}
        className="hide-scrollbar"
        style={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollBehavior: 'smooth',
          padding: `20px ${horizontalPadding}px 60px`,
          gap: `${cardGap}px`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {ERAS.map((era, i) => {
          const dist = i - floatIndex
          const absDist = Math.abs(dist)

          const rotateY = dist * -12
          const scale = Math.max(0.80, 1 - absDist * 0.09)
          const opacity = Math.max(0.12, 1 - absDist * 0.38)
          const translateZ = -absDist * 70
          const blur = Math.max(0, (absDist - 0.65) * 2.2)
          const isActive = absDist < 0.65

          const cardGlow =
            era.color === 'chroma'
              ? 'rgba(255,255,255,0.18)'
              : `rgba(${era.color},0.45)`

          const innerGlowColor =
            era.color === 'chroma'
              ? null
              : `rgba(${era.color},0.2)`

          return (
            <div
              key={era.year}
              className="era-card"
              style={{
                flexShrink: 0,
                width: `${cardWidth}px`,
                opacity,
                transform: `perspective(1400px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                transformOrigin: dist < 0 ? 'right center' : 'left center',
              }}
            >
              <div
                className="era-card-inner"
                style={{
                  background: isActive ? 'rgba(10,12,16,0.85)' : 'rgba(255,255,255,0.01)',
                  border: `1px solid ${isActive ? cardGlow : 'rgba(255,255,255,0.04)'}`,
                  backdropFilter: isActive ? 'blur(20px)' : 'blur(4px)',
                  borderRadius: '18px',
                  padding: '40px',
                  height: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isActive
                    ? `0 20px 50px -12px rgba(0,0,0,0.85), 0 0 30px ${cardGlow.replace('0.45', '0.12')}`
                    : 'none',
                }}
              >
                {/* Inner glow */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      pointerEvents: 'none',
                      borderRadius: '18px',
                      ...(era.color === 'chroma'
                        ? {
                            background: 'linear-gradient(120deg, rgba(255,0,0,0.08), rgba(255,165,0,0.08), rgba(255,255,0,0.08), rgba(0,128,0,0.08), rgba(0,0,255,0.08), rgba(75,0,130,0.08), rgba(238,130,238,0.08))',
                            backgroundSize: '200% 200%',
                            animation: 'chromaPulse 8s ease infinite',
                          }
                        : {
                            background: `radial-gradient(ellipse at 30% 20%, ${innerGlowColor} 0%, transparent 60%)`,
                          }),
                    }}
                  />
                )}

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Year + Era badge */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', marginBottom: '28px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontWeight: 600,
                      fontSize: '48px', lineHeight: 1,
                      color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.25)',
                      letterSpacing: '-0.04em',
                      transition: 'color 0.35s ease',
                    }}>
                      {era.year}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '9px',
                      letterSpacing: '0.15em',
                      color: isActive
                        ? era.color === 'chroma' ? '#FFFFFF' : `rgb(${era.color})`
                        : 'rgba(255,255,255,0.35)',
                      padding: '5px 12px',
                      border: `1px solid ${isActive
                        ? era.color === 'chroma'
                          ? 'rgba(255,255,255,0.3)'
                          : `rgba(${era.color},0.55)`
                        : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '100px',
                      transition: 'all 0.35s ease',
                      textTransform: 'uppercase',
                    }}>
                      {era.era}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 600,
                    fontSize: '22px', letterSpacing: '-0.02em',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                    marginBottom: '14px', lineHeight: 1.2,
                    transition: 'color 0.35s ease',
                  }}>
                    {era.title}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '14px',
                    fontWeight: 300,
                    color: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
                    lineHeight: 1.65,
                    transition: 'color 0.35s ease',
                  }}>
                    {era.body}
                  </p>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '8px',
                  position: 'relative', zIndex: 2,
                }}>
                  {era.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '10px',
                        letterSpacing: '0.06em',
                        color: isActive ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.2)',
                        padding: '4px 10px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '100px',
                        transition: 'color 0.35s ease',
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
    </section>
  )
}