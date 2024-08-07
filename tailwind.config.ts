import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import type { KeyValuePair } from 'tailwindcss/types/config';

export default {
  content: ['src/**/*.astro'],
  corePlugins: {
    transform: false,
    backdropFilter: false,
    filter: false,
    scrollSnapType: false,
    ringWidth: false,
    boxShadow: false,
    fontVariantNumeric: false,
    touchAction: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      gray: {
        450: '#e8e8e8',
        900: '#2c2c2c',
      },
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    fontSize: {
      sm: '0.75rem',
      base: 'clamp(1.44rem, 3vw, 2.488rem)',
      lg: '1.44rem',
      xl: 'min(4rem, 10vw)',
    },
    textRendering: {
      legibility: 'optimizeLegibility',
    },
    extend: {
      maxWidth: {
        48: '12rem',
      },
    },
  },
  plugins: [
    plugin(({ addBase, matchUtilities, theme }) => {
      addBase({
        html: {
          'font-size': theme('fontSize.base'),
          height: 'stretch',
        },
      });

      matchUtilities(
        {
          rendering: (value: string) => ({
            'text-rendering': value,
          }),
        },
        {
          values: theme<KeyValuePair<string, string>>('textRendering'),
        },
      );
    }),
  ],
} satisfies Config;
