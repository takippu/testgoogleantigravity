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
          950: '#0b0d17', // Deep space blue/black
          900: '#15192b',
          800: '#222842',
          accent: '#3b82f6', // Bright blue star
          highlight: '#60a5fa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('/stars-bg.jpg')",
      }
    },
  },
  plugins: [],
}
