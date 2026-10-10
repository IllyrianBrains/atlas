# Guide templates

Copy `country-guide.html` to `src/data/atlas/<slug>.html` for country content, or
copy `city-guide.html` to `src/data/cities/<slug>.html` for city content.

Keep the destination set to `draft` while writing and reviewing. Change `status`
to `published` in `src/data/atlas.ts` or `src/data/cities.ts` only when the guide
is ready. Production routes, navigation, catalogue links, and map links are all
controlled by that status.

The production build fails when a destination is marked `published` without a
matching HTML guide. This prevents empty published pages.

Country guides contain national rules. City guides contain local offices,
transport, housing areas, and community contacts. Avoid copying national content
into every city guide; link back to the country guide instead.

Every country guide must keep the four top-level `<h1>` sections from the country
template, in the same order. Use `<h2>` and `<h3>` only inside those sections.
