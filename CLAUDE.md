# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project intent — read this carefully, it has been gotten wrong before

`copyright-abuses.github.io` is the public site for the **copyright-abuses.com** domain operated by **Randy labs**. The site exists for one purpose:

> When a recipient of a copyright takedown notice issued by Randy labs (a platform, intermediary, host, ISP, regulator, or end user) lands on this domain, they can verify that the notice is legitimate, see the **authorization, detection technology, and legal basis** under which it was sent, and find the contact path to request mandate proof or file a counter-notice.

The "copyright-abuses" in the domain name refers to the **copyright abuses (piracy, unauthorized streams, unauthorized redistribution) that Randy labs enforces against on behalf of rights holders**. It does **not** refer to abuses of the DMCA system itself. Do not build content that frames this site as a public-interest reference about how the DMCA gets misused; that misreading produced an entire "Recurring patterns in abusive notices" section that had to be removed.

What the site is:

- A credibility / transparency front for the takedown notices Randy labs sends.
- An information page for recipients on what a notice is and their right to counter-notice under § 512(g).
- A documented compliance posture: rights-holder mandate produced on demand, content-match (not person-match) detection technology, and notices drafted to applicable substantive law (CDPA 1988, CRRA 2000, 17 U.S.C. § 512, DSA Art. 16) plus UK/EU GDPR posture (Art. 4(14), Art. 6(1)(f), outside Art. 9, aligned with ICO 2025, Recital 51, EDPB).
- A small set of static in-browser tools relevant to enforcement (currently a HAR viewer for inspecting evidence captures).

What the site is **not**:

- A public-interest DMCA explainer.
- A reference for spotting abusive DMCAs sent by other parties.
- Commentary on the DMCA system being broken or weaponized.
- A sales page for Randy labs services.

**Brand spelling**: the company is rendered "Randy labs" (lowercase l in *labs*), never "Randy Labs". Match the deck typography.

**Copy style**: do **not** use em dashes (—) in user-facing copy. The user has explicitly flagged em dashes as an "AI-generated" tell. Use commas, periods, parentheses, or colons instead. This applies to every `.vue` file and any markdown the user might read.

**Tone is informational. Not commercial. Not provocative.** Three rules that are easy to violate by accident:

1. **No sales / commercial framing.** No demo CTAs, no pricing, no product pitch, no "talk to our team", no "trusted by". Contact links exist only for legitimate workflows: authorization-proof requests (platforms), counter-notices (recipients), and regulator / court correspondence.
2. **No editorial / provocative framing.** This is a reference, not an opinion piece. Do **not** color-code value-judgment words (e.g. "abused" in red), do not write headlines that take a side ("The DMCA is one of the most abused laws on the internet" is wrong here), do not characterize the system as broken. State what things *are*; let readers draw conclusions. The domain name itself implies the angle, the copy does not need to.
3. **No AI-generic explainer phrasing.** Avoid "demystified", "explained", "everything you need to know", "the ultimate guide". Write like a reference entry: descriptive, factual, short.

If you find yourself reaching for either a punchy headline or a smooth marketing line, you are out of register. The right register is closer to a Wikipedia first paragraph.

**Don't over-explain Randy labs.** The "About" section names the operator once and links to randylabs.com. Do not expand on what Randy labs does, where it is based, or its market. The user has explicitly flagged this as overreach. Mention the operator, then move on.

## llms.txt

`public/llms.txt` follows the [llms.txt convention](https://llmstxt.org/) and serves at `/llms.txt`. It is the canonical machine-readable summary for LLMs that index or cite this site. Its content mirrors the homepage and compliance page: project intent, "if you have received a notice" basics, three enforcement-posture pillars (authorization / technology / legal basis), and contact rails. **When the homepage or compliance page changes substantively, update `llms.txt` in the same commit.**

## Compliance page is load-bearing — keep its anchors

`pages/compliance.vue` is the canonical legal-posture page and should not regress on these specific anchors (they came from the Randy labs UEFA "Content Identification & Data Protection" deck and are repeated in the homepage teaser):

- **Authorization**: Randy labs holds written mandates from rights-holders and produces them on demand. **All public contact addresses must use the `@copyright-abuses.com` domain** and must be rendered as PNG images (`public/images/email-*.png`), never as plaintext or `mailto:` links — pirates scrape both HTML and llms.txt. Image PNGs are generated with ImageMagick: `magick -background "#fafbfc" -fill "#1e293b" -font "Helvetica-Bold" -pointsize 36 label:"<addr>@copyright-abuses.com" email-<slug>.png`. Do not add a general "info@" contact anywhere on the site.
- **Substantive law**: CDPA 1988 (UK), CRRA 2000 (IE), 17 U.S.C. § 512 (US), DSA Art. 16 (EU).
- **GDPR posture** (verbatim from the deck — do not paraphrase the legal labels):
  - Processing outcome is a **content match, never a person match**.
  - **Not biometric data under Art. 4(14)** UK/EU GDPR.
  - **Outside Art. 9**, no special-category basis required.
  - **Lawful basis: Art. 6(1)(f)** — legitimate interests in IP enforcement.
  - **Aligned with ICO 2025 guidance, Recital 51, EDPB on facial recognition**.
- **Match signals** (broadcast-derived, not viewer-derived): broadcaster logos / channel bugs, jersey / pitch-color reading, pitch-side advertising-board OCR, audio + commentary + subtitle correlation, stream quality + codec + per-frame CMYK profile. Do **not** name specific broadcasters or mention scoreboards — the user has explicitly asked these be omitted.
- **What we do not do**: facial recognition, biometric ID, profiling of natural persons.

If a future change touches this page, preserve the legal article references verbatim. They are cited as part of regulatory and court correspondence.

## Tools architecture (important — don't break this pattern)

Each interactive tool lives at two layers:

1. A **Nuxt page** at `pages/tools/<slug>.vue` provides the brand chrome (`SiteNavbar` / `SiteFooter`) and metadata (`useSeo`).
2. The actual tool is a **standalone static mini-app** under `public/tools/<slug>-app/index.html`. The Nuxt page iframes it.

This split is deliberate: it lets each tool ship its own dependencies (the HAR viewer pulls React + `network-viewer` from `esm.sh`) without bloating the marketing-site Nuxt bundle, and it keeps each tool independently deployable / debuggable. **Do not** install React or other tool-specific runtimes as Nuxt dependencies — keep them in the standalone HTML.

Currently shipped:

| Slug | Nuxt route | Standalone app | Library |
|------|------------|----------------|---------|
| `har-viewer` | `pages/tools/har-viewer.vue` | `public/tools/har-viewer-app/index.html` | Native vanilla-JS implementation, single self-contained HTML file. No external runtime deps. Earlier attempt to use `saucelabs/network-viewer` via `esm.sh` was abandoned because (a) `network-viewer@2.4.x` crashes on render via the esm.sh transform with `Cannot read properties of null (reading 'timings')`, (b) mirroring saucelabs' own pre-built bundle introduces brand drift and a heavy 1.15 MB dep, and (c) the user wanted full control over the look and feel. |

When adding a new tool: scaffold the `pages/tools/<slug>.vue` page (copy `har-viewer.vue` as a template), drop the standalone app under `public/tools/<slug>-app/`, surface it on `pages/index.vue` + `pages/tools/index.vue`, and add the route to `nuxt.config.ts > sitemap.urls`.

## Reference repository (the source of look & feel)

The sibling repo `../randylabs.github.io` is the canonical Randy labs marketing site. **Read it before designing anything here.** Look-and-feel, component conventions, color tokens, typography, deploy pipeline, and SEO composable should all be copied or imported from there. Treat it as a design-system reference.

Specifically, when scaffolding or adding pages here:

- **Stack**: Nuxt 3 (`nuxt ^3.16.2`), `@nuxtjs/tailwindcss`, `@nuxtjs/sitemap`. SSR is **disabled** (`ssr: false`) and the site is built as a fully static export for GitHub Pages.
- **Brand color tokens** (`tailwind.config.ts`): `rl-blue #0066ff`, `rl-green #00cc88`, `rl-purple #7c3aed`, `rl-amber #f59e0b`, `rl-navy #0f172a`, `rl-deep #0a0c14`, `rl-red #ff6b6b`. Font: **Inter** (loaded via Google Fonts in `nuxt.config.ts > app.head.link`).
- **Page rhythm** (see `pages/digital-rights-enforcement.vue` for a complete template): dark hero on `bg-rl-deep` with subtle grid + radial-gradient overlays, alternating `bg-rl-navy` sections, gradient text spans (`from-[#4d9fff] to-rl-green`), `CapabilityRow` blocks with a features list + bespoke visual panel, ending with a CTA section + `SiteFooter`.
- **Component auto-import** pattern (`nuxt.config.ts > components`): directories `~/components/layout`, `~/components/home`, `~/components/shared` are registered with no prefix, so `<SiteNavbar/>`, `<SiteFooter/>`, `<CtaSection/>`, `<CapabilityRow/>` etc. just work. Mirror this layout when scaffolding here, but use a topic-appropriate folder (e.g. `~/components/dmca`) instead of `home`.
- **SEO**: every page calls `useSeo({ title, description, path })` from `composables/useSeo.ts`. Copy this composable verbatim, then change the canonical/OG host from `randylabs.com` to `copyright-abuses.com` and the default OG image to a Randy-Labs-branded asset hosted on this site. Each new page must call `useSeo` at the top of `<script setup>`.
- **Sitemap**: list every public route in `nuxt.config.ts > sitemap.urls` with a sensible `changefreq` / `priority`.
- **Randy-Labs attribution**: the navbar/footer must make it visually obvious this is a Randy labs property (logo + "A Randy labs domain" line + link to `https://randylabs.com`). Reuse `SiteNavbar.vue` / `SiteFooter.vue` from the reference repo as starting points.

## Common commands (once scaffolded)

The reference repo's `package.json` defines the canonical scripts — replicate them:

```bash
npm install                # install deps
npm run dev                # nuxi dev — hot reload at localhost:3000
npm run build              # nuxi build
npm run generate           # nuxi generate — produces ./dist for GitHub Pages
npm run preview            # nuxi preview — preview the production build
```

There are **no tests** in the reference repo and none are expected here unless an interactive DMCA tool with non-trivial logic gets added — at which point colocate Vitest specs next to the utility.

## GitHub Pages deployment

Copy `.github/workflows/nuxtjs.yml` from the reference repo verbatim. It:

- Runs on push to `main` (and manual dispatch).
- Installs deps with `npm ci`, runs `npm run generate`, and uploads `./dist` as the Pages artifact.
- A separate `deploy` job publishes to the `github-pages` environment.

Because deploy is on `main`, treat `main` as production. Iterate on a branch and merge when ready.

## Conventions worth knowing

- **No backend.** This is a static site. Any "tool" must be 100% client-side (Nuxt SPA / generated HTML + browser JS). If a feature genuinely needs a server, raise it before building — the reference repo's certification system is a worked example of static-only token gating.
- **Don't introduce a CMS, headless DB, or build-time secrets.** Content goes in `.vue` files (or static JSON in `public/`) and is reviewed in PRs.
- **Custom domain.** This repo deploys to `copyright-abuses.com` via GitHub Pages — when adding a new public route, also add it to the sitemap.
- **Legal copy.** The DMCA content is informational, not legal advice. Any explainer page should carry a clear "this is not legal advice — consult counsel" disclaimer near the top.
