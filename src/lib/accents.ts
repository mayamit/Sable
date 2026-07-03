// Full, literal class strings per accent so Tailwind's scanner keeps them.
// Never build these dynamically (e.g. `text-c-${x}`) — the scanner won't see it.
export type Accent = 'blue' | 'green' | 'teal' | 'amber' | 'violet' | 'rose';

// `text` uses the darker -700 shade (AA-compliant on light backgrounds);
// `bg`/`softBg`/`border` keep the vivid hue for dots, fills, and outlines.
export const accent: Record<
  Accent,
  { text: string; bg: string; softBg: string; border: string }
> = {
  blue: { text: 'text-c-blue-700', bg: 'bg-c-blue', softBg: 'bg-c-blue/10', border: 'border-c-blue/30' },
  green: { text: 'text-c-green-700', bg: 'bg-c-green', softBg: 'bg-c-green/10', border: 'border-c-green/30' },
  teal: { text: 'text-c-teal-700', bg: 'bg-c-teal', softBg: 'bg-c-teal/10', border: 'border-c-teal/30' },
  amber: { text: 'text-c-amber-700', bg: 'bg-c-amber', softBg: 'bg-c-amber/10', border: 'border-c-amber/30' },
  violet: { text: 'text-c-violet-700', bg: 'bg-c-violet', softBg: 'bg-c-violet/10', border: 'border-c-violet/30' },
  rose: { text: 'text-c-rose-700', bg: 'bg-c-rose', softBg: 'bg-c-rose/10', border: 'border-c-rose/30' },
};
