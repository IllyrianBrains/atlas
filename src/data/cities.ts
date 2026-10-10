import type { AtlasBaseDestination } from './types';

export interface AtlasCity extends AtlasBaseDestination {
  countrySlug: string;
  lat: number;
  lng: number;
  priorities?: string[];
}

// Active network cities. Published cities have a dedicated Atlas guide;
// drafts keep a stable route and can be filled independently.
export const atlasCities: AtlasCity[] = [
  {slug:'berlin',title:'Berlin',flag:'🇩🇪',countrySlug:'gjermani',lat:52.52,lng:13.405,status:'draft'},
  {slug:'dusseldorf',title:'Düsseldorf',flag:'🇩🇪',countrySlug:'gjermani',lat:51.2277,lng:6.7735,status:'draft'},
  {slug:'frankfurt',title:'Frankfurt',flag:'🇩🇪',countrySlug:'gjermani',lat:50.1109,lng:8.6821,status:'draft'},
  {slug:'koln',title:'Köln / Cologne',flag:'🇩🇪',countrySlug:'gjermani',lat:50.9375,lng:6.9603,status:'draft'},
  {slug:'munich',title:'Munich',flag:'🇩🇪',countrySlug:'gjermani',lat:48.1351,lng:11.582,status:'draft'},
  {slug:'nurnberg',title:'Nürnberg',flag:'🇩🇪',countrySlug:'gjermani',lat:49.4521,lng:11.0767,status:'draft'},
  {slug:'stuttgart',title:'Stuttgart',flag:'🇩🇪',countrySlug:'gjermani',lat:48.7758,lng:9.1829,status:'draft'},
  {slug:'zurich',title:'Zurich',flag:'🇨🇭',countrySlug:'zvicer',lat:47.3769,lng:8.5417,status:'draft'},
  {slug:'vienna',title:'Vienna',flag:'🇦🇹',countrySlug:'austri',lat:48.2082,lng:16.3738,status:'draft'},
  {slug:'paris',title:'Paris',flag:'🇫🇷',countrySlug:'france',lat:48.8566,lng:2.3522,status:'draft'},
  {slug:'helsinki',title:'Helsinki',flag:'🇫🇮',countrySlug:'finlande',lat:60.1699,lng:24.9384,status:'draft'},
  {slug:'stockholm',title:'Stockholm',flag:'🇸🇪',countrySlug:'suedi',lat:59.3293,lng:18.0686,status:'draft'},
  {slug:'malmo',title:'Malmö',flag:'🇸🇪',countrySlug:'suedi',lat:55.605,lng:13.0038,status:'draft'},
  {slug:'firenze',title:'Firenze',flag:'🇮🇹',countrySlug:'itali',lat:43.7696,lng:11.2558,status:'draft'},
  {slug:'genova',title:'Genova',flag:'🇮🇹',countrySlug:'itali',lat:44.4056,lng:8.9463,status:'draft'},
  {slug:'milano',title:'Milano',flag:'🇮🇹',countrySlug:'itali',lat:45.4642,lng:9.19,status:'draft'},
  {slug:'parma',title:'Parma',flag:'🇮🇹',countrySlug:'itali',lat:44.8015,lng:10.3279,status:'draft'},
  {slug:'roma',title:'Roma',flag:'🇮🇹',countrySlug:'itali',lat:41.9028,lng:12.4964,status:'draft'},
  {slug:'trento',title:'Trento',flag:'🇮🇹',countrySlug:'itali',lat:46.0748,lng:11.1217,status:'published',priorities:['Kontakto Cinformi', 'Apliko për lejen e qëndrimit', 'Regjistrohu në shëndetësi']},
  {slug:'london',title:'London',flag:'🇬🇧',countrySlug:'mbreteria-e-bashkuar',lat:51.5072,lng:-.1276,status:'draft'},
  {slug:'manchester',title:'Manchester',flag:'🇬🇧',countrySlug:'mbreteria-e-bashkuar',lat:53.4808,lng:-2.2426,status:'draft'},
  {slug:'south-england',title:'South England (Cheltenham)',flag:'🇬🇧',countrySlug:'mbreteria-e-bashkuar',lat:51.8994,lng:-2.0783,status:'draft'},
  {slug:'oxford',title:'Oxford',flag:'🇬🇧',countrySlug:'mbreteria-e-bashkuar',lat:51.752,lng:-1.258,status:'published',priorities:['Kontrollo statusin e vizës', 'Siguro banesën', 'Regjistrohu te mjeku i familjes']},
  {slug:'copenhagen',title:'Copenhagen',flag:'🇩🇰',countrySlug:'danimarke',lat:55.6761,lng:12.5683,status:'draft'},
  {slug:'krakow',title:'Krakow',flag:'🇵🇱',countrySlug:'poloni',lat:50.0647,lng:19.945,status:'draft'},
  {slug:'oslo',title:'Oslo',flag:'🇳🇴',countrySlug:'norvegji',lat:59.9139,lng:10.7522,status:'draft'},
  {slug:'prague',title:'Prague',flag:'🇨🇿',countrySlug:'ceki',lat:50.0755,lng:14.4378,status:'draft'},
  {slug:'amsterdam',title:'Amsterdam',flag:'🇳🇱',countrySlug:'holande',lat:52.3676,lng:4.9041,status:'draft'},
  {slug:'brussels',title:'Brussels',flag:'🇧🇪',countrySlug:'belgjike',lat:50.8503,lng:4.3517,status:'draft'},
  {slug:'dublin',title:'Dublin',flag:'🇮🇪',countrySlug:'irlande',lat:53.3498,lng:-6.2603,status:'draft'},
  {slug:'luxembourg',title:'Luxembourg',flag:'🇱🇺',countrySlug:'luksemburg',lat:49.6116,lng:6.1319,status:'draft'},
  {slug:'madrid',title:'Madrid',flag:'🇪🇸',countrySlug:'spanje',lat:40.4168,lng:-3.7038,status:'draft'},
  {slug:'tirana',title:'Tirana',flag:'🇦🇱',countrySlug:'shqiperi',lat:41.3275,lng:19.8187,status:'draft'},
  {slug:'boston',title:'Boston',flag:'🇺🇸',countrySlug:'shba',lat:42.3601,lng:-71.0589,status:'draft'},
  {slug:'new-york',title:'New York',flag:'🇺🇸',countrySlug:'shba',lat:40.7128,lng:-74.006,status:'draft'},
  {slug:'new-jersey',title:'New Jersey',flag:'🇺🇸',countrySlug:'shba',lat:40.0583,lng:-74.4057,status:'draft'},
  {slug:'philadelphia',title:'Philadelphia',flag:'🇺🇸',countrySlug:'shba',lat:39.9526,lng:-75.1652,status:'draft'},
  {slug:'tampa',title:'Tampa',flag:'🇺🇸',countrySlug:'shba',lat:27.9506,lng:-82.4572,status:'draft'},
  {slug:'washington',title:'Washington',flag:'🇺🇸',countrySlug:'shba',lat:38.9072,lng:-77.0369,status:'draft'},
];
