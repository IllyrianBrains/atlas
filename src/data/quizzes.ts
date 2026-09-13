export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CountryQuiz {
  slug: string; // matches AtlasCountry.slug in ./atlas.ts
  questions: QuizQuestion[];
}

// First batch of integration quizzes — questions are grounded in the actual guide
// content in src/data/atlas/<slug>.html, not invented, so keep them in sync if that
// content changes (e.g. via atlas:sync). One quiz per country already in atlas.ts.
export const atlasQuizzes: CountryQuiz[] = [
  {
    slug: 'gjermani',
    questions: [
      {
        question: 'Cili regjistrim duhet bërë i pari në Gjermani, para se të mund të hapësh bankë, sigurim apo të kërkosh leje qëndrimi?',
        options: ['Anmeldung (regjistrimi i banimit)', 'Schufa', 'Einbürgerungstest', 'Rundfunkbeitrag'],
        correctIndex: 0,
        explanation: 'Pa Anmeldung-un (regjistrimin e banimit) nuk mund të bësh asgjë tjetër: bankë, sigurim, punë apo leje qëndrimi.',
      },
      {
        question: 'Sa është Kindergeld-i (ndihma mujore shtetërore për fëmijë) në Gjermani?',
        options: ['150 €/muaj', '250 €/muaj', '350 €/muaj', '100 €/muaj'],
        correctIndex: 1,
        explanation: 'Kindergeld është 250 €/muaj për fëmijë dhe aplikohet në Familienkasse.',
      },
      {
        question: 'Çfarë është Schufa?',
        options: [
          'Sistemi i kredive/besueshmërisë financiare, shpesh i kërkuar për banesa me qira',
          'Taksa për televizion dhe radio',
          'Numri tatimor personal',
          'Leja e përhershme e qëndrimit',
        ],
        correctIndex: 0,
        explanation: 'Schufa është sistemi i kredive në Gjermani — shumë apartamente kërkojnë dëshmi Schufa përpara se të japin banesë me qira.',
      },
      {
        question: 'Brenda sa kohësh duhet ta konvertosh lejen e drejtimit shqiptare (Führerschein) pasi vendosesh në Gjermani?',
        options: ['3 muaj', '6 muaj', '1 vit', '2 vjet'],
        correctIndex: 1,
        explanation: 'Shqiptarët duhet ta konvertojnë lejen e drejtimit brenda 6 muajve nga vendosja.',
      },
      {
        question: 'Cili nivel i gjuhës gjermane kërkohet zakonisht për leje qëndrimi të përhershme apo shtetësi?',
        options: ['A1', 'A2', 'B1', 'C1'],
        correctIndex: 2,
        explanation: 'Kërkohet minimalisht njohuri e gjuhës gjermane niveli B1.',
      },
      {
        question: 'Sipas etikës gjermane, çfarë duhet të bësh përpara se të vizitosh dikë në shtëpi?',
        options: ['Të shkosh direkt, pa lajmërim', 'Të dërgosh mesazh paraprakisht', 'Të sjellësh dhurata të shtrenjta', 'Të telefonosh vetëm në mëngjes'],
        correctIndex: 1,
        explanation: '"Mos u paraqit pa paralajmërim – dërgo një mesazh më parë," thotë udhëzuesi për normat gjermane.',
      },
    ],
  },
  {
    slug: 'austri',
    questions: [
      {
        question: 'Sa ditë mund të qëndrojnë shqiptarët në Austri pa vizë, brenda një periudhe 180-ditore (Schengen)?',
        options: ['30 ditë', '60 ditë', '90 ditë', '120 ditë'],
        correctIndex: 2,
        explanation: 'Falë zonës Schengen, shqiptarët mund të qëndrojnë deri në 90 ditë brenda 180 ditëve pa vizë.',
      },
      {
        question: 'Brenda sa ditësh nga hyrja në banesë duhet të regjistrosh adresën (Meldezettel) në Austri?',
        options: ['3 ditë', '7 ditë', '14 ditë', '30 ditë'],
        correctIndex: 0,
        explanation: 'Adresa duhet regjistruar te autoriteti vendor brenda 3 ditëve nga hyrja në banesë. Dokumenti quhet Meldezettel.',
      },
      {
        question: 'Cilin numër telefononi për zjarrfikësit në Austri?',
        options: ['133', '122', '144', '112'],
        correctIndex: 1,
        explanation: 'Në Austri: Policia 133, Zjarrfikësit 122, Urgjenca mjekësore 144 (112 funksionon gjithashtu si numër i përgjithshëm evropian).',
      },
      {
        question: 'Për sa muaj mund të përdoret patenta shqiptare pasi regjistrohesh në Austri, para se konvertimi të bëhet i detyrueshëm?',
        options: ['3 muaj', '6 muaj', '1 vit', '2 vjet'],
        correctIndex: 1,
        explanation: 'Patenta shqiptare mund të përdoret maksimumi 6 muaj pas regjistrimit të vendbanimit.',
      },
      {
        question: 'Sa pagesa vjetore marrin shpesh punonjësit në Austri kur kjo parashikohet nga marrëveshja kolektive?',
        options: ['12 paga', '13 paga', '14 paga', '10 paga'],
        correctIndex: 2,
        explanation: 'Shumë marrëveshje kolektive parashikojnë 14 pagesa: 12 mujore dhe dy pagesa shtesë për pushime dhe fundvit.',
      },
      {
        question: 'Cila është gjuha zyrtare e Austrisë?',
        options: ['Frëngjishtja', 'Gjermanishtja', 'Italishtja', 'Anglishtja'],
        correctIndex: 1,
        explanation: 'Gjermanishtja është gjuha zyrtare, edhe pse anglishtja kuptohet gjerësisht, sidomos në zonat urbane.',
      },
    ],
  },
  {
    slug: 'zvicer',
    questions: [
      {
        question: 'Sa gjuhë zyrtare ka Zvicra?',
        options: ['2', '3', '4', '5'],
        correctIndex: 2,
        explanation: 'Zvicra ka katër gjuhë zyrtare: gjermanisht, frëngjisht, italisht dhe retroromançe.',
      },
      {
        question: 'Brenda sa muajve duhet të sigurosh sigurimin shëndetësor bazë pasi zhvendosesh në Zvicër?',
        options: ['1 muaj', '3 muaj', '6 muaj', '1 vit'],
        correctIndex: 1,
        explanation: 'Sigurimi shëndetësor duhet bërë brenda tre muajve të parë; përndryshe autoritetet ta zgjedhin vetë.',
      },
      {
        question: 'Cila leje qëndrimi në Zvicër është e përhershme, marrë zakonisht pas 5–10 vitesh?',
        options: ['Leja L', 'Leja B', 'Leja C', 'Leja G'],
        correctIndex: 2,
        explanation: 'Leja C është leja e qëndrimit e përhershme.',
      },
      {
        question: "Cila është rruga më e zakonshme për shqiptarët për të emigruar në Zvicër, meqë Shqipëria s'është pjesë e BE/EFTA?",
        options: ['Kontratë pune e miratuar nga punëdhënës zviceran', 'Vizë turistike e zgjatur', 'Kërkesë azili', 'Blerje prone'],
        correctIndex: 0,
        explanation: 'Rruga më e zakonshme është përmes një kontrate pune të miratuar nga një punëdhënës zviceran (leje B ose L).',
      },
      {
        question: 'Rreth sa përqind e pagës bruto zbritet mesatarisht si taksa dhe kontribute sociale për një të punësuar në Zvicër?',
        options: ['10%', '18%', '26%', '40%'],
        correctIndex: 2,
        explanation: 'Ndalesat mesatare totale nga paga bruto arrijnë rreth 26%.',
      },
      {
        question: 'Cila kompani administron trenat kombëtarë në Zvicër?',
        options: ['DB', 'SBB', 'ÖBB', 'SNCF'],
        correctIndex: 1,
        explanation: 'SBB (Schweizerische Bundesbahnen) ofron shërbimin kombëtar të trenave në Zvicër.',
      },
    ],
  },
  {
    slug: 'france',
    questions: [
      {
        question: 'Sa javë pushim vjetor të paguar ka minimalisht një punonjës në Francë?',
        options: ['3 javë', '4 javë', '5 javë', '6 javë'],
        correctIndex: 2,
        explanation: 'Sipas Kodit të Punës francez, çdo punonjës ka të drejtë për të paktën 5 javë leje të paguar në vit.',
      },
      {
        question: 'Sa orë në javë është orari standard i punës në Francë?',
        options: ['30 orë', '35 orë', '40 orë', '45 orë'],
        correctIndex: 1,
        explanation: 'Orari standard i punës në Francë është 35 orë në javë; orët shtesë paguhen ose këmbehen me ditë pushimi.',
      },
      {
        question: 'Cila është institucioni që krahason diplomat e huaja me sistemin arsimor francez?',
        options: ['Pôle Emploi', 'DIRECCTE', 'ENIC-NARIC France', 'Ordre des Médecins'],
        correctIndex: 2,
        explanation: 'ENIC-NARIC France është institucioni zyrtar që krahason diplomat e huaja me sistemin francez.',
      },
      {
        question: 'Cilin numër telefononi për policinë (urgjenca) në Francë?',
        options: ['15', '17', '18', '114'],
        correctIndex: 1,
        explanation: 'Policia (Urgjenca) në Francë: 17. (15 është SAMU – ndihma e shpejtë, 18 zjarrfikësit, 114 për njerëz që nuk dëgjojnë.)',
      },
      {
        question: 'Sa kushton një biletë e thjeshtë metroje (t+) në Paris?',
        options: ['1,50 €', '2,10 €', '3,50 €', '5 €'],
        correctIndex: 1,
        explanation: 'Bileta e thjeshtë metroje (t+) kushton 2,10 €.',
      },
      {
        question: 'Cila leje qëndrimi në Francë synon profesionistët e kualifikuar me pagë të mirë?',
        options: ['Carte de séjour salarié', 'Carte bleue européenne', 'Leje për punë sezonale', 'Vizë turistike'],
        correctIndex: 1,
        explanation: 'Carte bleue européenne është për profesionistë të kualifikuar me arsim të lartë dhe pagë të mirë.',
      },
    ],
  },
  {
    slug: 'finlande',
    questions: [
      {
        question: 'Cilat janë dy gjuhët zyrtare të Finlandës?',
        options: ['Finlandisht dhe rusisht', 'Finlandisht dhe suedisht', 'Finlandisht dhe norvegjisht', 'Suedisht dhe rusisht'],
        correctIndex: 1,
        explanation: 'Finlanda ka dy gjuhë zyrtare: finlandisht dhe suedisht.',
      },
      {
        question: 'Cila agjenci përpunon lejet e qëndrimit në Finlandë?',
        options: ['Skatteverket', 'Migri', 'Migrationsverket', 'BAMF'],
        correctIndex: 1,
        explanation: 'Migri (Shërbimi Finlandez i Imigracionit) është përgjegjës për përpunimin e lejeve të qëndrimit.',
      },
      {
        question: 'Cila platformë online përdoret për aplikimin e lejeve të qëndrimit në Finlandë?',
        options: ['Enter Finland', 'Suomi.fi Portal', 'Migri Online', 'Finland Gateway'],
        correctIndex: 0,
        explanation: "Aplikimet online për leje qëndrimi bëhen përmes platformës 'Enter Finland'.",
      },
      {
        question: 'Rreth sa liqene ka Finlanda?',
        options: ['18.000', '88.000', '188.000', '880.000'],
        correctIndex: 2,
        explanation: "Finlanda ka mbi 188.000 liqene, prandaj njihet edhe si 'Toka e një mijë liqeneve'.",
      },
      {
        question: 'Sa ditë mund të qëndrojnë shqiptarët në Finlandë pa vizë, brenda 180 ditëve (Schengen)?',
        options: ['60 ditë', '90 ditë', '120 ditë', '180 ditë'],
        correctIndex: 1,
        explanation: 'Si pjesë e zonës Schengen, qëndrimi pa vizë lejohet deri në 90 ditë brenda një periudhe 180-ditore.',
      },
      {
        question: 'Kur e adoptoi Finlanda euron si monedhë?',
        options: ['1995', '1999', '2002', '2010'],
        correctIndex: 1,
        explanation: 'Finlanda adoptoi euron më 1 janar 1999, ndër shtetet e para të Eurozonës.',
      },
    ],
  },
  {
    slug: 'suedi',
    questions: [
      {
        question: 'Cila agjenci merret me regjistrimin e banimit dhe numrin personal (personnummer) në Suedi?',
        options: ['Migrationsverket', 'Skatteverket', 'Arbetsförmedlingen', 'UHR'],
        correctIndex: 1,
        explanation: 'Regjistrimi i banimit dhe personnummer merren përmes Skatteverket (Agjencia Suedeze e Tatimeve).',
      },
      {
        question: 'Cila agjenci jep lejet e qëndrimit në Suedi?',
        options: ['Skatteverket', 'Migrationsverket', 'UHR', 'SFI'],
        correctIndex: 1,
        explanation: 'Leja e qëndrimit aplikohet përmes Migrationsverket (Agjencia Suedeze e Migracionit).',
      },
      {
        question: 'Çfarë janë kurset SFI në Suedi?',
        options: ['Kurse gjuhe suedeze falas për të sapoardhur', 'Sigurim shëndetësor privat', 'Leje pune afatshkurtër', 'Kartë transporti mujore'],
        correctIndex: 0,
        explanation: 'SFI (Svenska för invandrare) janë kurse falas suedeze për të sapoardhurit, ofruar përmes komunës.',
      },
      {
        question: "Çfarë është 'Fika' në kulturën suedeze?",
        options: ['Formular zyrtar tatimor', 'Pushim social me kafe dhe diçka të ëmbël', 'Test gjuhe i detyrueshëm', 'Lloj qiraje banese'],
        correctIndex: 1,
        explanation: 'Fika është pushimi social me kafe dhe diçka të ëmbël, pjesë e rëndësishme e kulturës suedeze.',
      },
      {
        question: "Sa ditë pushimi minimale (semester) ka një punonjës në Suedi në vit?",
        options: ['10 ditë', '15 ditë', '20 ditë', '30 ditë'],
        correctIndex: 2,
        explanation: 'Semester-i (pushimi i detyrueshëm) është zakonisht minimumi 20 ditë të paguara në vit.',
      },
      {
        question: 'Cila është gjuha zyrtare e Suedisë?',
        options: ['Norvegjishtja', 'Danishtja', 'Suedishtja', 'Finlandishtja'],
        correctIndex: 2,
        explanation: 'Gjuha zyrtare është suedishtja (svenska), gjuhë gjermanike me ngjashmëri me anglishten.',
      },
    ],
  },
  {
    slug: 'malte',
    questions: [
      {
        question: 'Cilat janë dy gjuhët zyrtare të Maltës?',
        options: ['Malteze dhe italisht', 'Malteze dhe anglisht', 'Anglisht dhe italisht', 'Malteze dhe frëngjisht'],
        correctIndex: 1,
        explanation: 'Malteze dhe anglishtja janë dy gjuhët zyrtare të Maltës (italishtja flitet rrjedhshëm nga rreth 70% të popullatës, pa qenë zyrtare).',
      },
      {
        question: 'Që nga tetori 2022, si udhëtohet me autobus në Maltë për banorët me Kartën Tallinja?',
        options: ['Me gjysmë çmimi', 'Falas', 'Me çmim fiks 1€', 'Vetëm natën falas'],
        correctIndex: 1,
        explanation: 'Që nga 1 tetori 2022, autobusët janë falas për banorët/rezidentët e pajisur me Kartën Tallinja.',
      },
      {
        question: "Meqë Shqipëria s'ka ambasadë në Maltë, nga cili vend mbulohen shërbimet konsullore shqiptare?",
        options: ['Italia', 'Greqia', 'Gjermania', 'Franca'],
        correctIndex: 0,
        explanation: 'Shqipëria nuk ka përfaqësim diplomatik në Maltë; shërbimet kryhen nga Ambasada/Konsullatat shqiptare në Itali (Romë, Bari, Milano).',
      },
      {
        question: 'Sa muaj zgjat periudha e provës (probation) tipike në një kontratë pune në Maltë?',
        options: ['1 muaj', '3 muaj', '6 muaj', '12 muaj'],
        correctIndex: 2,
        explanation: 'Periudha e provës është zakonisht 6 muaj, me njoftim 1-javor nëse kontrata ndërpritet.',
      },
      {
        question: 'Sa është norma e papunësisë në Maltë sipas të dhënave zyrtare, ndër më të ulëtat në BE?',
        options: ['0.9%', '2.9%', '5.9%', '9.9%'],
        correctIndex: 1,
        explanation: 'Niveli i papunësisë në Maltë arrin 2.9%, më i ulëti në BE.',
      },
      {
        question: 'Çfarë kërkohet për të hapur llogari bankare në Maltë si shtetas shqiptar?',
        options: ['Vetëm pasaportë', 'Leje qëndrimi', 'Kontratë qiraje 1-vjeçare', 'Certifikatë gjuhe malteze'],
        correctIndex: 1,
        explanation: 'Për të hapur llogari bankare në Maltë si shtetas shqiptar duhet të jesh i pajisur me leje qëndrimi.',
      },
    ],
  },
  {
    slug: 'mbreteria-e-bashkuar',
    questions: [
      {
        question: 'Cilin numër telefononi për urgjenca (policia, ambulanca, zjarrfikësit) në UK?',
        options: ['911', '999', '112', '111'],
        correctIndex: 1,
        explanation: 'Numri i urgjencave në UK është 999 (111 është për raste jo-urgjente).',
      },
      {
        question: 'Çfarë numri duhet të ketë çdo person që punon në UK, për taksa dhe sigurime?',
        options: ['NHS Number', 'National Insurance Number (NINo)', 'Tax Code', 'Council Tax Number'],
        correctIndex: 1,
        explanation: 'National Insurance Number (NINo) kërkohet nga punëdhënësi dhe nga HMRC për taksat dhe sigurimet.',
      },
      {
        question: 'Në eskalatorët në UK, në cilën anë duhet të qëndrosh nëse nuk ecën?',
        options: ['Majtas', 'Djathtas', 'Në mes', 'Nuk ka rregull'],
        correctIndex: 1,
        explanation: 'Në eskalatorë qëndrohet në krahun e djathtë; krahu i majtë lihet i lirë për ata që ecin më shpejt.',
      },
      {
        question: 'Për sa kohë mund të përdoret patenta shqiptare në UK pas hyrjes në vend?',
        options: ['6 muaj', '1 vit', '2 vjet', '5 vjet'],
        correctIndex: 1,
        explanation: 'Patenta shqiptare mund të përdoret deri një vit nga hyrja; më pas duhet test teorik dhe praktik për patentë britanike.',
      },
      {
        question: 'Çfarë testi kërkohet për Indefinite Leave to Remain (ILR) dhe shtetësinë britanike?',
        options: ['Life in the UK Test', 'IELTS', 'Driving Theory Test', 'Citizenship Quiz UK'],
        correctIndex: 0,
        explanation: 'Life in the UK Test, mbi gjuhën, historinë dhe zakonet, është i detyrueshëm për ILR dhe shtetësi.',
      },
      {
        question: 'Si quhet shërbimi shëndetësor falas në UK?',
        options: ['HMRC', 'NHS', 'DVLA', 'GP Service'],
        correctIndex: 1,
        explanation: 'NHS (National Health Service) ofron shërbim shëndetësor falas në UK.',
      },
    ],
  },
  {
    slug: 'trento',
    questions: [
      {
        question: 'Cila zyrë në Trento ndihmon emigrantët me letrat për leje qëndrimi dhe shtetësi?',
        options: ['Questura', 'Cinformi', 'Comune', 'INPS'],
        correctIndex: 1,
        explanation: 'Cinformi është zyra në Trento që ndihmon me proçedurat e letrave për leje qëndrimi e shtetësi.',
      },
      {
        question: 'Çfarë niveli italishteje rekomandohet për t\'u punësuar në Itali?',
        options: ['A1', 'A2', 'B1', 'C1'],
        correctIndex: 2,
        explanation: 'Rekomandohet të kesh të paktën nivel bazë B1 të italishtes, pasi Italia privilegjon ata që flasin italisht.',
      },
      {
        question: 'Çfarë duhet të bësh me biletën e trenit në Itali para se të udhëtosh?',
        options: ['Ta printosh dy herë', 'Ta validosh', 'Ta dërgosh me email', 'Asgjë, mjafton ta kesh në telefon'],
        correctIndex: 1,
        explanation: 'Në Itali është e detyrueshme të validosh biletën e trenit; përndryshe rrezikon gjobë.',
      },
      {
        question: 'Si quhet një nga llojet e trenave më të lira dhe të mira në Itali?',
        options: ['Frecciarossa', 'Regionale Veloce', 'Italo Alta Velocità', 'EuroCity'],
        correctIndex: 1,
        explanation: 'Regionale Veloce është një nga trenat më të lirë dhe të mirë në Itali.',
      },
      {
        question: 'Cilat gjuhë flitën në rajonin e Trentinos, përveç italishtes?',
        options: ['Frëngjisht dhe spanjisht', 'Anglisht dhe gjermanisht', 'Rusisht dhe kroatisht', 'Portugalisht dhe holandisht'],
        correctIndex: 1,
        explanation: 'Në Trentino, përveç italishtes, flitet edhe anglisht dhe gjermanisht.',
      },
      {
        question: 'A janë falas vizitat te mjeku i familjes në Itali?',
        options: ['Po, janë falas', 'Jo, kushtojnë shtrenjtë', 'Vetëm për fëmijët', 'Vetëm në urgjenca'],
        correctIndex: 0,
        explanation: 'Vizita te mjeku i familjes është falas; jo të gjitha shërbimet janë pa pagesë (p.sh. disa vizita specialistike).',
      },
    ],
  },
  {
    slug: 'oxford',
    questions: [
      {
        question: 'Sa larg është Oxford-i nga Londra?',
        options: ['30 km', '60 km', '90 km', '150 km'],
        correctIndex: 2,
        explanation: 'Oxford ndodhet rreth 90 km në veriperëndim të Londrës.',
      },
      {
        question: 'Cili kolegj i Oxford-it ka frymëzuar Great Hall-in e filmave Harry Potter?',
        options: ['Christ Church College', 'Jesus College', 'Balliol College', 'Merton College'],
        correctIndex: 0,
        explanation: 'Christ Church College dhe Great Hall-i i tij kanë frymëzuar skenat e Harry Potter.',
      },
      {
        question: 'Sa zgjat udhëtimi me tren nga Oxford në London Paddington?',
        options: ['30 minuta', '1 orë', '2 orë', '3 orë'],
        correctIndex: 1,
        explanation: 'Treni Oxford → London Paddington zgjat rreth 1 orë.',
      },
      {
        question: 'Cili është spitali kryesor në Oxford?',
        options: ["St Thomas' Hospital", 'John Radcliffe Hospital', "Guy's Hospital", 'Royal London Hospital'],
        correctIndex: 1,
        explanation: 'John Radcliffe Hospital është spitali kryesor në Oxford.',
      },
      {
        question: 'Si quhet aktiviteti tradicional me varka në lumin Cherwell në Oxford?',
        options: ['Rowing', 'Punting', 'Kayaking', 'Sailing'],
        correctIndex: 1,
        explanation: 'Punting — varkat tradicionale — është një nga aktivitetet më tipike të Oxford-it në lumin Cherwell.',
      },
      {
        question: 'Cilin numër telefononi për raste jo-urgjente të policisë në Angli?',
        options: ['111', '101', '999', '112'],
        correctIndex: 1,
        explanation: '101 është numri alternativ jo-urgjent për policinë (999 është për urgjenca).',
      },
    ],
  },
];
