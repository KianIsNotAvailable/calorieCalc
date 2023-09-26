/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Poppins Regular', 'sans'],
      
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
}

