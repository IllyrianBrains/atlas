# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Astro static site for the **Illyrian Brains Atlas** — country-by-country practical
guides for the diaspora (documents, immigration, integration, networking), intended
to be deployed at `atlas.illyrianbrains.org` as a subdomain of the main
`illyrianbrains.org` site. Split out of that main site's repo so Atlas content
(images especially) doesn't bloat it. Content is in Albanian (`sq`).

- `src/pages/index.astro` — country list; `src/pages/[slug].astro` — per-country guide
- `src/components/Header.astro`, `Footer.astro` — adapted from the main site: every
  nav link other than Atlas itself is an absolute URL back to `illyrianbrains.org`,
  since this is a separate deploy on a different (sub)domain. The main site's
  cross-page search feature was dropped here (it depends on the main site's
  cities/members data, which doesn't exist in this repo).
- `src/layouts/BaseLayout.astro` — shared `<head>`/shell, copied from the main site
- `src/data/atlas.ts` — the list of countries (`AtlasCountry`)
- `src/data/atlas/*.html`, `public/assets/atlas/` — HTML fragments and images migrated
  from the community forum (see Content sync below)
- `src/styles/*.css` — copied from the main site's stylesheets (duplicated on purpose;
  this repo builds and deploys independently)

No test suite, linter, or formatter. `npm run build` (Astro build) is the closest
thing to a correctness check — run it after non-trivial changes.

## Content sync

`npm run atlas:sync` (Python + `beautifulsoup4`) re-fetches the country guides from
`forum.illyrianbrains.org`'s IB Atlas category into `src/data/atlas/*.html`,
downloading images into `public/assets/atlas/`. Doesn't run automatically — re-run by
hand when the forum content changes, review the diff, then commit.

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
