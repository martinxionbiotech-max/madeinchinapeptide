# i18n translation brief (es / pt / ar)

Repo: `/home/ubuntu/work/madeinchinapeptide` — Astro 5, static, brand **Made in China Peptide** (MICP).

You are translating existing English pages into Spanish (`es`), Portuguese (`pt`) or Arabic (`ar`). Translate meaning, not word order. Keep every section, table, list, disclaimer and internal link. Do not add facts, numbers, certifications, client names or claims that are not in the source.

## File locations

- Knowledge article: `src/pages/{lang}/knowledge/{slug}.astro`
- Compliance page: `src/pages/{lang}/compliance/{slug}.astro`

Import depth for both: `../../../layouts/BaseLayout.astro`, `../../../components/Breadcrumbs.astro`, `../../../components/ArticleSchema.astro` (articles only). Compliance pages that use `site` import `../../../data/site`.

## Required head

```astro
<BaseLayout
  lang="{lang}"
  title="..."
  description="..."
  canonical="/{lang}/{section}/{slug}/"
  alternates={[
    { hreflang: 'en', href: `https://madeinchinapeptide.com/{section}/{slug}/` },
    { hreflang: 'es', href: `https://madeinchinapeptide.com/es/{section}/{slug}/` },
    { hreflang: 'pt', href: `https://madeinchinapeptide.com/pt/{section}/{slug}/` },
    { hreflang: 'ar', href: `https://madeinchinapeptide.com/ar/{section}/{slug}/` },
    { hreflang: 'x-default', href: `https://madeinchinapeptide.com/{section}/{slug}/` },
  ]}
>
```

`{section}` is `knowledge` or `compliance`.

- `title` ≤ 65 characters, `description` ≤ 160 characters, in the target language.
- Keep the English product names, CAS numbers, method names (HPLC, MS), standards and units unchanged.

## Breadcrumbs

- es: `Inicio` → `/{lang}/`, `Conocimiento` → `/{lang}/knowledge/` or `Cumplimiento` → `/{lang}/compliance/`
- pt: `Início`, `Conhecimento`, `Conformidade`
- ar: `الرئيسية`, `المعرفة`, `الامتثال`

## Research-use disclaimer (must appear verbatim at the end, in a `.ruo` block)

- es: `Solo para uso en investigación de laboratorio; no apto para uso humano o veterinario.`
- pt: `Apenas para uso em pesquisa laboratorial; não indicado para uso humano ou veterinário.`
- ar: `للاستخدام البحثي المخبري فقط، وليس للاستخدام البشري أو البيطري.`

## Knowledge articles only

- Keep `ArticleSchema`, with `lang="{lang}"`, translated `title`/`description`, `path="/{lang}/knowledge/{slug}/"` and a translated `section`.
- Translate the FAQPage JSON-LD questions and answers; keep the JSON structure valid.
- Internal links to other English knowledge articles stay as they are (those pages are not translated yet). Links to home/contact/knowledge hub must be localized: `/{lang}/`, `/{lang}/contact/`, `/{lang}/knowledge/`.
- Preserve `<div class="quick-answer">`, `<div class="note">`, tables and all headings.

## Compliance pages only

- No ArticleSchema, no FAQ schema.
- Preserve section numbering, defined terms, legal meaning, dates, version numbers, entity descriptions and the contact email exactly.
- Breadcrumb middle item: localized "Compliance" linking to `/{lang}/compliance/`.
- Legal text must stay conservative: do not add arbitration venues, liability caps, governing law or retention periods that are not in the source.

## Output rules

- Write only the files assigned to you. Never edit English pages, other languages, config or shared components.
- Do not run `npm run build` or start a dev server.
- Keep valid Astro/HTML: escape `&` as `&amp;` inside text, keep attribute quotes.
- Report the file paths and word counts when done.
