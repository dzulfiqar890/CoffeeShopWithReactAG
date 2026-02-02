/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#3e2723',
          800: '#4e342e',
          700: '#5d4037',
          600: '#6d4c41',
          500: '#795548',
          100: '#d7ccc8',
          50: '#efebe9',
        },
        coffee: {
          dark: '#2c1a16',
          light: '#d4a373',
          accent: '#b08968',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
