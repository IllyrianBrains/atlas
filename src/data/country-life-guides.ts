export type LifeTopic = 'Integrimi' | 'Natyra' | 'Kultura' | 'Ushqimi';
export interface CountryLifeGuide { topic: LifeTopic; url: string; title: string; description: string; }

const topics: Record<string, [LifeTopic, string, string, string][]> = {
  gjermani: [
    ['Integrimi','https://www.bamf.de/EN/Themen/Integration/integration-node.html','BAMF — Integration','kurset e integrimit, gjuha dhe këshillimi për migrantët'],
    ['Natyra','https://www.germany.travel/en/nature-outdoor-activities/nature-parks.html','Nature parks in Germany','pyjet, liqenet, Alpet dhe parqet natyrore'],
    ['Kultura','https://www.deutschland.de/en/culture','Deutschland.de — Culture','muzetë, letërsia, muzika dhe jeta kulturore'],
    ['Ushqimi','https://www.tasteatlas.com/germany','TasteAtlas Germany','bukët rajonale, gatimet tradicionale dhe ëmbëlsirat'],
  ],
  zvicer: [
    ['Integrimi','https://www.sem.admin.ch/sem/en/home/integration-einbuergerung.html','SEM — Integration','gjuha, pjesëmarrja lokale dhe natyralizimi'],
    ['Natyra','https://www.myswitzerland.com/en/planning/about-switzerland/sustainability/nature-parks/','Swiss nature parks','Alpet, liqenet, shtigjet dhe parqet zvicerane'],
    ['Kultura','https://www.myswitzerland.com/en/experiences/cities-culture/','Swiss culture','qytetet historike, muzetë dhe traditat shumëgjuhëshe'],
    ['Ushqimi','https://www.tasteatlas.com/switzerland','TasteAtlas Switzerland','djathërat, fondue, rösti dhe specialitetet kantonale'],
  ],
  austri: [
    ['Integrimi','https://www.integrationsfonds.at/en/','Austrian Integration Fund','kurse gjuhe, orientim dhe materiale integrimi'],
    ['Natyra','https://www.austria.info/en/things-to-do/lakes-and-nature','Austria — Lakes and nature','Alpet, liqenet dhe aktivitetet në natyrë'],
    ['Kultura','https://www.austria.info/en/things-to-do/cities-and-culture','Austria — Cities and culture','muzika, arkitektura dhe trashëgimia perandorake'],
    ['Ushqimi','https://www.tasteatlas.com/austria','TasteAtlas Austria','kuzhina vjeneze, ëmbëlsirat dhe gatimet alpine'],
  ],
  france: [
    ['Integrimi','https://www.immigration.interieur.gouv.fr/Integration-et-Acces-a-la-nationalite','Integration in France','kontrata e integrimit, gjuha dhe shtetësia'],
    ['Natyra','https://www.france.fr/en/article/natural-parks-france/','France — Natural parks','Alpet, bregdetet, pyjet dhe parqet kombëtare'],
    ['Kultura','https://www.culture.gouv.fr/en','French Ministry of Culture','muze, monumente, arte dhe kalendari kulturor'],
    ['Ushqimi','https://www.tasteatlas.com/france','TasteAtlas France','djathërat, bukët, gatimet dhe kuzhinat rajonale'],
  ],
  finlande: [
    ['Integrimi','https://www.infofinland.fi/en/settling-in-finland/integration-into-finland','InfoFinland — Integration','plani i integrimit, gjuha dhe shërbimet lokale'],
    ['Natyra','https://www.visitfinland.com/en/places-to-go/nature/','Visit Finland — Nature','liqenet, pyjet, Laplanda dhe e drejta për natyrën'],
    ['Kultura','https://www.visitfinland.com/en/articles/finnish-culture/','Finnish culture','sauna, dizajni, festat dhe mënyra finlandeze e jetesës'],
    ['Ushqimi','https://www.tasteatlas.com/finland','TasteAtlas Finland','peshku, manaferrat, buka e thekrës dhe gatimet nordike'],
  ],
  suedi: [
    ['Integrimi','https://www.informationsverige.se/en/omsverige/','About Sweden','orientim shoqëror, të drejtat dhe jeta e përditshme'],
    ['Natyra','https://visitsweden.com/what-to-do/nature-outdoors/','Visit Sweden — Nature','arkipelagët, pyjet, liqenet dhe allemansrätten'],
    ['Kultura','https://sweden.se/culture','Sweden.se — Culture','traditat, dizajni, muzika dhe shoqëria suedeze'],
    ['Ushqimi','https://www.tasteatlas.com/sweden','TasteAtlas Sweden','fika, peshku, qoftet dhe gatimet sezonale'],
  ],
  malte: [
    ['Integrimi','https://humanrights.gov.mt/en/Pages/Integration-and-Anti-Racism-Unit.aspx','Integration and Anti-Racism Unit','politikat e integrimit dhe barazisë'],
    ['Natyra','https://www.visitmalta.com/en/nature-and-adventure/','Visit Malta — Nature','gjiret, shkëmbinjtë, zhytja dhe ishujt'],
    ['Kultura','https://www.visitmalta.com/en/history-and-culture/','Malta — History and culture','tempujt, qytetet e fortifikuara dhe festat lokale'],
    ['Ushqimi','https://www.tasteatlas.com/malta','TasteAtlas Malta','pastizzi, ftira, peshku dhe kuzhina mesdhetare'],
  ],
  itali: [
    ['Integrimi','https://integrazionemigranti.gov.it/en-gb','Integrazione Migranti','gjuha, puna, të drejtat dhe shërbimet për migrantët'],
    ['Natyra','https://www.italia.it/en/italy/things-to-do/nature','Italia.it — Nature','Alpet, liqenet, ishujt dhe parqet kombëtare'],
    ['Kultura','https://www.italia.it/en/italy/things-to-do/art-culture','Italia.it — Art and culture','arkeologjia, arti, qytetet historike dhe festivalet'],
    ['Ushqimi','https://www.tasteatlas.com/italy','TasteAtlas Italy','pasta, djathërat, picat dhe kuzhinat rajonale'],
  ],
  'mbreteria-e-bashkuar': [
    ['Integrimi','https://www.gov.uk/life-in-the-uk-test','Life in the UK','materialet qytetare dhe testi për vendosje ose shtetësi'],
    ['Natyra','https://www.nationalparks.uk/','UK National Parks','malet, liqenet, brigjet dhe parqet kombëtare'],
    ['Kultura','https://www.visitbritain.com/en/things-to-do/arts-and-culture','VisitBritain — Arts and culture','muzetë, teatri, muzika dhe trashëgimia'],
    ['Ushqimi','https://www.tasteatlas.com/united-kingdom','TasteAtlas United Kingdom','gatimet britanike dhe specialitetet e katër kombeve'],
  ],
  danimarke: [
    ['Integrimi','https://lifeindenmark.borger.dk/settle-in-denmark','Life in Denmark — Settle','gjuha, komuniteti dhe hapat për t’u vendosur'],
    ['Natyra','https://www.visitdenmark.com/denmark/things-do/danish-nature','VisitDenmark — Nature','bregdetet, pyjet, ishujt dhe çiklizmi'],
    ['Kultura','https://www.visitdenmark.com/denmark/things-do/history-and-culture','Danish culture','dizajni, historia vikinge dhe hygge'],
    ['Ushqimi','https://www.tasteatlas.com/denmark','TasteAtlas Denmark','smørrebrød, brumërat dhe kuzhina e re nordike'],
  ],
  poloni: [
    ['Integrimi','https://www.gov.pl/web/udsc-en/integration-and-assistance-for-foreigners','Integration in Poland','ndihma, orientimi dhe shërbimet për të huajt'],
    ['Natyra','https://www.poland.travel/en/experience/nature/','Poland — Nature','pyjet, liqenet, Karpatet dhe bregdeti baltik'],
    ['Kultura','https://culture.pl/en','Culture.pl','arti, filmi, muzika, letërsia dhe traditat polake'],
    ['Ushqimi','https://www.tasteatlas.com/poland','TasteAtlas Poland','pierogi, supat, ëmbëlsirat dhe gatimet rajonale'],
  ],
  norvegji: [
    ['Integrimi','https://www.imdi.no/en/','IMDi','integrimi, gjuha, puna dhe pjesëmarrja në komunitet'],
    ['Natyra','https://www.visitnorway.com/things-to-do/outdoor-activities/','Visit Norway — Outdoors','fjordet, malet, shtigjet dhe dritat veriore'],
    ['Kultura','https://www.visitnorway.com/things-to-do/art-culture/','Norwegian art and culture','muzetë, arkitektura, muzika dhe kultura sami'],
    ['Ushqimi','https://www.tasteatlas.com/norway','TasteAtlas Norway','peshku, brunost dhe kuzhina bregdetare e malore'],
  ],
  ceki: [
    ['Integrimi','https://www.integracnicentra.cz/?lang=en','Integration Centres','këshillim, gjuhë dhe shërbime rajonale'],
    ['Natyra','https://www.visitczechia.com/en-us/things-to-do/places/nature','VisitCzechia — Nature','parqet, malet, pyjet dhe formacionet shkëmbore'],
    ['Kultura','https://www.visitczechia.com/en-us/things-to-do/category-group-pages/cultural-heritage','Czech cultural heritage','kështjellat, qytetet historike dhe traditat'],
    ['Ushqimi','https://www.tasteatlas.com/czech-republic','TasteAtlas Czechia','gatimet boheme, brumërat dhe tradita e birrës'],
  ],
  holande: [
    ['Integrimi','https://www.government.nl/topics/integration-in-the-netherlands','Integration in the Netherlands','provimet, gjuha dhe pjesëmarrja qytetare'],
    ['Natyra','https://www.holland.com/global/tourism/getting-around/interests/nature.htm','Holland — Nature','dunat, ishujt, parqet dhe rrugët e biçikletave'],
    ['Kultura','https://www.holland.com/global/tourism/getting-around/interests/art-culture.htm','Dutch art and culture','muze, mjeshtrit holandezë, dizajn dhe festivale'],
    ['Ushqimi','https://www.tasteatlas.com/netherlands','TasteAtlas Netherlands','djathërat, stroopwafel dhe gatimet holandeze'],
  ],
  belgjike: [
    ['Integrimi','https://www.belgium.be/en/family/international/foreigners/integration','Integration in Belgium','programet e integrimit dhe kompetencat rajonale'],
    ['Natyra','https://visitwallonia.com/en-gb/3/i-love/wallonia-land-of-water/nature-reserves','Wallonia nature reserves','Ardenet, pyjet, lumenjtë dhe rezervatet'],
    ['Kultura','https://www.visit.brussels/en/visitors/agenda/culture','Brussels culture','muzetë, art nouveau, komikët dhe festivalet'],
    ['Ushqimi','https://www.tasteatlas.com/belgium','TasteAtlas Belgium','çokollata, waffles, birrat dhe kuzhina belge'],
  ],
  irlande: [
    ['Integrimi','https://www.gov.ie/en/department-of-children-disability-and-equality/policies/migrant-integration/','Migrant integration in Ireland','politikat, komunitetet dhe mbështetja e integrimit'],
    ['Natyra','https://www.ireland.com/en-gb/things-to-do/themes/landscapes/','Ireland — Landscapes','brigjet, kodrat, liqenet dhe rrugët panoramike'],
    ['Kultura','https://www.ireland.com/en-gb/things-to-do/themes/culture/','Irish culture','muzika, letërsia, gjuha dhe festivalet'],
    ['Ushqimi','https://www.tasteatlas.com/ireland','TasteAtlas Ireland','stews, bukët, prodhimet e detit dhe kuzhina moderne'],
  ],
  luksemburg: [
    ['Integrimi','https://integratioun.lu/en/','Integratioun.lu','gjuha, orientimi dhe pjesëmarrja lokale'],
    ['Natyra','https://www.visitluxembourg.com/experience-luxembourg/nature-outdoors','Luxembourg — Nature','Mullerthal, pyjet, lumenjtë dhe çiklizmi'],
    ['Kultura','https://www.visitluxembourg.com/experience-luxembourg/culture','Luxembourg — Culture','fortifikimet, muzetë dhe kultura shumëgjuhëshe'],
    ['Ushqimi','https://www.tasteatlas.com/luxembourg','TasteAtlas Luxembourg','gatimet vendase dhe ndikimet franceze e gjermane'],
  ],
  spanje: [
    ['Integrimi','https://www.inclusion.gob.es/web/migraciones/integracion','Integración de inmigrantes','programet, fondet dhe burimet e integrimit'],
    ['Natyra','https://www.spain.info/en/nature/','Spain — Nature','parqet kombëtare, malet, ishujt dhe bregdetet'],
    ['Kultura','https://www.spain.info/en/discover-spain/culture-spain/','Culture in Spain','arkitektura, arti, festat dhe trashëgimia rajonale'],
    ['Ushqimi','https://www.tasteatlas.com/spain','TasteAtlas Spain','tapas, orizi, prodhimet e detit dhe kuzhinat rajonale'],
  ],
  shqiperi: [
    ['Integrimi','https://mb.gov.al/migracioni/','Migracioni — Ministria e Brendshme','politikat e migracionit, kthimit dhe riintegrimit'],
    ['Natyra','https://albania.al/nature/','Albania — Nature','Alpet, lumenjtë, liqenet dhe bregdeti'],
    ['Kultura','https://albania.al/culture/','Albania — Culture','arkeologjia, qytetet historike dhe traditat'],
    ['Ushqimi','https://www.tasteatlas.com/albania','TasteAtlas Albania','byreku, gatimet e jugut e veriut dhe kuzhina mesdhetare'],
  ],
  kosove: [
    ['Integrimi','https://mpb.rks-gov.net/','Ministria e Punëve të Brendshme','qëndrimi, riintegrimi dhe shërbimet administrative'],
    ['Natyra','https://www.kosovoguide.com/category/nature/','Kosovo Guide — Nature','Sharri, Bjeshkët e Nemuna, ujëvarat dhe shtigjet'],
    ['Kultura','https://www.kosovoguide.com/category/culture/','Kosovo Guide — Culture','trashëgimia, artizanati, muzika dhe festivalet'],
    ['Ushqimi','https://www.tasteatlas.com/kosovo','TasteAtlas Kosovo','flija, pitet, produktet e bulmetit dhe gatimet shtëpiake'],
  ],
  shba: [
    ['Integrimi','https://www.uscis.gov/citizenship/civic-integration','USCIS — Civic integration','qytetaria, anglishtja dhe orientimi komunitar'],
    ['Natyra','https://www.nps.gov/findapark/index.htm','National Park Service','parqet kombëtare, monumentet dhe rekreacioni'],
    ['Kultura','https://www.si.edu/explore','Smithsonian — Explore','historia, arti, shkenca dhe kulturat amerikane'],
    ['Ushqimi','https://www.tasteatlas.com/united-states-of-america','TasteAtlas USA','barbecue, kuzhinat rajonale dhe ndikimet e diasporave'],
  ],
};

export const countryLifeGuides: Record<string, CountryLifeGuide[]> = Object.fromEntries(
  Object.entries(topics).map(([slug, guides]) => [slug, guides.map(([topic, url, title, description]) => ({ topic, url, title, description }))]),
);
