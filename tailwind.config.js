const colors = require('tailwindcss/colors')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',

  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem'
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px'
      }
    },
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        blueGray: colors.blueGray,
        warmGray: colors.warmGray
      }
    }
  },

  variants: {},

  plugins: []
}
