/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
            colors: {
        primary: colors.red,
        gray: colors.neutral,
      }
    },
  },
  plugins: [],
};
