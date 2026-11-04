import sharp from 'sharp';
import fs from 'node:fs';

// One-off asset rendering: OG image (1200x630 PNG) and Apple touch icon (180x180).
// Re-run only when the source SVGs change: node scripts/render-assets.mjs
await sharp('public/images/og-default.svg', { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile('public/images/og-default.png');

await sharp('public/favicon.svg', { density: 384 })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile('public/apple-touch-icon.png');

for (const f of ['public/images/og-default.png', 'public/apple-touch-icon.png']) {
  console.log(f, fs.statSync(f).size, 'bytes');
}
