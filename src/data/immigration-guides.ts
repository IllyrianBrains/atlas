export interface ImmigrationGuide {
  overview: string;
  links: { title: string; url: string; description: string }[];
}

const immigrationTuples: Record<string, [string, [string, string, string][]]> = {
  gjermani: ['Për punë, studim ose bashkim familjar kërkohet viza ose leja që përputhet me qëllimin real të qëndrimit. Qëndrimi pa vizë në Schengen nuk lejon punësim.', [
    ['Make it in Germany — Visa', 'https://www.make-it-in-germany.com/en/visa-residence', 'rrugët e vizës, kualifikimet dhe lejet e punës'],
    ['BAMF — Immigration', 'https://www.bamf.de/EN/Themen/MigrationAufenthalt/migrationaufenthalt-node.html', 'qëndrimi, integrimi dhe bashkimi familjar'],
    ['Ambasada Gjermane në Tiranë', 'https://tirana.diplo.de/al-sq/service/visa-al', 'aplikimi, terminet dhe dokumentet nga Shqipëria'],
  ]],
  zvicer: ['Shtetasit jashtë BE/EFTA përballen me kuota dhe zakonisht duhet të jenë profesionistë të kualifikuar; punëdhënësi nis procedurën para hyrjes për punë.', [
    ['SEM — Working in Switzerland', 'https://www.sem.admin.ch/sem/en/home/themen/arbeit.html', 'kushtet federale për punësim dhe leje'],
    ['ch.ch — Foreign nationals', 'https://www.ch.ch/en/foreign-nationals-in-switzerland/', 'hyrja, qëndrimi, puna dhe familja'],
    ['EU Immigration Portal — Switzerland', 'https://immigration-portal.ec.europa.eu/switzerland_en', 'rrugët kryesore sipas qëllimit të qëndrimit'],
  ]],
  austri: ['Leja duhet zgjedhur sipas punës, studimit ose familjes. Për shumë kategori, aplikimi i parë bëhet nga jashtë Austrisë dhe kërkon prova të të ardhurave, banimit e sigurimit.', [
    ['Migration Austria — Types of immigration', 'https://www.migration.gv.at/en/types-of-immigration/', 'Red-White-Red Card dhe kategori të tjera'],
    ['Residence in Austria', 'https://www.oesterreich.gv.at/en/themen/menschen_aus_anderen_staaten/aufenthalt.html', 'procedurat zyrtare të qëndrimit'],
    ['EU Immigration Portal — Austria', 'https://immigration-portal.ec.europa.eu/austria_en', 'punë, studim dhe bashkim familjar'],
  ]],
  france: ['Për qëndrim mbi 90 ditë zakonisht duhet vizë afatgjatë dhe më pas validim ose leje qëndrimi. Procedura varet nga puna, studimi, familja apo talenti.', [
    ['France-Visas', 'https://france-visas.gouv.fr/en/', 'kontrolli i vizës dhe hapat e aplikimit'],
    ['Service-Public — Residence card', 'https://www.service-public.fr/particuliers/vosdroits/N110?lang=en', 'llojet dhe rinovimi i lejeve'],
    ['EU Immigration Portal — France', 'https://immigration-portal.ec.europa.eu/france_en', 'kushtet sipas qëllimit të migrimit'],
  ]],
  finlande: ['Leja e parë për punë, studim ose familje aplikohet zakonisht online dhe kërkon verifikim identiteti. Mos e ngatërroni udhëtimin pa vizë me të drejtën për punë.', [
    ['Migri — Residence permits', 'https://migri.fi/en/residence-permit', 'kategoritë, kriteret dhe aplikimi'],
    ['Enter Finland', 'https://enterfinland.fi/eServices', 'shërbimi elektronik për aplikime'],
    ['EU Immigration Portal — Finland', 'https://immigration-portal.ec.europa.eu/finland_en', 'punë, studim dhe bashkim familjar'],
  ]],
  suedi: ['Për shumicën e shtetasve jashtë BE-së, leja për punë ose studim duhet miratuar para udhëtimit. Oferta e punës duhet të plotësojë kushtet suedeze.', [
    ['Migrationsverket — Work', 'https://www.migrationsverket.se/en/you-want-to-apply/work.html', 'lejet e punës dhe kërkesat'],
    ['Migrationsverket — Study', 'https://www.migrationsverket.se/en/you-want-to-apply/study.html', 'lejet për studime'],
    ['EU Immigration Portal — Sweden', 'https://immigration-portal.ec.europa.eu/sweden_en', 'rrugët e migrimit dhe dokumentet'],
  ]],
  malte: ['Punësimi i shtetasve jo-BE zakonisht lidhet me një ofertë pune dhe Single Permit. Aplikimi bëhet nga punëdhënësi ose përfaqësuesi sipas procedurës së Identità.', [
    ['Identità — Expatriates', 'https://identita.gov.mt/expatriates-unit-main-page/', 'lejet e qëndrimit dhe Single Permit'],
    ['Jobsplus — Foreign nationals', 'https://jobsplus.gov.mt/knowledge-base-employing-persons/employing-foreign-nationals', 'rregullat e punësimit'],
    ['EU Immigration Portal — Malta', 'https://immigration-portal.ec.europa.eu/malta_en', 'punë, studim dhe familje'],
  ]],
  itali: ['Për punë të varur hyrja shpesh lidhet me kuotat e Decreto Flussi dhe autorizimin nulla osta. Pas hyrjes, kërkesa për permesso di soggiorno ka afate të shkurtra.', [
    ['Portale Immigrazione', 'https://www.portaleimmigrazione.it/', 'lejet, rinovimet dhe procedurat'],
    ['Integrazione Migranti — Work', 'https://integrazionemigranti.gov.it/en-gb/Altre-info/id/3/Working-in-Italy', 'punësimi dhe të drejtat'],
    ['EU Immigration Portal — Italy', 'https://immigration-portal.ec.europa.eu/italy_en', 'kategoritë e migrimit'],
  ]],
  'mbreteria-e-bashkuar': ['Mbretëria e Bashkuar nuk është në BE dhe kërkon vizë sipas sistemit britanik. Për Skilled Worker nevojiten sponsor i licencuar, Certificate of Sponsorship dhe plotësimi i kritereve.', [
    ['Check if you need a UK visa', 'https://www.gov.uk/check-uk-visa', 'kontrolli zyrtar sipas shtetësisë dhe qëllimit'],
    ['Skilled Worker visa', 'https://www.gov.uk/skilled-worker-visa', 'sponsorizimi, paga dhe aplikimi'],
    ['Family visas', 'https://www.gov.uk/uk-family-visa', 'partneri, fëmijët dhe familjarët'],
  ]],
  danimarke: ['Lejet daneze ndahen sipas punës, studimit dhe familjes. Për punë kontrolloni skemat si Positive List ose Pay Limit dhe prisni vendimin para fillimit.', [
    ['New to Denmark — Work', 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work', 'skemat dhe kriteret e lejes së punës'],
    ['New to Denmark — Study', 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study', 'lejet për studentët'],
    ['EU Immigration Portal — Denmark', 'https://immigration-portal.ec.europa.eu/denmark_en', 'rrugët e qëndrimit afatgjatë'],
  ]],
  poloni: ['Viza, leja e punës dhe leja e qëndrimit janë dokumente të ndryshme. Punëdhënësi zakonisht siguron bazën e punësimit, ndërsa aplikanti kujdeset për hyrjen dhe qëndrimin.', [
    ['Office for Foreigners — Residence', 'https://www.gov.pl/web/udsc-en/residence-of-foreigners', 'lejet e përkohshme dhe të përhershme'],
    ['Poland — Work permits', 'https://www.gov.pl/web/family/work-permit', 'informacion zyrtar për lejet e punës'],
    ['EU Immigration Portal — Poland', 'https://immigration-portal.ec.europa.eu/poland_en', 'punë, studim dhe familje'],
  ]],
  norvegji: ['Shtetasit jashtë BE/EEA zakonisht duhet të kenë ofertë konkrete pune dhe leje si skilled worker para fillimit. Regjistrimi pas mbërritjes është hap më vete.', [
    ['UDI — Work immigration', 'https://www.udi.no/en/want-to-apply/work-immigration/', 'llojet e lejeve dhe kërkesat'],
    ['UDI — Study permit', 'https://www.udi.no/en/want-to-apply/studies/', 'studimet dhe dokumentet financiare'],
    ['UDI — Family immigration', 'https://www.udi.no/en/want-to-apply/family-immigration/', 'bashkimi familjar dhe kushtet'],
  ]],
  ceki: ['Për qëndrim afatgjatë duhet vizë ose leje sipas qëllimit. Për punë, Employee Card kombinon qëndrimin me të drejtën e punës në kushtet e përcaktuara.', [
    ['Employee Card', 'https://frs.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence/employee-card/', 'kriteret dhe procedura për punësim'],
    ['Long-term visa', 'https://frs.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-visa/', 'qëndrimi mbi 90 ditë'],
    ['EU Immigration Portal — Czechia', 'https://immigration-portal.ec.europa.eu/czechia_en', 'rrugët sipas qëllimit të migrimit'],
  ]],
  holande: ['Procedura varet nga sponsori dhe qëllimi. Për shumë kategori, punëdhënësi ose institucioni arsimor vepron si sponsor i njohur dhe mund të aplikojë për MVV dhe leje.', [
    ['IND — Work', 'https://ind.nl/en/residence-permits/work', 'lejet e punës dhe sponsorët'],
    ['IND — Study', 'https://ind.nl/en/residence-permits/study', 'lejet e studentëve'],
    ['EU Immigration Portal — Netherlands', 'https://immigration-portal.ec.europa.eu/netherlands_en', 'punë, studim dhe bashkim familjar'],
  ]],
  belgjike: ['Për punë mbi 90 ditë zakonisht përdoret Single Permit, i kërkuar nga punëdhënësi në rajonin përkatës. Lejet dhe kriteret ndryshojnë mes Flandrës, Brukselit dhe Valonisë.', [
    ['Immigration Office', 'https://dofi.ibz.be/en', 'vizat dhe qëndrimi në Belgjikë'],
    ['Working in Belgium', 'https://www.workinginbelgium.be/en/single-permit.html', 'Single Permit dhe procedura'],
    ['EU Immigration Portal — Belgium', 'https://immigration-portal.ec.europa.eu/belgium_en', 'rrugët e migrimit sipas qëllimit'],
  ]],
  irlande: ['Leja e punësimit dhe leja e qëndrimit janë procese të lidhura, por të veçanta. Kontrolloni nëse profesioni kualifikohet për Critical Skills ose General Employment Permit.', [
    ['Employment permits', 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/', 'llojet e lejeve dhe listat e profesioneve'],
    ['Irish Immigration — Work', 'https://www.irishimmigration.ie/coming-to-work-in-ireland/', 'hyrja, viza dhe regjistrimi'],
    ['Irish Immigration — Join family', 'https://www.irishimmigration.ie/coming-to-join-family-in-ireland/', 'bashkimi familjar'],
  ]],
  luksemburg: ['Shtetasit jo-BE zakonisht kërkojnë autorizim të përkohshëm qëndrimi para hyrjes; më pas bëjnë deklarimin në komunë dhe aplikojnë për kartën e qëndrimit.', [
    ['Guichet — Salaried worker', 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/salarie.html', 'procedura për punonjësit nga vende të treta'],
    ['Guichet — Immigration', 'https://guichet.public.lu/en/citoyens/immigration.html', 'të gjitha kategoritë e hyrjes dhe qëndrimit'],
    ['EU Immigration Portal — Luxembourg', 'https://immigration-portal.ec.europa.eu/luxembourg_en', 'punë, studim dhe familje'],
  ]],
  spanje: ['Leja duhet të përputhet me punën, studimin ose familjen. Për punësim të zakonshëm, punëdhënësi nis autorizimin; pas hyrjes kryhen TIE dhe regjistrimet lokale.', [
    ['Extranjería — Immigration portal', 'https://www.inclusion.gob.es/web/migraciones/vivir-en-espana', 'autorizimet dhe procedurat zyrtare'],
    ['Spanish consular services', 'https://www.exteriores.gob.es/Consulados/tirana/en/ServiciosConsulares/Paginas/index.aspx', 'vizat dhe shërbimet nga Shqipëria'],
    ['EU Immigration Portal — Spain', 'https://immigration-portal.ec.europa.eu/spain_en', 'rrugët sipas qëllimit të migrimit'],
  ]],
  shqiperi: ['Të huajt duhet të kontrollojnë vizën, lejen unike dhe regjistrimin sipas shtetësisë e qëllimit. Shtetasit shqiptarë që kthehen duhet të përditësojnë adresën dhe shërbimet civile.', [
    ['e-Visa Albania', 'https://e-visa.al/', 'kontrolli dhe aplikimi për vizë'],
    ['e-Albania — Leje unike', 'https://e-albania.al/', 'aplikimi elektronik për qëndrim dhe punësim'],
    ['Ministry for Europe and Foreign Affairs', 'https://punetejashtme.gov.al/en/regjimi-i-vizave-per-te-huajt/', 'regjimi i vizave për të huajt'],
  ]],
  kosove: ['Rregullat varen nga shtetësia, kohëzgjatja dhe qëllimi. Për punë ose qëndrim afatgjatë kontrolloni vizën, lejen e qëndrimit dhe lejen e punës si procese të dallueshme.', [
    ['Ministry of Internal Affairs', 'https://mpb.rks-gov.net/', 'qëndrimi, shtetësia dhe dokumentet'],
    ['eKosova', 'https://ekosova.rks-gov.net/', 'shërbimet dhe aplikimet elektronike'],
    ['Visa information — MFA', 'https://mfa-ks.net/en/sherbimet-konsullore/vizat/', 'regjimi dhe procedura e vizave'],
  ]],
  shba: ['Statusi duhet të përputhet me qëllimin e hyrjes; viza e vizitorit nuk lejon punësim. Emigrimi familjar, punësimi, studimi dhe lotaria kanë procese e afate të ndryshme.', [
    ['USCIS — Green Card', 'https://www.uscis.gov/green-card', 'kategoritë e rezidencës së përhershme'],
    ['Travel.State.Gov — U.S. Visas', 'https://travel.state.gov/content/travel/en/us-visas.html', 'vizat imigruese dhe joimigruese'],
    ['USCIS — Working in the U.S.', 'https://www.uscis.gov/working-in-the-united-states', 'autorizimi dhe kategoritë e punësimit'],
  ]],
};

export const immigrationGuidesByCountry: Record<string, ImmigrationGuide> = Object.fromEntries(
  Object.entries(immigrationTuples).map(([slug, [overview, links]]) => [slug, {
    overview,
    links: links.map(([title, url, description]) => ({ title, url, description })),
  }]),
);
