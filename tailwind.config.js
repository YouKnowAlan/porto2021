const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js, ts, jsx, tsx}',
    './src/components/**/*.{js, ts, jsx, tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Source Sans Pro', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    color: {
      primary: '#091A7A',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      blue: colors.blue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
