// Cities marked `active` in ../website/src/data/cities.csv.
// `malta` is represented by the existing Atlas `valletta` entry.
export const networkCitySlugs = new Set([
  'berlin', 'dusseldorf', 'frankfurt', 'koln', 'munich', 'nurnberg', 'stuttgart',
  'vienna', 'zurich', 'copenhagen', 'helsinki', 'krakow', 'stockholm', 'malmo',
  'oslo', 'prague', 'amsterdam', 'brussels', 'dublin', 'london', 'luxembourg',
  'madrid', 'manchester', 'paris', 'south-england', 'firenze', 'genova', 'valletta',
  'milano', 'parma', 'roma', 'tirana', 'trento', 'boston', 'new-york',
  'philadelphia', 'tampa', 'washington', 'new-jersey',
]);

export const isNetworkCity = (slug: string) => networkCitySlugs.has(slug);

export interface NetworkCitySpecifics {
  summary?: string;
  activities?: string[];
  instagramUrl?: string;
}

// Add city-specific copy here; the country directory renders every populated
// field automatically. URLs below mirror ../website/src/data/cities.csv.
export const networkCitySpecifics: Record<string, NetworkCitySpecifics> = {
  berlin: {
    summary: 'Komunitet lokal për profesionistë, studentë dhe krijues shqiptarë në Berlin.',
    activities: ['Happy Hours', 'Biseda tematike', 'Grupe profesionale dhe sociale'],
  },
  frankfurt: { instagramUrl: 'https://www.instagram.com/illyrianbrains_frankfurt/' },
  vienna: { instagramUrl: 'https://www.instagram.com/illyrianbrainsvienna/' },
  malmo: { instagramUrl: 'https://www.instagram.com/illyrianbrains.malmo/' },
  brussels: { instagramUrl: 'https://www.instagram.com/illyrianbrainsbrussels/' },
  luxembourg: { instagramUrl: 'https://www.instagram.com/illyrianbrains.luxembourg/' },
  paris: { instagramUrl: 'https://www.instagram.com/illyrianbrainsparis/' },
  firenze: { instagramUrl: 'https://www.instagram.com/illyrianbrains_firenze/' },
  genova: { instagramUrl: 'https://www.instagram.com/illyrianbrains_genova/' },
  milano: { instagramUrl: 'https://www.instagram.com/illyrianbrains_milano/' },
  parma: { instagramUrl: 'https://www.instagram.com/illyrianbrains_parma/' },
  roma: { instagramUrl: 'https://www.instagram.com/illyrianbrainsroma/' },
  tampa: { instagramUrl: 'https://www.instagram.com/illyrianbrainstampabay/' },
  stuttgart: { instagramUrl: 'https://www.instagram.com/illyrianbrains_stuttgart/' },
};

export const networkCityProfileUrl = (slug: string) =>
  `https://illyrianbrains.org/qytetet/${slug === 'valletta' ? 'malta' : slug}/`;

