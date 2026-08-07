import type { APIRoute } from 'astro';
import { SITE_URL } from 'astro:env/server';

import { seoPaths } from '../shared/seo';

const getRobotsTxt = (sitemapUrl: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

export const GET: APIRoute = () => {
  const sitemapUrl = new URL(seoPaths.sitemap, SITE_URL);

  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
