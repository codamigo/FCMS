/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}