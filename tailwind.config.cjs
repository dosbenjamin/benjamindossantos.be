/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['src/**/*.astro'],
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
      'base': '40px',
      'lg': '1.333rem'
    }
  }
}
