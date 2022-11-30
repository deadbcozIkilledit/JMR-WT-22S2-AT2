/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(13, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGrey: 'hsl(0, 0%, 98%)',
        regEarthWorm: '#c96d6c',
        paleEarthWorm: '#d89796',
        albinoEarthWorm: '#f0d8d8',
        burntEarthWorm: '#531f1e',
        lightEarthWorm: '#893331',
        darkEarthWorm: '#0b0404',

      }
    },
  },
}
