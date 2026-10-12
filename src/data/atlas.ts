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
  { slug:'danimarke', title:'Danimarkë', flag:'🇩🇰', status:'published', priorities:['Kontrollo lejen e qëndrimit', 'Regjistro adresën dhe merr CPR', 'Aktivizo MitID dhe kartën shëndetësore'] }, { slug:'poloni', title:'Poloni', flag:'🇵🇱', status:'published', priorities:['Kontrollo vizën ose lejen', 'Regjistro adresën dhe PESEL-in', 'Aktivizo sigurimin shëndetësor'] },
  { slug:'norvegji', title:'Norvegji', flag:'🇳🇴', status:'published', priorities:['Kontrollo lejen te UDI', 'Regjistrohu te policia dhe Skatteetaten', 'Merr numrin e identitetit dhe tax card'] }, { slug:'ceki', title:'Çeki', flag:'🇨🇿', status:'published', priorities:['Kontrollo vizën ose lejen', 'Regjistro mbërritjen', 'Siguro mbulimin shëndetësor'] },
  { slug:'holande', title:'Holandë', flag:'🇳🇱', status:'published', priorities:['Regjistrohu në bashki', 'Merr BSN dhe DigiD', 'Aktivizo sigurimin shëndetësor'] }, { slug:'belgjike', title:'Belgjikë', flag:'🇧🇪', status:'published', priorities:['Regjistrohu në komunë', 'Kontrollo lejen e qëndrimit', 'Anëtarësohu në një fond shëndetësor'] },
  { slug:'irlande', title:'Irlandë', flag:'🇮🇪', status:'published', priorities:['Kontrollo vizën dhe lejen', 'Regjistro IRP-në', 'Apliko për PPS Number'] }, { slug:'luksemburg', title:'Luksemburg', flag:'🇱🇺', status:'published', priorities:['Merr autorizimin para mbërritjes', 'Deklaro ardhjen në komunë', 'Aktivizo sigurimet shoqërore'] },
  { slug:'spanje', title:'Spanjë', flag:'🇪🇸', status:'published', priorities:['Kontrollo vizën ose lejen', 'Regjistrohu në padrón', 'Merr NIE/TIE dhe sigurimin shëndetësor'] }, { slug:'shqiperi', title:'Shqipëri', flag:'🇦🇱', status:'published', priorities:['Regjistro adresën dhe gjendjen civile', 'Aktivizo shërbimet në e-Albania', 'Kontrollo sigurimet shëndetësore e shoqërore'] },
  { slug:'kosove', title:'Kosovë', flag:'🇽🇰', status:'published', priorities:['Regjistro adresën e banimit', 'Aktivizo llogarinë në eKosova', 'Kontrollo sigurimin dhe dokumentet'] },
  { slug:'shba', title:'Shtetet e Bashkuara', flag:'🇺🇸', status:'published', priorities:['Kontrollo statusin e emigracionit', 'Apliko për SSN nëse kualifikohesh', 'Siguro mbulimin shëndetësor'] },
];

export const atlasDestinations: AtlasDestination[] = [...atlasCountries, ...atlasCities];
export const publishedDestinations = atlasDestinations.filter((destination) => destination.status === 'published');
export const atlasCountryGroups = atlasCountries.map((country) => ({ ...country, cities: atlasCities.filter((city) => city.countrySlug === country.slug) }));

export function getParentCountry(destination: AtlasDestination) {
  return 'countrySlug' in destination ? atlasCountries.find((country) => country.slug === destination.countrySlug) : undefined;
}
