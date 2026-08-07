import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';
import { loadEnv } from 'vite';

import { seoPaths } from './src/shared/seo';

const defaultEnvironmentMode = 'development';
const environmentMode = process.env.NODE_ENV ?? defaultEnvironmentMode;
const { SITE_URL } = loadEnv(environmentMode, process.cwd(), '');

export default defineConfig({
  env: {
    schema: {
      SITE_URL: envField.string({
        access: 'public',
        context: 'server',
        startsWith: 'https://',
        url: true,
      }),
    },
  },
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
  site: SITE_URL,
});
