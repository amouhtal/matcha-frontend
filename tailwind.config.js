/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#2B5557',
        'primary-color-light' : '#3E747D' ,
        'secondary-color': '#E1EAE9',
        'text-color' : '#C2CBD7',
        'text-color-light' : '#000000',
      },
    },
  },
  plugins: [],
}
