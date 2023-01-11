/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ],
}
