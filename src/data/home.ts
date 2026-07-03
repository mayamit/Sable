// Homepage copy (brief §6, twelve sections). Copy lives here, not in components.
// Approved copy bank used verbatim where noted.

export const hero = {
  eyebrow: 'Meet Sable',
  // Outcome-led. Never architecture words. (brief §2)
  headline: 'An AI that actually knows you.',
  subhead:
    'Sable resolves what your life and work mean — once — holds it privately, and reuses it across your apps. A packaged product, not a chatbot.',
  primary: { label: 'Get early access', href: '/waitlist' },
  secondary: { label: 'See how it works', href: '/how-it-works' },
  microcopy: 'Your data stays yours.',
};

export const problem = {
  // Approved copy bank — Problem headline.
  headline: 'A person is coherent. Their digital life is not.',
  body: [
    'You are one person. But your context is scattered across a dozen apps that don’t talk to each other — and every AI you use forgets you the moment the tab closes.',
    'So you re-explain yourself. Again. Who Jane is, what you owe, what you already decided last month. The tools change; the re-explaining never stops.',
  ],
  points: [
    'Context trapped in separate apps',
    'AI that forgets you every session',
    'The same facts, re-entered forever',
  ],
};

export const howItWorks = {
  // Approved copy bank — How-it-works headline + adapted subhead.
  headline: 'One foundation. Resolved once. Used everywhere.',
  subhead:
    'Sable resolves what your world means one time, holds it, and reuses it — instead of rebuilding it on every request.',
  steps: [
    {
      n: '01',
      key: 'resolve',
      title: 'Resolve',
      body: 'Sable reads across your apps and works out what things actually mean — the people, commitments, money, and documents in your life.',
      accent: 'blue',
    },
    {
      n: '02',
      key: 'hold',
      title: 'Hold',
      body: 'Resolved meaning lives in your Foundation: a private, per-user store with provenance and an audit trail on every fact.',
      accent: 'violet',
    },
    {
      n: '03',
      key: 'reuse',
      title: 'Reuse',
      body: 'Every lens draws on the same Foundation, so Sable answers and acts with full context — without you re-explaining a thing.',
      accent: 'teal',
    },
  ],
  cta: { label: 'How it works in depth', href: '/how-it-works' },
};

export const lenses = {
  headline: 'Two lenses at launch. Both know your whole life.',
  subhead:
    'Lenses are focused surfaces over your Foundation. More are coming — these two ship first.',
  items: [
    {
      name: 'Communications',
      accent: 'blue',
      tagline: 'Triage, and drafts in your voice.',
      body: 'The full communications surface plus a cold-start engine — Sable triages what matters and drafts replies that sound like you, grounded in what it already knows.',
      example: '“Draft a reply to Jane about the renewal.”',
    },
    {
      name: 'Reasoning',
      accent: 'violet',
      tagline: 'Answers over your life, not a blank page.',
      body: 'A generalist that reasons over your actual context — not the open internet. Ask about your commitments, money, and people, and get answers with source traces.',
      example: '“What do I owe Jane, and when is it due?”',
    },
  ],
  cta: { label: 'Explore the lenses', href: '/lenses' },
};

export const worksOverApps = {
  headline: 'Works over the apps you already use.',
  subhead:
    'Sable connects to your existing tools and leaves them as the system of record. Nothing gets migrated. Nothing gets locked in.',
  connectors: ['Email', 'Calendar', 'Contacts', 'Messaging', 'Documents', 'Notes'],
};

export const trust = {
  // Sell memory + trust together.
  headline: 'Trust, built into how it works.',
  subhead:
    'Sable is designed so that knowing you never means losing control of your data.',
  points: [
    {
      title: 'Human-gated writes',
      body: 'Navigator proposes actions and acts only after you approve. Nothing is sent or changed behind your back.',
      accent: 'green',
    },
    {
      title: 'Source traces',
      body: 'Every fact Sable holds shows where it came from. You can see exactly why it believes what it believes.',
      accent: 'blue',
    },
    {
      title: 'Full audit',
      body: 'A complete, reviewable record of what Sable knew, proposed, and did — always available to you.',
      accent: 'violet',
    },
    {
      title: 'You control your data',
      body: 'Export everything or delete everything, whenever you want. Your Foundation belongs to you.',
      accent: 'teal',
    },
  ],
  cta: { label: 'Read about privacy & trust', href: '/privacy' },
};

export const dataPlace = {
  headline: 'Your data, your place.',
  subhead: 'One price. Two ways to run Sable — you choose where your Foundation lives.',
  tiers: [
    {
      name: 'Cloud',
      body: 'Fully managed and ready in minutes. Your Foundation is private to you and encrypted — we run the infrastructure so you don’t have to.',
      points: ['Nothing to set up', 'Private, per-user store', 'Automatic updates'],
      accent: 'violet',
    },
    {
      name: 'Home Server',
      body: 'A local appliance in your home. Your data never leaves the house — the strongest privacy guarantee Sable offers.',
      points: ['Data never leaves home', 'You hold the keys', 'For privacy-maximalists'],
      accent: 'teal',
    },
  ],
  cta: { label: 'About the Home Server', href: '/home-server' },
};

export const credibility = {
  // Honest, pre-launch framing — no fake logos, no fabricated testimonials.
  headline: 'Built in the open, with early users.',
  subhead:
    'Sable is in early access, shaped hand-in-hand with a small group of design partners. Real names and stories will land here as the group grows — we won’t borrow logos we haven’t earned.',
  principles: [
    { label: 'Private by design', accent: 'teal' },
    { label: 'Human-gated actions', accent: 'green' },
    { label: 'No lock-in — export anytime', accent: 'blue' },
  ],
};

export const pricing = {
  headline: 'One price. Everything included.',
  subhead: 'No tiers of features to decode. Choose where Sable runs; the product is the same.',
  price: '$100',
  cadence: '/month',
  includes: [
    'Both V1 lenses — Communications & Reasoning',
    'Navigator with human-gated actions',
    'Your private Foundation with full audit',
    'Cloud or Home Server — your choice',
    'Export or delete everything, anytime',
  ],
  cta: { label: 'Get early access', href: '/waitlist' },
  note: 'Packaged like software, priced like infrastructure.',
};

export const faq = {
  headline: 'Questions, answered plainly.',
  items: [
    {
      q: 'Is this just another chatbot?',
      a: 'No. Sable is a packaged product, not a chat box. It holds a private, structured understanding of your life and acts through focused lenses — with your approval — rather than starting from a blank prompt every time.',
    },
    {
      q: 'What can Sable see?',
      a: 'Only the apps you connect, and only to resolve meaning for you. Every fact it holds carries a source trace, so you can always see what it knows and where each piece came from.',
    },
    {
      q: 'How is my data protected?',
      a: 'Writes are human-gated, every fact is auditable, and you can export or delete everything at any time. With the Home Server tier, your data never leaves your house at all.',
    },
    {
      q: 'What’s the difference between Cloud and Home Server?',
      a: 'Same product, same price. Cloud is fully managed and ready in minutes. Home Server is a local appliance where your Foundation physically stays in your home — the strongest privacy guarantee.',
    },
    {
      q: 'Can I export or delete everything?',
      a: 'Yes. Your Foundation belongs to you. Full export and full deletion are always available — no support ticket, no waiting.',
    },
  ],
};

export const finalCta = {
  headline: 'Stop re-explaining yourself to AI.',
  subhead: 'Sable remembers your whole life — privately, and on your terms.',
  primary: { label: 'Get early access', href: '/waitlist' },
  // Approved copy bank — trust tagline.
  tagline: 'Your data. Your context. Your decisions.',
};
