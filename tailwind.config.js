/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['./index.html'],
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js","./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs"),darkMode: "class"
],
}

