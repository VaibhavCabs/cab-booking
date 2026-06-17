/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        basalt: {
          DEFAULT: '#1B1815',
          light: '#262220',
          dark: '#100E0C',
        },
        sandstone: {
          DEFAULT: '#F2E8D5',
          dim: '#E7D9BC',
        },
        terracotta: {
          DEFAULT: '#C1592F',
          light: '#D97A4F',
          dark: '#9E4423',
        },
        teal: {
          DEFAULT: '#3F6F64',
          light: '#588C7F',
          dark: '#2D5048',
        },
        gold: {
          DEFAULT: '#C99A44',
          light: '#DCB970',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '100%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
        dash: 'dash 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
