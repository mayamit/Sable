# Sable — Website Design & Build Brief
**For building the marketing site with Claude Code**

Brand: **PSL** (company) · Product: **Sable** · Category (descriptor, not a headline): *personal semantic layer*
Prepared: July 2026 · Owner: Amit Gandhi · Status: build brief, v1

---

## 0. How to use this brief

Build **top‑down and component‑first**, not page‑by‑page. Order of operations:

1. Set up the repo + **design tokens** (Section 3) and the layout shell (Nav, Footer, Base layout).
2. Nail the **Hero** and **How‑it‑works** sections until they are genuinely good (Sections 6–7). Spend real iteration here.
3. Scaffold the remaining **Phase‑1 pages** reusing the component system (Section 5, 7).
4. Content pass from the **source map** (Section 8) — copy lives in MDX, not in components.
5. Accessibility / performance / SEO / answer‑engine pass (Section 10).

Drop `CLAUDE.md` (delivered alongside this brief) at the repo root so every Claude Code session inherits the rules.

---

## 1. Product & brand context

- **PSL** is the company/brand. **Sable** is the product a person signs up for and uses. Say “**Sable, by PSL**” in the footer/legal; lead with **Sable** everywhere in marketing copy.
- Use “**personal semantic layer**” only as an *explanatory descriptor* in How‑it‑works / Vision — **never** in the hero. Never open with architecture words (“semantic layer,” “ontology,” “deterministic”).
- What Sable is, in one plain line: **an AI that actually knows you — it resolves what your life and work mean once, holds it privately, and reuses it across your apps.**
- Core product facts (keep consistent across the site):
  - **Navigator** takes intent in plain language, proposes actions, and **acts only after you approve**.
  - **Foundation** is your private, per‑user store of resolved meaning (people, commitments, money, documents) with provenance + audit on every fact.
  - **Two V1 lenses**: **Communications** (the full surface + cold‑start engine) and **Reasoning** (a generalist that answers over *your* life, not a blank page).
  - **Two tiers, one price — $100/month**: **Cloud** and **Home Server** (a local appliance; data never leaves the house).
  - **Trust by design**: human‑gated writes, visible source traces, full audit, export/delete.

---

## 2. Positioning & messaging rules

**Do:**
- Lead with the **outcome** (a human benefit), then show the surface, then explain the idea.
- Contrast openly: **“a packaged product, not a chatbot.”**
- Sell **memory and trust together** — they are one story for Sable.
- Use concrete micro‑examples (from the real product): *“What do I owe Jane?”*, *“Prepare renewal summary,”* *“Show me at‑risk commitments.”*

**Don't:**
- Don't open with the market thesis / TAM / “the layer beneath everything” — that's investor framing (keep it for the Vision page, softened).
- Don't present the **Universal Work Surface** mockup as what ships at launch. It is the **V3 vision**. V1 = the two lenses over your existing apps. (See Section 9 guardrail.)
- Don't overclaim compliance (no SOC 2/HIPAA badges until real).

**Approved copy bank** (derived from PSL source docs — reuse or lightly adapt, swapping in *Sable* as the product):

| Line | Best used as | Source |
|---|---|---|
| “A person is coherent. Their digital life is not.” | Problem headline | Explainer |
| “One foundation. Resolved once. Used everywhere.” | How‑it‑works headline | Explainer |
| “Sable resolves what your world means one time, holds it, and reuses it instead of rebuilding it on every request.” | How‑it‑works subhead | Explainer (adapted) |
| “Your data. Your context. Your decisions.” | Trust tagline / footer | Work‑surface mockup |
| “Your data was protected before a single line was written.” | Privacy hero | Explainer |
| “Packaged like software, priced like infrastructure.” | Pricing framing | Exec Summary |
| “The moat is owned meaning that compounds.” | Vision / Why‑it‑wins | Exec Summary |
| “Own your context. Then own the surface.” | Vision | Explainer |

Hero headline candidates (pick/test): **“An AI that actually knows you.”** · **“Meet Sable — the AI that remembers your whole life.”** · **“Stop re‑explaining yourself to AI.”**

---

## 3. Design system (derived from `UI_Work_Surface.jpeg`)

The product UI sets the language: **light, calm, trustworthy, lightly premium** — white cards on a near‑white canvas, generous whitespace, soft shadows, an indigo/violet accent, and color‑coded life‑area accents. Adopt this for the site. (Tune exact values against the source image.)

**Color tokens**
```
--bg            #F6F7F9   /* page canvas */
--surface       #FFFFFF   /* cards */
--ink           #1B1F2A   /* headings */
--ink-2         #454B57   /* body */
--muted         #6B7280   /* secondary */
--border        #E7E9EE
--primary       #5B4EF0   /* Sable indigo — CTAs, links, logo */
--primary-700   #4A3ED6   /* hover */
--primary-50    #ECEAFE   /* tint / chips */
--grad          linear-gradient(135deg,#6A5CF6,#8B7CF8)  /* Navigator/CTA accent */
/* life-area accents (features, lens cards) */
--c-blue #3B82F6  --c-green #10B981  --c-teal #14B8A6
--c-amber #F59E0B --c-violet #8B5CF6 --c-rose #F43F5E
```

**Type**: **Inter** (variable) for everything. Headings tight (`letter-spacing:-0.02em`), large and confident; body 16–18px, relaxed line‑height (~1.6). Optional refined display face (General Sans / Aeonik) only if it stays calm.

**Shape & depth**: card radius **14px**, buttons **10px**, chips **pill**. Shadows soft and low (`0 1px 2px rgba(16,24,40,.06), 0 8px 24px rgba(16,24,40,.05)`). 1px `--border` on cards.

**Components to build once** (reused everywhere): `Nav`, `Footer`, `Button` (primary/secondary/ghost), `SectionShell` (max‑width + vertical rhythm), `Card`, `FeatureBlock` (icon + benefit headline + line + visual), `LensCard`, `StepDiagram`, `PricingTable`, `FAQ` (accordion), `TrustPoints`, `CTASection`, `Logos`.

**Tone of voice**: plain‑spoken, confident, unhurried. Short sentences. No hype, no exclamation walls. Reassuring on anything data‑related.

**Motion**: restrained. Fade/rise on scroll, subtle. Respect `prefers-reduced-motion`.

---

## 4. Tech stack & repo structure

**Recommended:** **Astro + Tailwind CSS + MDX**, deployed on **Vercel or Netlify**. Rationale: mostly‑static marketing site, best‑in‑class performance/SEO, content in Markdown, minimal JS. (Alternative if you want the React ecosystem / shared components with the product app: **Next.js + Tailwind + shadcn/ui** — same tokens, same structure.)

```
sable-site/
├─ CLAUDE.md                      # rules (delivered with this brief)
├─ tailwind.config.mjs            # maps the tokens in §3
├─ astro.config.mjs
├─ src/
│  ├─ layouts/ Base.astro
│  ├─ components/ Nav, Footer, Button, SectionShell, Card,
│  │             FeatureBlock, LensCard, StepDiagram, PricingTable,
│  │             FAQ, TrustPoints, CTASection, Logos
│  ├─ pages/
│  │   ├─ index.astro             # Home
│  │   ├─ how-it-works.astro
│  │   ├─ lenses/index.astro      # (+ /lenses/communications, /lenses/reasoning in Phase 2)
│  │   ├─ privacy.astro           # Privacy & Trust (plain-English)
│  │   ├─ home-server.astro
│  │   ├─ pricing.astro
│  │   ├─ vision.astro            # "What's next" (undated)
│  │   ├─ waitlist.astro          # Get early access
│  │   └─ legal/ privacy-policy.mdx, terms.mdx
│  ├─ content/                    # MDX collections: faq, pricing, lenses, testimonials
│  └─ styles/ tokens.css, global.css
└─ public/ assets/ (images, mockups), og/, llms.txt
```

**Rule:** all copy (headlines, FAQ, pricing, lens descriptions) lives in **MDX/data files**, never hard‑coded in components — the hero line and Foundation explainer will change many times.

---

## 5. Sitemap & routes

**Phase 1 (launch — ship these):**
`/` Home · `/how-it-works` · `/lenses` · `/privacy` (Privacy & Trust) · `/home-server` · `/pricing` · `/vision` · `/waitlist` · `/legal/privacy-policy` · `/legal/terms`

**Phase 2 (grow — reserve the URLs now):**
`/lenses/communications`, `/lenses/reasoning` · `/security` · `/company` + `/blog` · `/docs` · `/for-ai-assistants` (+ `/llms.txt`) · use‑case/persona pages

Four‑column footer doubling as sitemap: **Product · Company · Resources · Legal** (+ Social).

---

## 6. Homepage anatomy (12 sections)

| # | Section | Content | Asset | Source |
|---|---|---|---|---|
| 1 | Nav | Logo · How it works, Lenses, Privacy, Home Server, Pricing · Log in + **Get early access** | — | — |
| 2 | Hero | Outcome headline (§2) + one‑line subhead + primary CTA + product visual + microcopy “Your data stays yours.” | Work‑surface still/video | Derived |
| 3 | Problem | **“A person is coherent. Their digital life is not.”** Re‑explaining yourself; context scattered across apps. | — | Explainer |
| 4 | How it works | **“One foundation. Resolved once. Used everywhere.”** 3 steps: resolve → hold → reuse. | Simplified 3‑tier diagram (to make) | Exec Summary / Explainer |
| 5 | Lenses | Communications + Reasoning, each with a real V1 screenshot + concrete example. “More lenses coming.” | **V1 lens mockups (to make)** | Requirements |
| 6 | Works over your apps | Connectors (email, calendar, contacts, messaging); your apps stay the system of record. | Connector logos | Requirements |
| 7 | Trust by design | Human‑gated writes · source traces · full audit · you control your data. Link → Privacy. | Approval‑moment mockup (to make) | Requirements / Explainer |
| 8 | Your data, your place | Cloud vs Home Server. Link → Home Server. | Home‑server visual (to make) | Requirements / GTM |
| 9 | Credibility | Founder/early‑user proof as it exists; press/badges later. | — | — |
| 10 | Pricing | $100/mo, two tiers, one toggle. | — | Exec Summary |
| 11 | FAQ | “Is this a chatbot?” · “What can it see?” · “How is my data protected?” · “Cloud vs Home Server?” · “Can I export/delete everything?” | — | Requirements |
| 12 | Final CTA + footer | Repeat promise + **“Your data. Your context. Your decisions.”** Four‑column footer. | — | Mockup |

---

## 7. Page specs (Phase 1)

- **How it works** — expand the Navigator → Foundation → Lenses model; the simplified 3‑tier diagram; “resolve once, reuse everywhere”; end on trust + CTA.
- **Lenses** — overview + Communications (triage, drafts‑in‑your‑voice, cold‑start) and Reasoning (answers over your life with source traces); each needs a **V1‑honest** mockup.
- **Privacy & Trust** (differentiator — write early) — plain English: what Sable can/can't see; human‑gated writes; the approval moment; provenance + audit; export/delete; then Home‑Server as the strongest guarantee. Hero line: *“Your data was protected before a single line was written.”*
- **Home Server** — the appliance tier: what it is, why, “data never leaves the house,” who it's for (privacy‑maximalists — the GTM wedge). Inherits light e‑commerce framing; buy flow later.
- **Pricing** — one price ($100/mo), two tiers compared honestly; pricing FAQ; anchor to value, not to “infrastructure.”
- **Vision** — undated “what's next” (more lenses, foundation becomes source of truth, marketplace, universal surface). This is where the **work‑surface mockup and the ambition/moat framing belong** — labeled as vision.
- **Waitlist** — gated early‑access capture (GTM: design partners → gated waitlist → referral). Minimal, trustworthy.
- **Legal** — Privacy Policy, Terms (draft with counsel; do not ship placeholder legal as final).

---

## 8. Content source map (what feeds what)

All files are in the PSL project folder / Drive.

| Source doc | Feeds |
|---|---|
| **Explainer** (`psl_explainer.html`) | Hero/problem lines, how‑it‑works, privacy, vision copy |
| **Executive Summary** | Product facts, pricing framing, moat, econ (vision) |
| **GTM Strategy Memo** | Audience/segments, trust‑center framing, Home‑Server wedge, waitlist strategy, FAQ objections |
| **Investor Handout** | Positioning, vision, market (Vision page only) |
| **V1 Requirements** | Lenses, connectors, tiers, trust mechanics, onboarding, FAQ |
| **PSL Software Architecture Spec v1 / Low‑Level Design** | Security page, Docs (Phase 2) |
| **Product Roadmap + Roadmap Features V1/V2/V3** | Vision page |
| **This project's** `PSL_Website_Research_Homepage_IA.docx`, `PSL_Proposed_Sitemap.svg`, `PSL_Website_Benchmark_OnePager.svg` | IA, homepage stack, competitive patterns |

Reuse reality (launch‑critical pages): ~**60–65% derived** from existing material; gaps concentrate in **visuals**, **legal**, and **anything needing the live product**.

---

## 9. Assets

**We already have (in `Architecture Graphics/`):**
- `UI_Work_Surface.jpeg` — the polished Universal Work Surface = **design language reference + Vision/hero visual** (⚠ V3, not V1).
- `Component_Map.png`, `PSL_OSL.png`, `PSL_Package.png` — concept/architecture diagrams (How‑it‑works, Vision).
- On Drive: `MockUp_061826.mov` (walkthrough video), `HTML Mockups Desktop UI/UI_Worksurface.html` (interactive mockup), the HLA SVGs.

**⚠ Guardrail:** the work surface is the **V3 vision**. Use it on the **Vision** page and as an aspirational hero accent — **do not** label it as the V1 product. V1 sections must show V1‑honest surfaces.

**Mockups to create (priority order):**

| Mockup | Serves | Priority |
|---|---|---|
| Communications lens — V1 surface (triage + drafts‑in‑your‑voice) | Home, Lenses | High |
| Reasoning lens — V1 surface (answers over your life + source traces) | Lenses | High |
| Navigator review/approval moment (“here's what I'll do — approve?”) | Privacy, How‑it‑works | High |
| Onboarding / connect‑your‑apps + first value | Home, How‑it‑works | High |
| Foundation “what Sable knows about you” (provenance, audit, edit/delete) | Privacy | Medium |
| Home Server product + “data stays home” dashboard | Home Server | Medium |
| Batched review digest (only failures + outbound actions stop) | How‑it‑works, Trust | Medium |
| Simplified consumer 3‑tier diagram (Navigator→Foundation→Lenses) | How‑it‑works | Medium |
| Responsive/mobile hero | Home | Low |

Claude Code can produce first‑pass **HTML/CSS prototypes** of these using the design tokens, which can stand in until real product screenshots exist.

---

## 10. Non‑negotiables (a11y, performance, SEO, GEO)

- **Accessibility:** WCAG 2.1 AA — color contrast, keyboard nav, focus states, alt text, `prefers-reduced-motion`.
- **Performance:** ship near‑zero JS; optimize images (AVIF/WebP); Lighthouse ≥ 95. Performance is itself a trust signal for this brand.
- **SEO:** semantic headings, per‑page `<title>`/meta/OG, sitemap.xml, structured data on Home + Pricing.
- **Answer‑engine (Phase 2):** add `/for-ai-assistants` + `/llms.txt` so ChatGPT/Claude/Perplexity describe Sable correctly (as Lindy and Fyxer do).

---

## 11. Build sequence

1. Repo + Tailwind tokens (§3) + `Base` layout + `Nav`/`Footer`.
2. **Hero** + **How‑it‑works** — iterate to real quality.
3. Component library (Button, Card, FeatureBlock, LensCard, StepDiagram, PricingTable, FAQ, CTASection).
4. Remaining Phase‑1 pages from components.
5. Content pass from MDX (source map §8), Sable/PSL naming throughout.
6. Mockup prototypes (§9) slotted into Lenses/Trust/Home‑Server/Onboarding.
7. a11y + performance + SEO pass.
8. Deploy preview; iterate copy on Hero + Privacy first.

---

## 12. Prompt sequence for Claude Code

Run these in order (adjust as you go):

1. *“Read `CLAUDE.md`. Scaffold an Astro + Tailwind + MDX site with the repo structure in the brief. Configure Tailwind with the exact color/type/radius tokens from `CLAUDE.md`. Set up a `Base` layout, and empty `Nav` and `Footer` components.”*
2. *“Build the `Nav` and `Footer` per the brief (routes in §5, four‑column footer). Light theme, Sable indigo accent, Inter.”*
3. *“Build the Home **Hero** (section 2) and **Problem** (section 3). Use the approved copy bank. Calm, premium, lots of whitespace. Put copy in MDX/data, not the component.”*
4. *“Build the **How‑it‑works** section with a simple 3‑step ‘resolve → hold → reuse’ diagram component (`StepDiagram`).”*
5. *“Build the reusable `FeatureBlock`, `LensCard`, `PricingTable`, `FAQ`, `CTASection`. Then assemble the rest of the Home page sections 5–12 from the brief.”*
6. *“Create the Phase‑1 pages (`/how-it-works`, `/lenses`, `/privacy`, `/home-server`, `/pricing`, `/vision`, `/waitlist`, legal). Reuse components; pull copy from the source map.”*
7. *“Generate first‑pass HTML/CSS mockups (design tokens) for: Communications lens, Reasoning lens, the Navigator approval moment, and onboarding. Place them in the Lenses / Privacy / How‑it‑works sections as V1‑honest visuals — NOT the V3 work surface.”*
8. *“Accessibility + performance + SEO pass to the standards in the brief. Add sitemap.xml, per‑page meta/OG.”*

---

## 13. Open decisions & guardrails

- **Naming:** Product = **Sable**; brand = **PSL**; “personal semantic layer” = descriptor only. (Locked this session.)
- **V1 vs V3:** never sell the work surface as shippable now.
- **Legal:** Privacy Policy / Terms need counsel before launch.
- **Compliance claims:** none until real.
- **Domain/logo:** placeholder `sable` mark (indigo) until final brand assets exist.
- **Stack:** Astro recommended; swap to Next.js if sharing components with the product app matters more.
