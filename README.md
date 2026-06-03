# copyright-abuses.com

Public site for **copyright-abuses.com**, a domain operated by [Randy labs](https://randylabs.com).

The site exists to:

1. State openly that the domain belongs to Randy labs.
2. Host plain-language information about DMCA takedown notices and copyright enforcement.
3. Provide free, in-browser tools for working with notices and related evidence (HAR files, etc.).

## Stack

Nuxt 3 SPA → static export → GitHub Pages. Mirrors the conventions of the sister repo [`randylabs.github.io`](../randylabs.github.io) (brand tokens, `useSeo` composable, component auto-import, deploy workflow). See `CLAUDE.md` for architectural notes.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run generate     # static build → ./dist
npm run preview
```

## Tools architecture

Each tool under `/tools/<slug>` is a Nuxt page that frames a **standalone static mini-app** living in `public/tools/<slug>-app/`. This lets each tool ship its own dependencies (e.g. React for the HAR viewer) without polluting the marketing-site bundle.

| Tool | Nuxt route | Standalone app | Powered by |
|------|------------|----------------|------------|
| HAR Viewer | `pages/tools/har-viewer.vue` | `public/tools/har-viewer-app/index.html` | [saucelabs/network-viewer](https://github.com/saucelabs/network-viewer) (loaded via esm.sh) |

To add a new tool: create a `pages/tools/<slug>.vue` Nuxt page, drop the standalone app under `public/tools/<slug>-app/`, iframe it from the page, and add the slug to the homepage / `/tools` index and to `nuxt.config.ts > sitemap.urls`.

## Deploy

Push to `main` → `.github/workflows/nuxtjs.yml` runs `npm run generate` and deploys `./dist` to GitHub Pages.

The `public/CNAME` file pins the deploy to `copyright-abuses.com`.

## License & disclaimer

Content on this site is informational only and is not legal advice.
