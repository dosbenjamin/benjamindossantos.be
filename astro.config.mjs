import sitemap from '@astrojs/sitemap'

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  site: 'https://benjamindossantos.be',
  integrations: [sitemap()]
})
