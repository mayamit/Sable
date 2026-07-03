// Site-wide copy + structure. Never hard-code these in components.

export const site = {
  name: 'Sable',
  legalName: 'Sable, by PSL',
  tagline: 'An AI that actually knows you.',
  description:
    'Sable is an AI that actually knows you — it resolves what your life and work mean once, holds it privately, and reuses it across your apps. A packaged product, not a chatbot.',
  trustTagline: 'Your data. Your context. Your decisions.',
};

// Primary nav (brief §6, row 1)
export const nav: { label: string; href: string }[] = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Lenses', href: '/lenses' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Home Server', href: '/home-server' },
  { label: 'Pricing', href: '/pricing' },
];

export const cta = {
  primary: { label: 'Get early access', href: '/waitlist' },
  login: { label: 'Log in', href: '/waitlist' },
};

// Four-column footer doubling as sitemap (brief §5)
export const footer: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Lenses', href: '/lenses' },
      { label: 'Home Server', href: '/home-server' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Vision', href: '/vision' },
      { label: 'Privacy & Trust', href: '/privacy' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Get early access', href: '/waitlist' },
      { label: 'How it works', href: '/how-it-works' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms', href: '/legal/terms' },
    ],
  },
];
