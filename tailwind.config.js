/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'navy': '#304566',
      'dark-navy' : '#182333',
      'light-blue': '#e1e4e9',
      'white': '#ffffff',
      'coral': '#fd768c',
      'red' : '#ff0000',
      'orange' : '#b97551',
      'light-pink' : '#ffe4e8',
    },
    extend: {},
  },
  plugins: [],
}
