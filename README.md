# madeinchinapeptide.com

Static Astro site for a research-peptide B2B supply channel (wholesale / OEM). All content is
research-use-only; no medical, dosage or efficacy claims, and no invented certificates, test
results or customer references.

## Stack

- Astro 5, static output, sitemap integration
- No client-side framework, no external fonts or analytics
- Markdown negotiation via Cloudflare Pages Functions (`functions/_middleware.js`) plus
  build-time `_md/*.md` generation (`scripts/generate-markdown.mjs`)

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro build + markdown generation
npm run check      # post-build quality gate (links, schema, alt, titles, h1)
npm run preview
```

`npm run build` must finish with 0 errors. `npm run check` must print `quality gate: PASS`.

## Structure

```
src/data/         product catalogue, article index, site constants
src/layouts/      BaseLayout (meta, OG, Organization + WebSite JSON-LD)
src/components/   Header, Footer, Breadcrumbs, ArticleSchema
src/pages/        routes: products, knowledge, quality, compare, compliance
public/           favicon, OG image, product illustrations, robots.txt, llms.txt, _headers
functions/        markdown content negotiation middleware
scripts/          markdown generation, quality gate
```

## Deployment (Cloudflare Pages)

1. Push the repository to GitHub (or GitLab).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20 or 22 (`NODE_VERSION` env var)
4. Custom domain: add `madeinchinapeptide.com` and `www`, then point the registrar's
   nameservers at Cloudflare. Enable "Always Use HTTPS".
5. After the first deploy, verify:
   - `/` returns 200 over HTTPS
   - `curl -H 'Accept: text/markdown' https://madeinchinapeptide.com/knowledge/` returns Markdown
   - `https://madeinchinapeptide.com/sitemap-index.xml` resolves
   - `_headers` rules applied (check `content-security-policy` on any page)

Do not deploy with placeholder contact details. Before launch, replace in `src/data/site.ts`:

- `whatsapp` (currently a placeholder number)
- `email` if it differs from `sales@madeinchinapeptide.com`
- `address` / factory disclosure wording

## Content rules

- Purity, COA and batch claims must be batch-specific and verifiable; never publish a
  "typical" certificate as if it applied to every lot.
- No certificate numbers, customer names, capacity figures or test results are invented.
- Every product page carries the research-use-only statement.
- Competitor material was used for factual research only; copy and images are original.
