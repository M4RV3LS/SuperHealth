/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['./index.html'],
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
    require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs")
],
  daisyui: {
    themes: ["light"]
  }
}

