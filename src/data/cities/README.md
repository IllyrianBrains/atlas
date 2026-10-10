# City guides

City metadata lives in `src/data/cities.ts`. Each published city guide belongs in
this directory as `<slug>.html`, using the same slug as its metadata record.

To add a city:

1. Add its metadata, coordinates, parent country, and `draft` status to
   `src/data/cities.ts`.
2. Create `src/data/cities/<slug>.html` with the local guide.
3. Start from `src/data/templates/city-guide.html` and write the local guide.
4. Change its status to `published` after editorial review.

Country-level guides remain in `src/data/atlas/`. Draft cities appear as planned
locations inside their country but do not receive public routes or links.
