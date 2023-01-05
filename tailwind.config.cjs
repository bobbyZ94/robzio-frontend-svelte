/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
