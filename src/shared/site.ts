export const siteUrl = 'https://benjamindossantos.be/';
const plausibleOrigin = 'https://plausible.benjamindossantos.be';

export const plausibleAnalytics = {
  domain: new URL(siteUrl).hostname,
  origin: plausibleOrigin,
  scriptURL: new URL('/js/script.outbound-links.js', plausibleOrigin).href,
} as const;

export const siteIdentity = {
  country: 'Belgium',
  email: 'hello@benjamindossantos.be',
  name: 'Benjamin Dos Santos',
  role: 'Full-Stack Engineer',
  socialProfiles: {
    github: 'https://github.com/dosbenjamin',
    linkedIn: 'https://www.linkedin.com/in/benjamin-dos-santos/',
  },
  url: siteUrl,
} as const;
