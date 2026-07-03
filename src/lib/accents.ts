// Full, literal class strings per accent so Tailwind's scanner keeps them.
// Never build these dynamically (e.g. `text-c-${x}`) — the scanner won't see it.
export type Accent = 'blue' | 'green' | 'teal' | 'amber' | 'violet' | 'rose';

export const accent: Record<
  Accent,
  { text: string; bg: string; softBg: string; border: string }
> = {
  blue: { text: 'text-c-blue', bg: 'bg-c-blue', softBg: 'bg-c-blue/10', border: 'border-c-blue/30' },
  green: { text: 'text-c-green', bg: 'bg-c-green', softBg: 'bg-c-green/10', border: 'border-c-green/30' },
  teal: { text: 'text-c-teal', bg: 'bg-c-teal', softBg: 'bg-c-teal/10', border: 'border-c-teal/30' },
  amber: { text: 'text-c-amber', bg: 'bg-c-amber', softBg: 'bg-c-amber/10', border: 'border-c-amber/30' },
  violet: { text: 'text-c-violet', bg: 'bg-c-violet', softBg: 'bg-c-violet/10', border: 'border-c-violet/30' },
  rose: { text: 'text-c-rose', bg: 'bg-c-rose', softBg: 'bg-c-rose/10', border: 'border-c-rose/30' },
};
