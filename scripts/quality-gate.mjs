import fs from 'node:fs';
import path from 'node:path';

// Post-build quality gate. Run after `npm run build`.
const dist = 'dist';
if (!fs.existsSync(dist)) { console.error('dist/ missing — run npm run build first'); process.exit(1); }

const walk = (d, acc = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
};

const files = walk(dist).filter(f => f.endsWith('.html'));
const pageOf = f => f.replace(/^dist/, '').replace(/index\.html$/, '') || '/';
const exists = urlPath => {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return true;
  let f = path.join(dist, decodeURIComponent(clean));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f) && fs.existsSync(f + '.html')) f = f + '.html';
  return fs.existsSync(f);
};

const problems = [];
const titles = new Map();
const descriptions = new Map();
const typeCounts = {};
const inbound = new Map();

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const page = pageOf(f);

  // links
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(h)) continue;
    if (!exists(h)) problems.push(`broken link: ${page} -> ${h}`);
    else {
      const target = h.split('#')[0].split('?')[0];
      if (target && target !== page) inbound.set(target, (inbound.get(target) || 0) + 1);
    }
  }

  // images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) problems.push(`img without alt: ${page}`);
  }

  // metadata
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!title) problems.push(`missing title: ${page}`);
  if (!desc) problems.push(`missing meta description: ${page}`);
  titles.set(title, (titles.get(title) || 0) + 1);
  descriptions.set(desc, (descriptions.get(desc) || 0) + 1);

  // headings
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`h1 count ${h1}: ${page}`);

  // duplicate ids
  const seen = new Set();
  for (const m of html.matchAll(/\sid="([^"]+)"/g)) {
    if (seen.has(m[1])) problems.push(`duplicate id #${m[1]}: ${page}`);
    seen.add(m[1]);
  }

  // structured data
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const types = [];
  for (const b of blocks) {
    let obj;
    try { obj = JSON.parse(b.replace(/&quot;/g, '"')); }
    catch { problems.push(`invalid JSON-LD: ${page}`); continue; }
    const t = obj['@type'];
    types.push(t);
    typeCounts[t] = (typeCounts[t] || 0) + 1;
    if (t === 'Product' && (!obj.name || !obj.description)) problems.push(`Product schema incomplete: ${page}`);
    if (t === 'Product' && obj.offers?.price === '0') problems.push(`placeholder offer price: ${page}`);
    if (t === 'BreadcrumbList' && !Array.isArray(obj.itemListElement)) problems.push(`BreadcrumbList incomplete: ${page}`);
    if (t === 'FAQPage' && !Array.isArray(obj.mainEntity)) problems.push(`FAQPage incomplete: ${page}`);
    if (t === 'TechArticle' && (!obj.headline || !obj.description)) problems.push(`TechArticle incomplete: ${page}`);
  }
  if (/^\/products\/[^/]+\/[^/]+\//.test(page) && !types.includes('Product')) problems.push(`missing Product schema: ${page}`);
  if (/^\/knowledge\/[^/]+\//.test(page) && !types.includes('TechArticle')) problems.push(`missing TechArticle schema: ${page}`);
}

for (const [t, c] of titles) if (c > 1 && t) problems.push(`duplicate title (${c}x): ${t}`);
for (const [d, c] of descriptions) if (c > 1 && d) problems.push(`duplicate description (${c}x): ${d.slice(0, 60)}`);

// orphan report (informational)
const orphans = [...inbound.entries()].filter(([, n]) => n === 0).map(([p]) => p);

console.log(`pages: ${files.length}`);
console.log('schema:', JSON.stringify(typeCounts));
if (orphans.length) console.log('no inbound links:', orphans.join(', '));
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(' -', p);
  process.exit(1);
}
console.log('quality gate: PASS (0 problems)');
