import { siteIdentity } from './site';

export type RobotsDirective = 'index,follow' | 'noindex,follow';

export type PersonStructuredData = {
  '@context': 'https://schema.org';
  '@type': 'Person';
  address: {
    '@type': 'PostalAddress';
    addressCountry: string;
  };
  email: string;
  jobTitle: string;
  knowsAbout: readonly string[];
  name: string;
  sameAs: readonly string[];
  url: string;
};

export const siteMetadata = {
  author: siteIdentity.name,
  language: 'en',
  locale: 'en_BE',
  openGraphImageAlt: `${siteIdentity.name}, ${siteIdentity.role}`,
  openGraphImageHeight: '630',
  openGraphImageType: 'image/png',
  openGraphImageWidth: '1200',
  siteName: siteIdentity.name,
} as const;

export const seoPaths = {
  appleTouchIcon: '/apple-touch-icon.png',
  openGraphImage: '/opengraph.png',
  robots: '/robots.txt',
  sitemap: '/sitemap-index.xml',
} as const;

export const homeSeo = {
  description: `${siteIdentity.role} based in ${siteIdentity.country}. Building modern web applications, SaaS products and e-commerce solutions with a focus on performance, maintainability and scalability.`,
  socialDescription:
    'Building modern web applications, SaaS products and e-commerce solutions.',
  title: `${siteIdentity.name} — ${siteIdentity.role}`,
} as const;

export const personStructuredData: PersonStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  address: {
    '@type': 'PostalAddress',
    addressCountry: siteIdentity.country,
  },
  email: `mailto:${siteIdentity.email}`,
  jobTitle: siteIdentity.role,
  knowsAbout: [
    'Software Engineering',
    'Full-Stack Development',
    'Web Applications',
    'SaaS',
    'E-commerce',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Laravel',
    'Cloudflare',
    'Docker',
    'PostgreSQL',
    'Shopify',
    'Payload CMS',
  ],
  name: siteIdentity.name,
  sameAs: [
    siteIdentity.socialProfiles.github,
    siteIdentity.socialProfiles.linkedIn,
  ],
  url: siteIdentity.url,
};
