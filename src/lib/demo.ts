// Derivation helpers for the /demo route. Pure logic — no copy lives here.
// All strings come from src/data/demo.ts (per Website/CLAUDE.md).
import {
  people,
  emails,
  commitments,
  money,
  documents,
  type Person,
  type Email,
  type Commitment,
  type MoneyItem,
  type Doc,
} from '../data/demo';
import type { Accent } from './accents';

export const personById: Record<string, Person> = Object.fromEntries(people.map((p) => [p.id, p]));
export const emailById: Record<string, Email> = Object.fromEntries(emails.map((e) => [e.id, e]));
export const commitmentById: Record<string, Commitment> = Object.fromEntries(commitments.map((c) => [c.id, c]));
export const moneyById: Record<string, MoneyItem> = Object.fromEntries(money.map((m) => [m.id, m]));
export const docById: Record<string, Doc> = Object.fromEntries(documents.map((d) => [d.id, d]));

/** A person's accent, safely defaulting to violet (the PSL/i primary hue family). */
export function personAccent(personId: string): Accent {
  return (personById[personId]?.accent as Accent) ?? 'violet';
}

/** "Glenn Rivera — 'Re: Model' · Tue" — the canonical provenance label for an email. */
export function emailProvenance(emailId: string): string {
  const e = emailById[emailId];
  if (!e) return 'Unknown source';
  const p = personById[e.from];
  return `${p?.name ?? e.from} — “${e.subject}” · ${e.date}`;
}

// Status + direction display metadata (label + accent), kept out of components.
export const statusMeta: Record<Commitment['status'], { label: string; accent: Accent }> = {
  overdue: { label: 'Overdue', accent: 'rose' },
  'at-risk': { label: 'At risk', accent: 'amber' },
  'on-track': { label: 'On track', accent: 'green' },
  done: { label: 'Done', accent: 'green' },
};

export const moneyMeta: Record<MoneyItem['direction'], { label: string; accent: Accent }> = {
  owe: { label: 'You owe', accent: 'amber' },
  incoming: { label: 'Incoming', accent: 'green' },
  'spend-alert': { label: 'Spend alert', accent: 'rose' },
};

/** Everything the Foundation resolved out of a single email — the semantic-layer payoff. */
export function resolvedFrom(emailId: string): {
  commitments: Commitment[];
  money: MoneyItem[];
  documents: Doc[];
} {
  return {
    commitments: commitments.filter((c) => c.sourceEmailId === emailId),
    money: money.filter((m) => m.sourceEmailId === emailId),
    documents: documents.filter((d) => d.sourceEmailId === emailId),
  };
}
