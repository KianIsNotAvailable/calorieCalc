/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  
  theme: {
    fontFamily: {
      sans: ['Poppins Regular', 'sans'],
      
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
}

