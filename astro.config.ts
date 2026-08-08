import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import { seoPaths } from './src/shared/seo';
import { siteUrl } from './src/shared/site';

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
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== seoPaths.robots,
    }),
  ],
  site: siteUrl,
});
