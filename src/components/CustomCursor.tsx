'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button') ||
        t.style.cursor === 'pointer' ||
        window.getComputedStyle(t).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      // Ring lerps
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Dot — core cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: isHovering ? 'var(--blue)' : 'var(--white)',
          zIndex: 99999,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          transition: 'background 0.2s, transform 0.05s',
          transform: isClicking ? 'scale(0.6)' : 'scale(1)',
          willChange: 'transform',
        }}
      />

      {/* Ring — lagging follower with screen texture */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          zIndex: 99998,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          opacity: isClicking ? 0.4 : 0.6,
        }}
      >
        {/* Outer ring */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `1px solid ${isHovering ? 'var(--blue)' : 'rgba(255,255,255,0.3)'}`,
          transition: 'border-color 0.2s',
          transform: isHovering ? 'scale(1.4)' : 'scale(1)',
        }} />

        {/* Scanline texture inside ring */}
        <div style={{
          position: 'absolute',
          inset: '4px',
          borderRadius: '50%',
          overflow: 'hidden',
          opacity: 0.15,
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.8) 1px,
              rgba(255,255,255,0.8) 2px
            )`,
            backgroundSize: '100% 3px',
          }} />
        </div>

        {/* RGB split — subtle glitch on hover */}
        {isHovering && (
          <>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255, 80, 0, 0.25)',
              transform: 'translate(2px, -1px) scale(1.1)',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(0, 200, 255, 0.2)',
              transform: 'translate(-2px, 1px) scale(1.05)',
            }} />
          </>
        )}

        {/* CRT dot — tiny center mark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '2px',
          height: '2px',
          borderRadius: '50%',
          background: isHovering ? 'var(--blue)' : 'rgba(255,255,255,0.5)',
          transition: 'background 0.2s',
        }} />
      </div>
    </>
  )
}