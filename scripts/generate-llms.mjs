import fs from 'node:fs';
import path from 'node:path';

// Full-site llms.txt generated from the built sitemap, not hand-maintained.
const SITE = 'https://madeinchinapeptide.com';
const dist = 'dist';
const xml = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(SITE));
const uniq = [...new Set(urls)];

const pageFile = (url) => {
  const rel = new URL(url).pathname.replace(/^\//, '');
  return path.join(dist, rel, 'index.html');
};
const labelOf = (url) => {
  const f = pageFile(url);
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1) {
      const text = h1[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text) return text;
    }
  }
  const parts = new URL(url).pathname.replace(/\/$/, '').split('/').filter(Boolean);
  return (parts.at(-1) || 'Home').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};
const langOf = (u) => {
  const p = new URL(u).pathname;
  for (const l of ['es', 'pt', 'ar']) if (p === `/${l}/` || p.startsWith(`/${l}/`)) return l;
  return 'en';
};
const isProduct = (u) => /^\/products\/[^/]+\/[^/]+\/$/.test(new URL(u).pathname);
const isKnowledge = (u) => /^\/knowledge\/[^/]+\/$/.test(new URL(u).pathname);
const groups = {
  core: [], products: [], knowledge: [], es: [], pt: [], ar: [],
};
for (const u of uniq.sort()) {
  const l = langOf(u);
  if (l !== 'en') groups[l].push(u);
  else if (isProduct(u)) groups.products.push(u);
  else if (isKnowledge(u)) groups.knowledge.push(u);
  else groups.core.push(u);
}
const line = (u) => `- [${labelOf(u)}](${u})`;
const section = (title, arr) => arr.length ? `## ${title} (${arr.length})\n\n${arr.map(line).join('\n')}\n` : '';
const out = `# Made in China Peptide

> B2B sourcing channel for research-grade peptides manufactured in China: batch-specific COA, HPLC/MS data, bulk and OEM supply for laboratories, distributors and research brands.

- Canonical site: ${SITE}
- Catalogue: ${groups.products.length} product detail pages
- Knowledge base: ${groups.knowledge.length} English guides
- Languages: English, Spanish (${groups.es.length}), Portuguese (${groups.pt.length}), Arabic (${groups.ar.length})
- All products are for laboratory research use only; purity is batch-specific and stated on each lot's COA.

${section('Core pages', groups.core)}
${section('Products', groups.products)}
${section('Knowledge base', groups.knowledge)}
${section('Spanish', groups.es)}
${section('Portuguese', groups.pt)}
${section('Arabic', groups.ar)}
## Machine-readable pages

Every HTML page has a Markdown sidecar at the same path with \`index.md\` instead of \`index.html\`. Request it with \`Accept: text/markdown\`.
`;
fs.writeFileSync(path.join(dist, 'llms.txt'), out);
console.log(`[llms] ${uniq.length} URLs -> dist/llms.txt`);
