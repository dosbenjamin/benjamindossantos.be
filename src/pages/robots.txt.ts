import type { APIRoute } from 'astro';

import { seoPaths } from '../shared/seo';
import { siteUrl } from '../shared/site';

const getRobotsTxt = (sitemapUrl: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

export const GET: APIRoute = () => {
  const sitemapUrl = new URL(seoPaths.sitemap, siteUrl);

  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
