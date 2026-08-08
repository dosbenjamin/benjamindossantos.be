import { siteIdentity } from '../../../shared/site';
import type { PortfolioSection } from '../types';

export const contact = {
  availability: 'Available for selected freelance projects',
  email: siteIdentity.email,
  githubUrl: siteIdentity.socialProfiles.github,
  linkedInUrl: siteIdentity.socialProfiles.linkedIn,
  location: 'Belgium / Remote',
  name: siteIdentity.name,
  phoneDisplay: '+32 478 68 69 02',
  phoneUrl: 'tel:+32478686902',
  role: siteIdentity.role,
} as const;

export const introduction = {
  description:
    "I design, build and deploy modern web applications with a focus on performance, maintainability and scalability. Throughout my career in both full-time and freelance roles, I've contributed to SaaS platforms, business applications, e-commerce solutions, headless CMS architectures and cloud infrastructure.",
  title:
    'Building modern web applications, SaaS products and e-commerce solutions.',
} as const;

export const portfolioSections: readonly PortfolioSection[] = [
  {
    entries: [
      {
        description:
          'Delivering end-to-end web applications, from discovery to production, with a focus on performance, maintainability, scalability, integrations and automation.',
        meta: 'Independent freelance · 2024–Now',
        title: 'Full-Stack Engineer',
      },
      {
        description:
          'Freelance work with Sanserif: custom websites and e-commerce solutions, from headless CMS integration to front-end development. Contributed to infrastructure, deployment and technical improvements across multiple client projects.',
        meta: 'Freelance · 2021–Now',
        organization: {
          href: 'https://sanserif.be/',
          name: 'Sanserif',
        },
        title: 'Full-Stack Developer',
      },
      {
        description:
          'Contributed to the development of a PropTech SaaS platform, collaborating with backend developers to build user interfaces, integrate APIs, and deliver new features in an agile environment.',
        meta: 'Full-time · 2022–2024',
        organization: {
          href: 'https://certinergie.be/',
          name: 'Certinergie',
        },
        title: 'Front-End Developer',
      },
      {
        description:
          'Contributed to the development of creative websites and e-commerce solutions, including personalized email campaigns and long-term website maintenance focused on performance and reliability.',
        meta: 'Full-time · 2020–2022',
        organization: {
          href: 'https://mcarnolds.be/',
          name: 'McArnolds',
        },
        title: 'Front-End Developer',
      },
    ],
    id: 'experience',
    title: 'Experience',
  },
  {
    entries: [
      {
        description:
          'Privacy-first wealth tracking platform for managing investments, assets and net worth.',
        href: 'https://getwealthflow.app',
        meta: 'SaaS',
        title: 'Wealthflow',
      },
      {
        description: 'International wedding and event planning agency.',
        href: 'https://amamolto.be/en',
        meta: 'Client site',
        title: 'Ama Molto',
      },
      {
        description:
          'Corporate website for a company specializing in drone logistics.',
        href: 'https://adlc.eu/',
        meta: 'Client site',
        title: 'ADLC',
      },
    ],
    id: 'selected-projects',
    title: 'Selected Projects',
  },
] as const;

export const footerNote = 'Case details available on request.';
