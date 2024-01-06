/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    colors: {
      accent: "#FFEB00",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      purple: {
        50: '#F9F5FF',
        100: '#F4EBFF',
        200: '#E9D7FE',
        300: '#D6BBFB',
        400: '#B692F6',
        500: '#9E77ED',
        600: '#7F56D9',
        700: '#6941C6',
        800: '#53389E',
        900: '#42307D'
      },
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      gray: colors.gray,
      orange:colors.orange,
      contrast: {
        3: 'rgba(9,14,35,0.03)',
        5: 'rgba(9,14,35,0.05)',
        8: 'rgba(9,14,35,0.08)',
        10: 'rgba(9,14,35,0.1)',
        15: 'rgba(9,14,35,0.15)',
        20: 'rgba(9,14,35,0.2)',
        50: 'rgba(9,14,35,0.5)'
      },
    },
    extend: {
      transitionProperty: {
        width: "width"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

