/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0F17',
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#D4A017',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        }
      },
      animation: {
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flash-gold': 'flashGold 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(212, 160, 23, 0.6)' },
          '50%': { boxShadow: '0 0 60px rgba(212, 160, 23, 0.95)' },
        },
        flashGold: {
          '0%, 100%': { backgroundColor: 'rgba(212, 160, 23, 0.1)', borderColor: 'rgba(212, 160, 23, 0.5)' },
          '50%': { backgroundColor: 'rgba(212, 160, 23, 0.35)', borderColor: '#FACC15' },
        }
      }
    },
  },
  plugins: [],
}
