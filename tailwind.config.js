/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f9ebe5',
          200: '#f5d5ca',
          300: '#edb4a1',
          400: '#e58c71',
          500: '#dc6d4c',
          600: '#c44e2e',
          700: '#a33b24',
          800: '#863324',
          900: '#702e22',
        },
        secondary: {
          50: '#f5f7f6',
          100: '#e0e7e4',
          200: '#c1cfc8',
          300: '#9bb0a5',
          400: '#738c80',
          500: '#587267',
          600: '#465b52',
          700: '#3b4c44',
          800: '#333f39',
          900: '#2d3632',
        },
        accent: {
          50: '#fef8f0',
          100: '#fcecd6',
          200: '#f8d5ad',
          300: '#f3b777',
          400: '#ed9443',
          500: '#e67422',
          600: '#d15818',
          700: '#ad4116',
          800: '#8c3518',
          900: '#722e17',
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}