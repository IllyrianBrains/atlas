export interface AtlasCountry {
  slug: string;
  title: string;
  flag: string;
  // Most guides cover a whole country; a few (Trento, Oxford) are a single city
  // within one, migrated from the forum the same way. Defaults to 'country'.
  kind?: 'country' | 'city';
}

// Real content migrated from the community forum's IB Atlas category
// (forum.illyrianbrains.org/c/nisma/ib-atlas/144) — see src/data/atlas/*.html for
// the cleaned per-country guide content, and public/assets/atlas/<slug>/ for the
// downloaded images.
export const atlasCountries: AtlasCountry[] = [
  { slug: 'gjermani', title: 'Gjermani', flag: '🇩🇪' },
  { slug: 'zvicer', title: 'Zvicër', flag: '🇨🇭' },
  { slug: 'austri', title: 'Austri', flag: '🇦🇹' },
  { slug: 'france', title: 'Francë', flag: '🇫🇷' },
  { slug: 'finlande', title: 'Finlandë', flag: '🇫🇮' },
  { slug: 'suedi', title: 'Suedi', flag: '🇸🇪' },
  { slug: 'malte', title: 'Maltë', flag: '🇲🇹' },
  { slug: 'trento', title: 'Trento (Itali)', flag: '🇮🇹', kind: 'city' },
  { slug: 'mbreteria-e-bashkuar', title: 'Mbretëria e Bashkuar', flag: '🇬🇧' },
  { slug: 'oxford', title: 'Oxford (Mbretëria e Bashkuar)', flag: '🇬🇧', kind: 'city' },
];
