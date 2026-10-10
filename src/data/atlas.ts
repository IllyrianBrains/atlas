import { atlasCities, type AtlasCity } from './cities';
import type { AtlasBaseDestination } from './types';

export interface AtlasCountry extends AtlasBaseDestination { priorities?: string[]; }
export type AtlasDestination = AtlasCountry | AtlasCity;

export const atlasCountries: AtlasCountry[] = [
  { slug:'gjermani', title:'Gjermani', flag:'🇩🇪', status:'published', priorities:['Regjistro adresën (Anmeldung)', 'Sigurohu në sistemin shëndetësor', 'Hap llogarinë bankare'] },
  { slug:'zvicer', title:'Zvicër', flag:'🇨🇭', status:'published', priorities:['Regjistrohu në komunë', 'Bëj sigurimin brenda 3 muajve', 'Kontrollo kushtet e lejes së punës'] },
  { slug:'austri', title:'Austri', flag:'🇦🇹', status:'published', priorities:['Regjistro banimin brenda 3 ditëve', 'Kontrollo lejen e qëndrimit', 'Aktivizo sigurimet sociale'] },
  { slug:'france', title:'Francë', flag:'🇫🇷', status:'published', priorities:['Siguro dokumentin e qëndrimit', 'Hap llogarinë bankare', 'Regjistrohu për mbulim shëndetësor'] },
  { slug:'finlande', title:'Finlandë', flag:'🇫🇮', status:'published', priorities:['Apliko për lejen përmes Migri', 'Regjistro adresën dhe identitetin', 'Hap llogari bankare'] },
  { slug:'suedi', title:'Suedi', flag:'🇸🇪', status:'published', priorities:['Apliko te Migrationsverket', 'Merr personnummer', 'Aktivizo BankID'] },
  { slug:'malte', title:'Maltë', flag:'🇲🇹', status:'published', priorities:['Kontrollo lejen e punës', 'Siguro një adresë banimi', 'Regjistro shërbimet bazë'] },
  { slug:'itali', title:'Itali', flag:'🇮🇹', status:'published', priorities:['Kontrollo lejen e qëndrimit', 'Regjistro adresën e banimit', 'Aktivizo shërbimin shëndetësor'] },
  { slug:'mbreteria-e-bashkuar', title:'Mbretëria e Bashkuar', flag:'🇬🇧', status:'published', priorities:['Kontrollo vizën përkatëse', 'Siguro provën e adresës', 'Merr National Insurance number'] },
  { slug:'danimarke', title:'Danimarkë', flag:'🇩🇰', status:'draft' }, { slug:'poloni', title:'Poloni', flag:'🇵🇱', status:'draft' },
  { slug:'norvegji', title:'Norvegji', flag:'🇳🇴', status:'draft' }, { slug:'ceki', title:'Çeki', flag:'🇨🇿', status:'draft' },
  { slug:'holande', title:'Holandë', flag:'🇳🇱', status:'draft' }, { slug:'belgjike', title:'Belgjikë', flag:'🇧🇪', status:'draft' },
  { slug:'irlande', title:'Irlandë', flag:'🇮🇪', status:'draft' }, { slug:'luksemburg', title:'Luksemburg', flag:'🇱🇺', status:'draft' },
  { slug:'spanje', title:'Spanjë', flag:'🇪🇸', status:'draft' }, { slug:'shqiperi', title:'Shqipëri', flag:'🇦🇱', status:'draft' },
  { slug:'shba', title:'Shtetet e Bashkuara', flag:'🇺🇸', status:'draft' },
];

export const atlasDestinations: AtlasDestination[] = [...atlasCountries, ...atlasCities];
export const publishedDestinations = atlasDestinations.filter((destination) => destination.status === 'published');
export const atlasCountryGroups = atlasCountries.map((country) => ({ ...country, cities: atlasCities.filter((city) => city.countrySlug === country.slug) }));

export function getParentCountry(destination: AtlasDestination) {
  return 'countrySlug' in destination ? atlasCountries.find((country) => country.slug === destination.countrySlug) : undefined;
}
