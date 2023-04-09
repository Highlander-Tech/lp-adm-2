/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        title: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        texture: "url('/bg.webp')",
        bulbs: "url('/bulbs.webp')",
        calculator: "url('/calculator.webp')",
      },
    },
  },
  plugins: [],
}
