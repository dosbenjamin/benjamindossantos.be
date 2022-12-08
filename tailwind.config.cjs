const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/*.astro',
    'src/layouts/*.astro',
    'src/pages/*.astro'
  ],
  corePlugins: {
    transform: false,
    backdropFilter: false,
    filter: false,
    scrollSnapType: false,
    ringWidth: false,
    boxShadow: false,
    fontVariantNumeric: false,
    touchAction: false
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    colors: {
      'gray': {
        450: '#e8e8e8',
        900: '#2c2c2c'
      }
    },
    fontFamily: {
      'sans': ['Space Grotesk', 'sans-serif']
    },
    fontSize: {
      'sm': '0.75rem',
      'base': 'clamp(1.333rem, 3vw, 2.369rem)',
      'lg': '1.333rem',
      'xl': 'min(4rem, 10vw)'
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'html': {
          'font-size': theme('fontSize.base'),
          'height': 'stretch'
        }
      })
    })
  ]
}
