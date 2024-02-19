/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#2b5557',
        'primary-color-light' : '#3e747d' ,
        'secondary-color': '#3e747d',
        'text-color' : '#3e747d',
        'text-color-light' : '#3e747d',
      },
      screens: {
        'ssm': '440px',
      },
    },
  },
  plugins: [],
}
