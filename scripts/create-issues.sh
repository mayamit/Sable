#!/usr/bin/env bash
# Create GitHub labels, milestones, and issues for building the PSL/i website.
# Prereqs:
#   1) Install GitHub CLI: https://cli.github.com
#   2) Authenticate:  gh auth login
#   3) Run:  bash scripts/create-issues.sh
set -euo pipefail

REPO="mayamit/psli"

# --- Labels -----------------------------------------------------------------
echo "Creating labels in $REPO ..."
gh label create foundation --repo "$REPO" --color 5B4EF0 --description "Project setup & shared building blocks" 2>/dev/null || true
gh label create homepage   --repo "$REPO" --color 6A5CF6 --description "Home page sections" 2>/dev/null || true
gh label create page       --repo "$REPO" --color 3B82F6 --description "Standalone pages" 2>/dev/null || true
gh label create content    --repo "$REPO" --color 10B981 --description "Copy / MDX content" 2>/dev/null || true
gh label create quality    --repo "$REPO" --color F59E0B --description "A11y / performance / SEO" 2>/dev/null || true
gh label create phase-2    --repo "$REPO" --color 9CA3AF --description "Post-launch" 2>/dev/null || true
gh label create P1 --repo "$REPO" --color B91C1C --description "Do first" 2>/dev/null || true
gh label create P2 --repo "$REPO" --color D97706 --description "Next" 2>/dev/null || true
gh label create P3 --repo "$REPO" --color 6B7280 --description "Later" 2>/dev/null || true

# --- Milestones -------------------------------------------------------------
# Created via the REST API (gh api). Re-running is safe: existing titles 422 and are ignored.
M1="Phase 1 - Launch"
M2="Phase 2 - Growth"
echo "Creating milestones ..."
gh api --method POST "repos/$REPO/milestones" -f title="$M1" \
  -f description="Focused launch site: Home, How it works, Lenses, Privacy & Trust, Home Server, Pricing, Vision, Waitlist, Legal." 2>/dev/null || true
gh api --method POST "repos/$REPO/milestones" -f title="$M2" \
  -f description="Post-launch growth: individual lens pages, Security, Company/Blog, Docs, answer-engine page, use-case pages." 2>/dev/null || true

# --- Helper -----------------------------------------------------------------
# Fetch existing titles once so re-running this script never duplicates issues.
EXISTING_TITLES="$(gh issue list --repo "$REPO" --state all --limit 500 --json title -q '.[].title' 2>/dev/null || true)"

mk () { # mk "title" "labels" "milestone" "body"
  if grep -Fxq "$1" <<< "$EXISTING_TITLES"; then
    echo "Skip (already exists): $1"
    return
  fi
  echo "Creating: $1"
  gh issue create --repo "$REPO" --title "$1" --label "$2" --milestone "$3" --body "$4"
}

# ===========================================================================
# FOUNDATION  (Phase 1)
# ===========================================================================
mk "Scaffold Astro + Tailwind + MDX and design tokens" "foundation,P1" "$M1" \
"**Goal:** Stand up the project skeleton per the brief and wire the design tokens.

**Read first:** \`CLAUDE.md\` and \`docs/Sable_Website_Design_Brief.md\` (§3 tokens, §4 stack/structure).

**Tasks**
- [ ] Init Astro project with Tailwind + MDX integrations.
- [ ] Create the repo structure in §4 (layouts, components, pages, content, styles, public).
- [ ] Map ALL tokens from §3 / \`CLAUDE.md\` into \`tailwind.config.mjs\` and \`styles/tokens.css\`.
- [ ] Load Inter (variable). Base typography (headings tight -0.02em, body 16–18px / ~1.6).
- [ ] Working \`npm run dev\`.

**Acceptance**
- Dev server renders a blank page using the tokens; no hard-coded colors."

mk "Layout shell: Nav, Footer, Base layout" "foundation,P1" "$M1" \
"**Goal:** The persistent shell every page uses.

**Depends on:** Scaffold issue. **Read:** brief §5 (routes), §3, \`CLAUDE.md\`.

**Tasks**
- [ ] \`Base.astro\` (head/meta slot, container, skip-link).
- [ ] \`Nav\`: logo + How it works, Lenses, Privacy, Home Server, Pricing + Log in + 'Get early access'. Sticky, light, PSL/i-indigo.
- [ ] \`Footer\`: four columns (Product / Company / Resources / Legal) + Social; 'Your data. Your context. Your decisions.'
- [ ] Mobile nav.

**Acceptance**
- Nav/Footer render, responsive, keyboard-navigable."

mk "Core component library" "foundation,P1" "$M1" \
"**Goal:** Reusable components used across all pages.

**Depends on:** Layout shell. **Read:** brief §3; \`docs/reference/mockups/\`.

**Tasks**
- [ ] Button (primary/secondary/ghost), Card, SectionShell.
- [ ] FeatureBlock, LensCard, StepDiagram.
- [ ] PricingTable, FAQ (accordion), TrustPoints, CTASection, Logos.
- [ ] All content via props/slots.

**Acceptance**
- A components sandbox page renders each variant matching the mockups."

# ===========================================================================
# HOMEPAGE  (Phase 1)
# ===========================================================================
mk "Home — Hero + Problem" "homepage,content,P1" "$M1" \
"**Goal:** Home sections 2–3. **Read:** brief §6, §2 (approved copy bank).

**Tasks**
- [ ] Hero: outcome headline (test 'An AI that actually knows you.'), subhead, primary CTA, product visual slot, 'Your data stays yours.'
- [ ] Problem: 'A person is coherent. Their digital life is not.'
- [ ] Lead with outcome — NOT architecture words. Copy in MDX.

**Acceptance**
- Hero + Problem render, responsive; copy in MDX."

mk "Home — How it works (3-step)" "homepage,P1" "$M1" \
"**Goal:** Home section 4 — 'One foundation. Resolved once. Used everywhere.' Use \`StepDiagram\`.

**Tasks**
- [ ] Three steps: resolve → hold → reuse (Navigator → Foundation → Lenses).
- [ ] Friendly diagram, not the technical architecture.

**Acceptance**
- Reads clearly to a non-technical visitor."

mk "Home — Lenses section" "homepage,P1" "$M1" \
"**Goal:** Home section 5. **Reference:** \`docs/reference/mockups/communications-lens.html\`, \`reasoning-lens.html\`.

**Tasks**
- [ ] LensCard for Communications (triage + drafts-in-your-voice) and Reasoning (answers over your life + source traces), each with an example.
- [ ] Use V1 mockups — NOT the V3 work surface. 'More lenses coming.'

**Acceptance**
- Both lenses shown with V1-honest visuals + concrete examples."

mk "Home — Works over your apps + Trust by design" "homepage,P1" "$M1" \
"**Goal:** Home sections 6–7. **Reference:** \`navigator-approval.html\`.

**Tasks**
- [ ] Connectors row; 'your apps stay the system of record.'
- [ ] Trust: human-gated writes, source traces, audit, data control; link to /privacy; show the approval moment.

**Acceptance**
- Trust section links to /privacy and shows the approval moment."

mk "Home — Your data, your place + Credibility" "homepage,P2" "$M1" \
"**Goal:** Home sections 8–9.

**Tasks**
- [ ] Cloud vs Home-Server short comparison; link to /home-server.
- [ ] Credibility strip (placeholders; no fake logos, no unearned compliance badges).

**Acceptance**
- Cloud/Home-Server contrast clear; no fabricated proof."

mk "Home — Pricing + FAQ + Final CTA" "homepage,content,P2" "$M1" \
"**Goal:** Home sections 10–12.

**Tasks**
- [ ] Pricing: \$100/mo, two tiers, one toggle.
- [ ] FAQ: 'Is this a chatbot?', 'What can it see?', 'How is my data protected?', 'Cloud vs Home Server?', 'Can I export/delete everything?'
- [ ] Final CTA + footer; 'Your data. Your context. Your decisions.'

**Acceptance**
- Pricing honest & simple; FAQ answers the 5 objections."

# ===========================================================================
# PAGES  (Phase 1)
# ===========================================================================
mk "Page: /how-it-works" "page,content,P2" "$M1" \
"Expand Navigator → Foundation → Lenses; 'resolve once, reuse everywhere'; simplified 3-tier diagram; end on trust + CTA. Read brief §7. Reference design/Component_Map.png, PSL_OSL.png."

mk "Page: /lenses" "page,content,P2" "$M1" \
"Lenses overview + Communications and Reasoning, each with a V1-honest mockup and concrete example. Reserve /lenses/communications and /lenses/reasoning for Phase 2. Read brief §7."

mk "Page: /privacy (Privacy & Trust)" "page,content,P1" "$M1" \
"**Differentiator — write early.** Plain English: what PSL/i can/can't see; human-gated writes; the approval moment; provenance + audit; export/delete; then Home-Server as the strongest guarantee. Hero: 'Your data was protected before a single line was written.' No compliance badges until real. Read brief §7."

mk "Page: /home-server" "page,content,P2" "$M1" \
"Appliance tier: what it is, why, 'data never leaves the house,' who it's for (privacy-maximalist wedge). Light e-commerce framing; buy flow deferred. Read brief §7 + GTM wedge."

mk "Page: /pricing" "page,content,P2" "$M1" \
"One price (\$100/mo), two tiers compared honestly, pricing FAQ; anchor to value not 'infrastructure.' Reuse PricingTable. Read brief §7."

mk "Page: /vision (What's next)" "page,content,P3" "$M1" \
"Undated 'what's next': more lenses, foundation as source of truth, marketplace, universal surface. **This is where the V3 work-surface mockup and ambition/moat framing belong — labeled as vision.** Read brief §7."

mk "Page: /waitlist (Get early access)" "page,P2" "$M1" \
"Gated early-access capture (design partners → gated waitlist → referral). Minimal, trustworthy form. Do NOT store secrets in the repo; wire to a form service via env var. Read brief §7 + GTM."

mk "Legal: /legal/privacy-policy and /legal/terms" "page,content,P3" "$M1" \
"Privacy Policy + Terms as MDX. **Placeholder drafts only — flagged as needing counsel before launch.** Do not present as final legal text."

# ===========================================================================
# QUALITY  (Phase 1)
# ===========================================================================
mk "Accessibility, performance & SEO pass" "quality,P2" "$M1" \
"**Read:** brief §10.
**Tasks**
- [ ] WCAG 2.1 AA: contrast, keyboard nav, focus, alt text, prefers-reduced-motion.
- [ ] Performance: near-zero JS, AVIF/WebP, Lighthouse >= 95.
- [ ] SEO: semantic headings, per-page title/meta/OG, sitemap.xml, structured data on Home + Pricing.

**Acceptance**
- Lighthouse >= 95 on Home."

# ===========================================================================
# PHASE 2
# ===========================================================================
mk "Phase 2: /for-ai-assistants + llms.txt" "phase-2,P3" "$M2" \
"Add an answer-engine page and /llms.txt so ChatGPT/Claude/Perplexity describe PSL/i correctly (as Lindy/Fyxer do). Read brief §5/§10."

echo ""
echo "Done. View: gh issue list --repo $REPO   |   https://github.com/$REPO/issues"
echo "Milestones: https://github.com/$REPO/milestones"
