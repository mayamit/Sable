// Copy for the Navigator approval-moment mockup (V1-honest).
// Derived from docs/reference/mockups/navigator-approval.html.

export const navigatorApproval = {
  title: 'Review & approve',
  subhead: '3 things Sable prepared for you. Nothing is sent or changed until you approve.',
  auto: 'Routine updates — filing, labels, contact details — were applied automatically. Only outbound actions and anything unusual stop here.',
  footer: 'You are always the last step. Sable proposes; you decide.',
  // The first item is shown expanded with a preview + actions.
  items: [
    {
      title: 'Send reply to Jane Smith',
      meta: 'Email · West Region pricing',
      badge: 'Outbound · needs approval',
      accent: 'blue',
      icon: 'mail',
      open: true,
      why: 'Jane asked for the updated pricing 3 days ago and you said you’d send it. Her client’s board meets Thursday.',
      preview: {
        to: 'Jane Smith',
        subject: 'Re: West Region Expansion',
        lines: [
          'Hi Jane,',
          'Thanks for the nudge. I’ve attached the updated West Region pricing — the main change is the volume tier kicking in at 250 seats. Happy to jump on a quick call Wednesday to walk through it before Thursday.',
          'Best,\nGlenn',
        ],
      },
    },
    {
      title: 'Schedule 30 min with Acme’s legal team',
      meta: 'Calendar · proposes Wed 11:00 AM, invites 2 people',
      badge: 'Calendar · needs approval',
      accent: 'rose',
      icon: 'calendar',
      open: false,
    },
    {
      title: 'Add commitment — Phase 2 budget sign-off',
      meta: 'Foundation · due Friday · flagged from Mark Lee’s email',
      badge: 'Record · needs approval',
      accent: 'violet',
      icon: 'shield',
      open: false,
    },
  ],
};
