import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-schibsted-grotesk-source',
      fallbacks: ['Arial', 'sans-serif'],
      name: 'Schibsted Grotesk',
      provider: fontProviders.fontsource(),
      styles: ['normal'],
      weights: ['400 900'],
    },
  ],
});
