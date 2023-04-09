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
        texture: "url('./src/img/bg.webp')",
        bulbs: "url('./src/img/bulbs.webp')",
        calculator: "url('./src/img/calculator.webp')",
      },
    },
  },
  plugins: [],
}
