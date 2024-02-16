/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#3e747d',
        'primary-color-light' : '#3e747d' ,
        'secondary-color': '#3e747d',
        'text-color' : '#3e747d',
        'text-color-light' : '#3e747d',
      },
    },
  },
  plugins: [],
}
