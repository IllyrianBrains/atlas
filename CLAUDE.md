# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Astro static site for the **Illyrian Brains Atlas** — country-by-country practical
guides for the diaspora (documents, immigration, integration, networking), intended
to be deployed at `atlas.illyrianbrains.org` as a subdomain of the main
`illyrianbrains.org` site. Split out of that main site's repo so Atlas content
(images especially) doesn't bloat it. Content is in Albanian (`sq`).

- `src/pages/index.astro` — country catalogue and map; `src/pages/[slug].astro` —
  shared country/city guide route
- `src/components/Header.astro`, `Footer.astro` — adapted from the main site: every
  nav link other than Atlas itself is an absolute URL back to `illyrianbrains.org`,
  since this is a separate deploy on a different (sub)domain. The main site's
  cross-page search feature was dropped here (it depends on the main site's
  cities/members data, which doesn't exist in this repo).
- `src/layouts/BaseLayout.astro` — shared `<head>`/shell, copied from the main site
- `src/data/atlas.ts` — country records and the combined destination index
- `src/data/cities.ts` — city records, parent country, map coordinates, and status
- `src/data/atlas/*.html` — country guide content
- `src/data/cities/*.html` — city guide content; see its README for the publishing flow
- `src/data/templates/*.html` — copyable country and city editorial structures
- `public/assets/atlas/` — guide images migrated from the community forum
- `src/styles/*.css` — copied from the main site's stylesheets (duplicated on purpose;
  this repo builds and deploys independently)

No test suite, linter, or formatter. `npm run build` (Astro build) is the closest
thing to a correctness check — run it after non-trivial changes.

## Content sync

`npm run atlas:sync` (Python + `beautifulsoup4`) re-fetches forum guides into
`src/data/atlas/*.html`, downloading images into `public/assets/atlas/`. Curated city
guides live separately in `src/data/cities/` and are skipped by the sync. It doesn't
run automatically — re-run by hand when the forum content changes, review the diff,
then commit.

## Working style

Same as the main `illyrianbrains.org` repo: make the smallest change that satisfies
the request, don't bundle unrelated fixes/refactors, don't add dependencies or
tooling unless asked, match the surrounding code's style, run `npm run build` before
calling a change done.

## Relationship to the main site

This was split out of `illyrianbrains.org`'s repo (the sibling `../website/` folder)
on 2026-09-13. If something looks off between the two (a stale link, a diverged
stylesheet), check whether the main site changed and this repo needs to catch up —
the two no longer share files, so nothing here updates automatically.
