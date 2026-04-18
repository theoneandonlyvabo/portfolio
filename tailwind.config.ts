import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        deep: '#050508',
        surface: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
        },
        cyan: {
          DEFAULT: '#00d9ff',
          dim: 'rgba(0, 217, 255, 0.2)',
        },
        magenta: {
          DEFAULT: '#ff006e',
          dim: 'rgba(255, 0, 110, 0.2)',
        },
        lime: {
          DEFAULT: '#39ff14',
          dim: 'rgba(57, 255, 20, 0.2)',
        },
        gray: {
          DEFAULT: '#888899',
          dim: '#333344',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        flicker: 'flicker 4s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.7' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.2)' },
          '50%': { boxShadow: '0 0 25px #00d9ff, 0 0 50px rgba(0, 217, 255, 0.2)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'grid-cyan': `linear-gradient(rgba(0,217,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.05) 1px, transparent 1px)`,
        'grid-magenta': `linear-gradient(rgba(255,0,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,110,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config