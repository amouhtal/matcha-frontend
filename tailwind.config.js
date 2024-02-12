/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#FF676E',
        'primary-color-light' : '#FBC5C8' ,
        'secondary-color': '#F9FAFF',
        'text-color' : '#7D6C62',
        'text-color-light' : '#C3A8A9',
      },
    },
  },
  plugins: [],
}
