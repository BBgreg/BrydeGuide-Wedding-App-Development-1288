/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f8f5',
          100: '#eef1ea',
          200: '#dde3d5',
          300: '#c4ceb7',
          400: '#9caf88',
          500: '#8ba070',
          600: '#7a8f5f',
          700: '#677650',
          800: '#536044',
          900: '#445139',
        },
        rose: {
          50: '#fdf2f3',
          100: '#fce7e8',
          200: '#f9d2d4',
          300: '#f4b0b4',
          400: '#e8b4b8',
          500: '#e09398',
          600: '#d1757b',
          700: '#b85960',
          800: '#9a4a52',
          900: '#824248',
        },
        cream: {
          50: '#faf9f6',
          100: '#f5f3ed',
          200: '#ebe6d9',
          300: '#ddd5c2',
          400: '#ccc0a5',
          500: '#bca889',
          600: '#a89570',
          700: '#8c7a5d',
          800: '#73644e',
          900: '#5e5342',
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}