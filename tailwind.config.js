/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, calming color palette inspired by the image
        primary: {
          50: '#fef7f3',
          100: '#fdeee6',
          200: '#fbd5c2',
          300: '#f8bc9e',
          400: '#f2a380',
          500: '#e8895e', // Main warm peach
          600: '#d4714a',
          700: '#b85a36',
          800: '#9c4829',
          900: '#823c20',
        },
        secondary: {
          50: '#f8f9f8',
          100: '#f1f3f1',
          200: '#e3e7e3',
          300: '#d2d8d2',
          400: '#b8c2b8',
          500: '#9ca89c', // Sage green
          600: '#7e8a7e',
          700: '#646d64',
          800: '#4f564f',
          900: '#3f443f',
        },
        accent: {
          50: '#fef9f2',
          100: '#fdf2e5',
          200: '#fae5cb',
          300: '#f6d3a7',
          400: '#f0bb7f',
          500: '#e89d54', // Warm gold
          600: '#d07f3c',
          700: '#b56330',
          800: '#944e28',
          900: '#7a4022',
        },
        // Neutral tones
        cream: {
          50: '#fffdf9',
          100: '#fffbf0',
          200: '#fef6e0',
          300: '#fdefc7',
          400: '#fce5a3',
          500: '#fad975',
          600: '#f7cc47',
          700: '#f0b926',
          800: '#e6a318',
          900: '#d18916',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e8ece8',
          200: '#d1d9d1',
          300: '#aeb9ae',
          400: '#849184',
          500: '#6b7a6b', // Main sage
          600: '#566256',
          700: '#485048',
          800: '#3d433d',
          900: '#343834',
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f8f9f8\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
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
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}