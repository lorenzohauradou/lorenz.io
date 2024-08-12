/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Aggiungi un breakpoint per larghezze più piccole
      },
    },
  },
  plugins: [],
};