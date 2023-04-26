/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ['secondary-1']: '#FFFCF9',
        ['primary-1']: '#202054',
        ['secondary-2']: '#141a29',
        primary: '#111',
        secondary: '#f0b73f',
        supplementary: '#faf5ee',
        grey: {
          10: '#ebebeb',
          20: '#636a7d',
          30: '#bdbdbd',
          40: '#141a29',
          50: '#3f3f3f'
        }
      
      }
    },
  },
  plugins: [],
}
