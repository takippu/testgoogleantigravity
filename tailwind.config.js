/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#000000', // Pure Black
          900: '#0a0a0a', // Almost Black
          800: '#262626', // Dark Gray
          700: '#404040', // Medium Gray
          accent: '#ffffff', // White
          highlight: '#ffffff', // White
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "none", // Removed colorful bg
      }
    },
  },
  plugins: [],
}
