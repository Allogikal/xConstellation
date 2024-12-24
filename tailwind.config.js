/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        'main-text': '#FFFFFF',
        'secondary-text': '#CEA950',
      },
      screens: {
        'xs': { 'min': '320px', 'max': '440px' },
      },
    },
  },
  plugins: [],
}