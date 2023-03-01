/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'steel': '#f4f4f4',
        'fire': '#FDDFDF',
        'grass': '#DEFDE0',
        'electric': '#FCF7DE',
        'water-ice': '#DEF3FD',
        'ground': '#f4e7da',
        'rock': '#d5d5d4',
        'fairy': '#fceaff',
        'poison': '#98d7a5',
        'bug': '#f8d5a3',
        'dragon': '#97b3e6',
        'psychic': '#eaeda1',
        'flying': '#F5F5F5',
        'fighting': '#E6E0D4',
        'normal': '#F5F5F5',
        'card-text': '#222'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}