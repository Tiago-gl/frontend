/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      width: {
        'fill': '-webkit-fill-available',
      },
      height: {
        'fill': '-webkit-fill-available',
      },
    },
  },
}