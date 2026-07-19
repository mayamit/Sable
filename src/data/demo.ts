// ============================================================================
// PSL/i — Interactive Demo data pack
// ----------------------------------------------------------------------------
// Fully synthetic. No real people, no PII. Powers the client-side /demo route.
// Persona: Maya Chen, solo founder & CEO of "Northwind" (seed-stage B2B SaaS).
// Everything here is scripted content — there are NO live model calls.
// Copy lives here, not in components (per Website/CLAUDE.md).
// ============================================================================

export const persona = {
  name: "Maya Chen",
  firstName: "Maya",
  role: "Founder & CEO",
  company: "Northwind",
  companyBlurb: "Seed-stage B2B SaaS — workflow automation for logistics teams.",
  tagline: "You didn't set this up. PSL/i already understands your week.",
  today: "Thursday, July 16", // demo "today" — keep commitment dates consistent with this
};

export const disclaimer = "Sample data — your PSL/i stays private to you.";

export const tiers = {
  options: ["Cloud", "Home Server"] as const,
  default: "Cloud" as const,
  homeServerTooltip: "Home Server: a local appliance in your home. Your data never leaves the house.",
};

// ---------------------------------------------------------------------------
// PEOPLE — the resolved relationships in Maya's Foundation
// ---------------------------------------------------------------------------
export type Person = {
  id: string;
  name: string;
  role: string;
  relationship: string;
  accent: string; // token accent key: blue | green | teal | amber | violet | rose
  initials: string;
};

export const people: Person[] = [
  { id: "glenn",  name: "Glenn Rivera",  role: "Partner, Meridian Ventures", relationship: "Lead investor (Seed)",        accent: "violet", initials: "GR" },
  { id: "jane",   name: "Jane Okafor",   role: "Co-founder & CTO, Northwind", relationship: "Co-founder",                  accent: "teal",   initials: "JO" },
  { id: "priya",  name: "Priya Nair",    role: "Head of Sales, Northwind",    relationship: "Direct report",              accent: "blue",   initials: "PN" },
  { id: "david",  name: "David Stern",   role: "Partner, Stern & Cole LLP",   relationship: "Outside counsel",            accent: "amber",  initials: "DS" },
  { id: "tomás",  name: "Tomás Herrera", role: "VP Ops, Cascade Freight",     relationship: "Customer (West Region deal)",accent: "green",  initials: "TH" },
  { id: "renu",   name: "Renu Kapoor",   role: "Founder, Studio Kapoor",      relationship: "Design vendor",              accent: "rose",   initials: "RK" },
  { id: "aws",    name: "AWS Billing",   role: "Automated",                   relationship: "Vendor (infrastructure)",    accent: "amber",  initials: "AW" },
  { id: "sam",    name: "Sam Delgado",   role: "Renewals, Cascade Freight",   relationship: "Customer contact",           accent: "green",  initials: "SD" },
];

// ---------------------------------------------------------------------------
// EMAILS — the synthetic inbox every fact was "resolved" from (provenance)
// ---------------------------------------------------------------------------
export type Email = {
  id: string;
  from: string;   // person id
  subject: string;
  date: string;   // human label
  snippet: string;
  body: string;   // shown when a provenance chip is expanded
};

export const emails: Email[] = [
  {
    id: "e1", from: "glenn", subject: "Re: Updated model before the partner meeting", date: "Tue",
    snippet: "Can you get me the revised financial model by Friday? Partners review Monday AM.",
    body: "Maya —\n\nGreat catching up. Before I take this to the full partnership Monday morning, can you send me the revised financial model with the new West Region assumptions baked in? Friday would be ideal so I have the weekend with it.\n\nAlso — are you free Thursday for a quick call to pre-align?\n\nGlenn",
  },
  {
    id: "e2", from: "david", subject: "Cascade MSA — redline attached", date: "Mon",
    snippet: "Turned the MSA redline. Two open points on liability + data. Need your call by Thu.",
    body: "Maya,\n\nRedline of the Cascade Freight MSA attached. Two items need your decision before I send back:\n\n1. Liability cap — they want 12 months of fees; we proposed 6.\n2. Data processing addendum — they've asked for EU SCCs even though this is US-only.\n\nI'd like to return it to their counsel by end of Thursday. Can you weigh in?\n\nDavid",
  },
  {
    id: "e3", from: "tomás", subject: "West Region rollout — timing", date: "Wed",
    snippet: "Leadership approved budget. We want to go live across 4 depots in Q3. Next step?",
    body: "Hi Maya,\n\nGood news — leadership approved the budget for the West Region rollout. We're looking at 4 depots (Reno, Fresno, Boise, Spokane) going live in Q3.\n\nWhat's the next step to get moving? Priya mentioned a technical onboarding call — happy to get that scheduled.\n\nBest,\nTomás",
  },
  {
    id: "e4", from: "priya", subject: "West Region prospect intro?", date: "Wed",
    snippet: "You said you'd intro me to Tomás's counterpart at the Fresno depot. Still good?",
    body: "Maya — following up. You mentioned you'd introduce me to the ops lead at the Fresno depot so I can start scoping the rollout. Whenever you have a sec. Thanks! — Priya",
  },
  {
    id: "e5", from: "renu", subject: "Invoice #2214 — brand refresh", date: "Mon",
    snippet: "Invoice for the brand refresh attached — $4,200, net-15. Thanks so much!",
    body: "Hi Maya,\n\nHope you love the new look! Invoice #2214 attached for the brand refresh — $4,200, net-15 (due July 21). Let me know if you need anything else.\n\nRenu",
  },
  {
    id: "e6", from: "aws", subject: "Your AWS bill is ready — July", date: "Tue",
    snippet: "Your July estimate is $18,940, up 38% from June ($13,730).",
    body: "Your AWS account estimate for July is $18,940.00, up 38% from June ($13,730.00). Largest increases: EC2 (+$3,100), data transfer (+$1,400). View the cost breakdown in the console.",
  },
  {
    id: "e7", from: "sam", subject: "Cascade renewal — heads up", date: "Thu (last week)",
    snippet: "Your annual renewal ($60k) is up Aug 30. Want to lock in before budget cycle.",
    body: "Hi Maya,\n\nQuick heads up — your Cascade Freight annual renewal ($60,000) comes up August 30. We'd love to renew and ideally expand with the West Region depots. Can we get a renewal conversation on the calendar in the next couple weeks?\n\nSam",
  },
  {
    id: "e8", from: "jane", subject: "Reimbursement — offsite", date: "Fri (last week)",
    snippet: "Covered the team offsite dinner + the Figma annual. $1,180 total. No rush.",
    body: "Hey — I fronted a couple things: team offsite dinner ($740) and our Figma annual seat renewal ($440). $1,180 total. No rush at all, just flagging so it doesn't get lost. — J",
  },
  {
    id: "e9", from: "glenn", subject: "Intro: growth advisor", date: "Fri (last week)",
    snippet: "Want me to intro you to a growth advisor who's helped two of our portfolio cos?",
    body: "Maya — would it be useful to connect with Dana, a growth advisor who's worked with two of our portfolio companies on early GTM? Happy to make the intro if helpful. — Glenn",
  },
  {
    id: "e10", from: "tomás", subject: "Security questionnaire", date: "Tue",
    snippet: "Procurement needs our standard security questionnaire back before signature.",
    body: "Maya — one procurement hurdle: they need your standard security questionnaire completed before we can countersign. I've attached their template. How soon can your team turn it around? — Tomás",
  },
  {
    id: "e11", from: "priya", subject: "Pipeline review moved", date: "Wed",
    snippet: "Moved our weekly pipeline review to Fri 10am — works better for the team.",
    body: "Heads up, I moved our weekly pipeline review to Friday 10am so the whole team can make it. Calendar updated. — Priya",
  },
  {
    id: "e12", from: "david", subject: "Term sheet — signed copy", date: "Thu (2 wks ago)",
    snippet: "Fully-executed seed term sheet attached for your records.",
    body: "Maya — attached is the fully-executed seed term sheet for your records. Congratulations again. Let me know when you want to kick off the financing docs. — David",
  },
];

// ---------------------------------------------------------------------------
// COMMITMENTS — things Maya promised (Foundation-resolved from emails)
// ---------------------------------------------------------------------------
export type Commitment = {
  id: string;
  text: string;
  due: string;
  status: "overdue" | "at-risk" | "on-track" | "done";
  personId: string;
  sourceEmailId: string;
};

export const commitments: Commitment[] = [
  { id: "c1", text: "Send Glenn the revised financial model (West Region assumptions)", due: "Fri Jul 17", status: "at-risk",  personId: "glenn", sourceEmailId: "e1" },
  { id: "c2", text: "Decide MSA redline points (liability cap + data addendum) for David", due: "Thu Jul 16", status: "at-risk",  personId: "david", sourceEmailId: "e2" },
  { id: "c3", text: "Intro Priya to the Fresno depot ops lead", due: "Wed Jul 15", status: "overdue", personId: "priya", sourceEmailId: "e4" },
  { id: "c4", text: "Return Cascade security questionnaire", due: "Tue Jul 21", status: "on-track", personId: "tomás", sourceEmailId: "e10" },
  { id: "c5", text: "Schedule West Region technical onboarding call", due: "Fri Jul 17", status: "on-track", personId: "tomás", sourceEmailId: "e3" },
  { id: "c6", text: "Reply to Sam re: Cascade renewal conversation", due: "Mon Jul 20", status: "on-track", personId: "sam",   sourceEmailId: "e7" },
];

// ---------------------------------------------------------------------------
// MONEY — payments & obligations resolved from the inbox
// ---------------------------------------------------------------------------
export type MoneyItem = {
  id: string;
  label: string;
  amount: string;
  direction: "owe" | "incoming" | "spend-alert";
  due?: string;
  personId: string;
  sourceEmailId: string;
  note?: string;
};

export const money: MoneyItem[] = [
  { id: "m1", label: "Studio Kapoor — brand refresh (Invoice #2214)", amount: "$4,200", direction: "owe", due: "Jul 21", personId: "renu", sourceEmailId: "e5" },
  { id: "m2", label: "Reimburse Jane — offsite dinner + Figma annual", amount: "$1,180", direction: "owe", personId: "jane", sourceEmailId: "e8" },
  { id: "m3", label: "AWS July bill — up 38% MoM", amount: "$18,940", direction: "spend-alert", personId: "aws", sourceEmailId: "e6", note: "+$5,210 vs June — worth a look" },
  { id: "m4", label: "Cascade Freight — annual renewal", amount: "$60,000", direction: "incoming", due: "Aug 30", personId: "sam", sourceEmailId: "e7" },
];

// ---------------------------------------------------------------------------
// DOCUMENTS — referenced, not copied (reference-don't-copy principle)
// ---------------------------------------------------------------------------
export type Doc = {
  id: string;
  title: string;
  kind: string;
  resolvedInto: string; // what the Foundation extracted
  personId: string;
  sourceEmailId: string;
};

export const documents: Doc[] = [
  { id: "d1", title: "Cascade Freight — MSA (redline)", kind: "Contract", resolvedInto: "2 open terms → 1 commitment (c2)", personId: "david", sourceEmailId: "e2" },
  { id: "d2", title: "Seed term sheet (executed)",       kind: "Contract", resolvedInto: "Financing terms + close date",     personId: "david", sourceEmailId: "e12" },
  { id: "d3", title: "Studio Kapoor — Invoice #2214",    kind: "Invoice",  resolvedInto: "Payment: $4,200 due Jul 21 (m1)",  personId: "renu",  sourceEmailId: "e5" },
];

// ---------------------------------------------------------------------------
// SCENE 1 — Communications cold-start: what PSL/i surfaces unprompted
// ---------------------------------------------------------------------------
export const scene1 = {
  eyebrow: "Communications lens",
  title: `Good morning, Maya. Here's what needs you.`,
  sub: "PSL/i read your inbox and resolved it. Nothing was set up — this is your first open.",
  sections: [
    { key: "replies",     label: "Owed a reply",     itemIds: ["e1", "e3", "e7"] },      // email ids, ranked
    { key: "commitments", label: "You promised",     itemIds: ["c3", "c1", "c2"] },      // commitment ids (overdue first)
    { key: "money",       label: "Money in your inbox", itemIds: ["m1", "m3", "m4"] },   // money ids
  ],
  closingLine: "You didn't set this up. PSL/i already understands your week.",
};

// ---------------------------------------------------------------------------
// SCENE 2 — Navigator: intent → propose → approve → act (human-gated)
// ---------------------------------------------------------------------------
export const scene2 = {
  eyebrow: "Navigator",
  title: "Tell PSL/i what you want. It proposes — you approve.",
  suggestedPrompts: [
    "Reply to Glenn confirming Thursday and remind me to send the model",
    "Draft a reply to Tomás to schedule the onboarding call",
    "Send Jane her $1,180 reimbursement",
  ],
  // Keyed by a normalized match of the prompt; PromptBox fuzzy-matches to these.
  responses: {
    "glenn-thursday": {
      matches: ["glenn", "thursday", "model", "reply to glenn"],
      intent: "Reply to Glenn confirming Thursday and remind me to send the model",
      proposals: [
        {
          type: "email",
          title: "Proposed reply to Glenn Rivera",
          to: "Glenn Rivera",
          subject: "Re: Updated model before the partner meeting",
          draft: "Glenn — Thursday works, let's do 2pm your time. I'll have the revised model (with the West Region assumptions) to you by Friday morning so you've got the weekend with it. Talk then. — Maya",
          sourceEmailId: "e1",
        },
        {
          type: "reminder",
          title: "Proposed reminder",
          detail: "Send Glenn the revised financial model",
          when: "Friday, Jul 17 · 9:00 AM",
          linkedCommitmentId: "c1",
        },
      ],
      onApprove: {
        confirmation: "Reply sent to Glenn · reminder set for Fri 9:00 AM",
        audit: "Navigator · 2 actions · approved by Maya · " + "Thu Jul 16, 8:42 AM",
      },
      onDecline: {
        confirmation: "Nothing sent. Draft saved so you can edit it.",
      },
    },
    "tomás-onboarding": {
      matches: ["tomás", "tomas", "onboarding", "schedule", "call"],
      intent: "Draft a reply to Tomás to schedule the onboarding call",
      proposals: [
        {
          type: "email",
          title: "Proposed reply to Tomás Herrera",
          to: "Tomás Herrera",
          subject: "Re: West Region rollout — timing",
          draft: "Tomás — congrats on the budget approval! Let's get the technical onboarding call set. Priya will lead it; I'll cc her here. Does early next week work — Tue or Wed AM? And I'll have the security questionnaire back to you by Jul 21. — Maya",
          sourceEmailId: "e3",
        },
        {
          type: "reminder",
          title: "Proposed task",
          detail: "Return Cascade security questionnaire",
          when: "Mon, Jul 21",
          linkedCommitmentId: "c4",
        },
      ],
      onApprove: {
        confirmation: "Reply sent to Tomás (Priya cc'd) · task added",
        audit: "Navigator · 2 actions · approved by Maya · Thu Jul 16, 8:44 AM",
      },
      onDecline: { confirmation: "Nothing sent. Draft saved so you can edit it." },
    },
    "jane-reimburse": {
      matches: ["jane", "reimburse", "reimbursement", "1180", "pay jane"],
      intent: "Send Jane her $1,180 reimbursement",
      proposals: [
        {
          type: "payment",
          title: "Proposed payment — needs your approval",
          detail: "Reimburse Jane Okafor",
          amount: "$1,180.00",
          memo: "Offsite dinner ($740) + Figma annual ($440)",
          sourceEmailId: "e8",
          highGate: true, // consequential → always human-gated, no auto-commit
        },
      ],
      onApprove: {
        confirmation: "Payment of $1,180.00 queued to Jane — you'll confirm in your bank app",
        audit: "Navigator · 1 action (payment) · approved by Maya · consequential action, human-gated",
      },
      onDecline: { confirmation: "No payment made. Nothing left your account." },
    },
  },
  closingLine: "A packaged product, not a chatbot. It proposes, you approve, it acts — and every action is logged.",
};

// ---------------------------------------------------------------------------
// SCENE 3 — Reasoning over your own life (answers with citations)
// ---------------------------------------------------------------------------
export const scene3 = {
  eyebrow: "Reasoning lens",
  title: "Ask over your own life — not a blank page.",
  suggestedPrompts: [
    "What do I owe Jane?",
    "Summarize the West Region deal — people, docs, commitments, next step",
    "Show me at-risk commitments",
  ],
  contrastLine: "A blank-window chatbot can't answer these. PSL/i answers over your life.",
  responses: {
    "owe-jane": {
      matches: ["owe jane", "jane", "how much", "reimburse"],
      question: "What do I owe Jane?",
      answer: "You owe **Jane Okafor $1,180** — she fronted the team offsite dinner ($740) and the Figma annual seat renewal ($440). No due date; she said no rush.",
      citations: [
        { label: "Email — 'Reimbursement — offsite' · Jane · Fri", emailId: "e8" },
        { label: "Money — Reimburse Jane", moneyId: "m2" },
      ],
      followUp: "Want me to send it? (opens Navigator)",
    },
    "west-region": {
      matches: ["west region", "cascade", "deal", "summarize", "summary"],
      question: "Summarize the West Region deal — people, docs, commitments, next step",
      answer:
        "**West Region (Cascade Freight)** — leadership approved budget for a 4-depot rollout (Reno, Fresno, Boise, Spokane), targeting Q3 go-live.\n\n" +
        "**People:** Tomás Herrera (VP Ops, sponsor), Sam Delgado (renewals), Priya Nair (your sales lead), David Stern (counsel).\n\n" +
        "**Docs:** MSA in redline — 2 open terms (liability cap, data addendum). Annual renewal ($60k) due Aug 30, with expansion upside.\n\n" +
        "**Your open commitments:** decide the MSA points for David (due today), intro Priya to the Fresno ops lead (overdue), schedule the onboarding call, return the security questionnaire (Jul 21).\n\n" +
        "**Suggested next step:** clear the MSA decision today so David can return the redline, then lock the onboarding call.",
      citations: [
        { label: "Email — 'West Region rollout — timing' · Tomás · Wed", emailId: "e3" },
        { label: "Doc — Cascade MSA (redline)", docId: "d1" },
        { label: "Email — 'Cascade renewal — heads up' · Sam", emailId: "e7" },
        { label: "Commitments c2, c3, c4, c5", commitmentIds: ["c2", "c3", "c4", "c5"] },
      ],
    },
    "at-risk": {
      matches: ["at risk", "at-risk", "overdue", "behind", "slipping"],
      question: "Show me at-risk commitments",
      answer:
        "**3 commitments need attention:**\n\n" +
        "• **Overdue** — Intro Priya to the Fresno depot ops lead (promised Wed, Jul 15).\n" +
        "• **At risk** — Decide the MSA redline points for David (due today, Jul 16).\n" +
        "• **At risk** — Send Glenn the revised financial model (due Fri, Jul 17; partners review Monday).\n\n" +
        "The Glenn model and the David decision both feed Monday's partner meeting — I'd clear those first.",
      citations: [
        { label: "Commitment c3 — Intro Priya", commitmentIds: ["c3"] },
        { label: "Commitment c2 — MSA decision", commitmentIds: ["c2"] },
        { label: "Commitment c1 — Model to Glenn", commitmentIds: ["c1"] },
      ],
    },
  },
  fallback:
    "This is a demo, so I only know Maya's sample life. Try one of the suggested questions — or in the real PSL/i, ask anything over your own data.",
};

// ---------------------------------------------------------------------------
// CTA — hand off to the (open) waitlist
// ---------------------------------------------------------------------------
export const cta = {
  title: "This is a taste. PSL/i does this over your real life — privately.",
  sub: "No demo account needed. Request early access when you're ready.",
  buttonLabel: "Request early access",
  href: "/waitlist",
};
