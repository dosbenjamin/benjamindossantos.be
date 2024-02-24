import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { buildSync } from 'esbuild';
import { join } from 'path';

export default defineConfig({
  compressHTML: true,
  integrations: [
    sitemap(),
    tailwind(),
    {
      hooks: {
        'astro:build:done': ({ dir }) => {
          const workingDirectory = process.cwd();

          buildSync({
            bundle: true,
            entryPoints: [join(workingDirectory, 'src/scripts/service-worker.ts')],
            minify: true,
            outfile: join(dir.pathname, 'service-worker.js'),
          });
        },
      },
      name: 'SW',
    },
  ],
  site: 'https://benjamindossantos.be',
});
