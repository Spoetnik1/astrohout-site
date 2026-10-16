// Places in the werkgebied. Each one gets its own page at /meubelmaker-<slug>,
// and they are all listed on /werkgebied.
// Keep every text specific to the place: pages that only swap the name get ignored by Google.
// Start each intro differently too (a question, the place, the houses, something personal ...).
// Distances are calculated from the coordinates; rijtijd is a rough estimate by car from the workshop.
// TODO AI-GENERATED: every text below (meta, intro, lokaal, ideeen, faq) and the rijtijd estimates
// were written by Claude. Check facts and tone per place, add your own details, and remove each
// marker once a place has been reviewed.
import { werkplaats } from './site';

interface Vraag {
  vraag: string;
  antwoord: string;
}

export interface Plaats {
  naam: string;
  slug: string;
  provincie: 'Overijssel' | 'Gelderland';
  lat: number;
  lon: number;
  rijtijd: number;        // minutes by car from the workshop
  meta: string;           // meta description, shown in Google
  intro: string;
  lokaal: { titel: string; tekst: string[] };   // what the houses there are like and what they ask for
  ideeen: string[];
  projecten: string[];    // portfolio slugs shown on the page
  faq: Vraag[];           // questions about this place; the general ones are added on the page
  buren: string[];        // slugs of nearby places
}

export const plaatsen: Plaats[] = [
  // TODO AI-GENERATED
  {
    naam: 'Wijhe',
    slug: 'wijhe',
    provincie: 'Overijssel',
    lat: 52.3858,
    lon: 6.1339,
    rijtijd: 5,
    meta: 'Meubelmaker in Wijhe: Astrohout maakt kasten, bedden, keukens en trappen op maat, vlak buiten het dorp. Het eerste gesprek bij jou thuis is gratis.',
    intro: 'Ik woon en werk net buiten Wijhe, richting Heino. Wijhe is dus echt mijn dorp, en hier staat ook het meeste werk uit mijn portfolio: kasten, bedden, een keuken en een badkamer voor een monumentale boerderij die nu een retraiteplek is, in het hoofdgebouw en in de schuren.',
    lokaal: {
      titel: 'Boerderijen, dijkhuizen en het dorp',
      tekst: [
        'Rond Wijhe staan veel oude boerderijen, en langs de IJssel huizen die al generaties meegaan. Mooie gebouwen, maar zelden recht: balken die net anders lopen, muren die uit het lood staan, een schuur die een nieuwe functie krijgt.',
        'Daar werkt maatwerk het best. Een kast die precies tussen de balken past, een bed onder een schuin dak of een balustrade rond een trapgat. Dat soort werk heb ik hier in het dorp al gedaan.',
      ],
    },
    ideeen: [
      'Inbouwkasten tussen de balken of onder een schuin dak',
      'Een slaapkamer of keuken in een verbouwde schuur',
      'Een bed of tafel van massief hout',
      'Een balustrade die bij het huis past',
    ],
    projecten: ['zolderslaapkamer', 'keuken', 'balustrade'],
    faq: [
      {
        vraag: 'Kan ik langskomen in de werkplaats?',
        antwoord: 'Ja, het eerste gesprek kan ook in de werkplaats. Dan zie je meteen het hout en de monsters. Stuur even een mail, dan spreken we een moment af.',
      },
      {
        vraag: 'Werk je ook in monumenten?',
        antwoord: 'Ja. Het meeste werk in mijn portfolio is gemaakt voor een monumentale boerderij hier in Wijhe. Of je voor een verbouwing in een monument een vergunning nodig hebt, hangt af van wat je wilt aanpassen. Dat zoek je uit bij de gemeente; ik denk graag mee over een ontwerp dat het gebouw heel laat.',
      },
    ],
    buren: ['heino', 'raalte'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Heino',
    slug: 'heino',
    provincie: 'Overijssel',
    lat: 52.4342,
    lon: 6.2333,
    rijtijd: 5,
    meta: 'Meubelmaker in Heino: zolderkamers, inbouwkasten en bedden op maat, met de hand gemaakt door Astrohout, een paar minuten verderop. Kennismaken kost niets.',
    intro: 'Bijna buren: mijn werkplaats ligt tussen Wijhe en Heino, dus in een paar minuten sta ik bij je voor de deur. Heb je een zolder, nis of kamer die beter kan? Ik kom kijken, meet op en maak iets dat alleen in jouw huis past.',
    lokaal: {
      titel: 'Landgoederen, bos en zolders',
      tekst: [
        'Rond Heino liggen landgoederen, bos en boerderijen. In het dorp staan vrijstaande huizen, twee-onder-een-kappers en rijwoningen.',
        'Op de zolder van zo\'n huis zit vaak ruimte die je nog niet gebruikt. Een slaapkamer of werkplek onder het schuine dak, met kasten in de knieschotten, maakt van een rommelzolder een kamer. Precies zo\'n zolderslaapkamer staat in mijn portfolio.',
      ],
    },
    ideeen: [
      'Een zolderslaapkamer met kasten in de knieschotten',
      'Een werkplek onder het schuine dak',
      'Een bed van massief hout',
      'Open schappen en inbouwkasten',
    ],
    projecten: ['zolderslaapkamer', 'inbouwkast', 'bedframe'],
    faq: [
      {
        vraag: 'Kom je ook in Lierderholthuis en het buitengebied?',
        antwoord: 'Ja. Het hele gebied tussen Heino, Raalte en Zwolle ligt binnen een kwartier tot twintig minuten van mijn werkplaats.',
      },
    ],
    buren: ['wijhe', 'raalte', 'zwolle', 'dalfsen'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Raalte',
    slug: 'raalte',
    provincie: 'Overijssel',
    lat: 52.3876,
    lon: 6.275,
    rijtijd: 15,
    meta: 'Meubelmaker voor Raalte en de kerkdorpen: keukens, kasten en bedden op maat, met de hand gemaakt. Een kwartier rijden, het eerste gesprek is gratis.',
    intro: 'Woon je in Raalte en zoek je een meubelmaker? Dan zit je op een kwartier van mijn werkplaats. Van een inbouwkast tot een complete keuken: ik maak het op maat, met de hand, en ik plaats het zelf.',
    lokaal: {
      titel: 'Salland: dorp en woonboerderij',
      tekst: [
        'Rond Raalte staan veel boerderijen, waarvan een deel inmiddels woonboerderij is. In het dorp zelf vind je alles van oudere dorpswoningen tot nieuwbouw.',
        'Een woonboerderij heeft vaak hoge ruimtes en lange muren, waar een kast uit de winkel verloren staat. Een kastenwand of keuken die de maat van de ruimte volgt, voelt daar meteen als onderdeel van het huis. Dat werk ken ik: mijn portfolio is grotendeels gemaakt voor een monumentale boerderij in Wijhe.',
      ],
    },
    ideeen: [
      'Een keuken op maat in een woonboerderij',
      'Een kastenwand langs een hoge muur',
      'Meubels voor een verbouwde deel of schuur',
      'Tuinmeubels van massief hout',
    ],
    projecten: ['keuken', 'kastenwand', 'tuinstoelen'],
    faq: [
      {
        vraag: 'Kom je ook in de kerkdorpen rond Raalte?',
        antwoord: 'Ja, bijvoorbeeld in Heeten, Mariënheem, Broekland en Luttenberg. Ze liggen allemaal binnen een halfuur van mijn werkplaats.',
      },
    ],
    buren: ['heino', 'wijhe', 'dalfsen'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Zwolle',
    slug: 'zwolle',
    provincie: 'Overijssel',
    lat: 52.5125,
    lon: 6.0944,
    rijtijd: 20,
    meta: 'Meubelmaker in Zwolle: kastenwanden, keukens en bedden op maat, voor een smal huis in Assendorp of nieuwbouw in Stadshagen. Twintig minuten rijden, kennismaken is gratis.',
    intro: 'Zwolle is een stad waar ik graag ben, en vanaf mijn werkplaats tussen Wijhe en Heino rij ik er in twintig minuten naartoe. Smalle huizen in Assendorp, oude panden binnen de grachten, nieuwbouw in Stadshagen: elk huis vraagt iets anders, en daar begint maatwerk. Ik kom langs, meet op en maak een ontwerp dat alleen bij jou past.',
    lokaal: {
      titel: 'Van binnenstad tot Stadshagen',
      tekst: [
        'Binnen de grachten staan panden van eeuwen oud, vaak smal en diep, met steile trappen en kamers waar geen hoek haaks is. Een kast uit de winkel past daar zelden; een kast die de muur volgt en tot aan het plafond doorloopt wel.',
        'In wijken als Assendorp en Diezerpoort wonen veel mensen in oudere rijtjeshuizen met kleine slaapkamers en een trapkast vol losse spullen. Daar telt elke centimeter: een bed met kasten eronder, een kastenwand met open vakken, een trapkast die je echt gebruikt.',
        'En dan de nieuwbouw, zoals in Stadshagen. Rechte muren en strakke hoeken, wat het werk makkelijker maakt, maar een nieuw huis voelt soms nog wat kaal. Een keuken, kastenwand of badkamermeubel van echt hout geeft het meteen een eigen gezicht.',
      ],
    },
    ideeen: [
      'Een kastenwand tot aan het plafond',
      'Een verhoogd bed met kasten eronder voor een kleine slaapkamer',
      'Een keuken op maat met houten werkblad',
      'Een trapkast die echt bruikbaar wordt',
      'Een wastafelmeubel van massief hout',
    ],
    projecten: ['kastenwand', 'keuken', 'badkamer'],
    faq: [
      {
        vraag: 'Maak je ook iets voor een klein huis of appartement?',
        antwoord: 'Juist. Hoe kleiner de ruimte, hoe meer een ontwerp op maat oplevert. De kastenwand in mijn portfolio staat in een smalle kamer: een verhoogd bed met kasten eronder, open vakken en een opstapje, allemaal in één meubel.',
      },
      {
        vraag: 'Is Zwolle niet te ver weg?',
        antwoord: 'Nee, het is twintig minuten rijden en gewoon mijn regio. Ik kom langs voor het eerste gesprek, tussendoor als dat nodig is, en ik plaats het meubel zelf.',
      },
    ],
    buren: ['heino', 'hattem', 'dalfsen', 'kampen'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Dalfsen',
    slug: 'dalfsen',
    provincie: 'Overijssel',
    lat: 52.51,
    lon: 6.256,
    rijtijd: 20,
    meta: 'Meubelmaker in Dalfsen: keukens, bedden en kasten van massief hout, op maat voor dorpshuis of boerderij aan de Vecht. Met de hand gemaakt door Astrohout.',
    intro: 'Dalfsen, aan de Vecht: een mooi stuk Overijssel, en vanaf mijn werkplaats ben ik er in zo\'n twintig minuten. Kast, bed, keuken of trap? Ik kom kijken, meet op en maak iets dat precies in jouw huis past.',
    lokaal: {
      titel: 'Aan de Vecht, tussen de havezaten',
      tekst: [
        'Rond Dalfsen liggen oude havezaten, landgoederen en boerderijen langs de Vecht. In het dorp zelf staan vooral vrijstaande huizen en rijwoningen, met nieuwere wijken aan de rand.',
        'Een boerderij of een huis met karakter vraagt om meubels die daarbij passen: massief hout, stevige verbindingen en een ontwerp dat de ruimte volgt. Daar voel ik me het meest in thuis.',
      ],
    },
    ideeen: [
      'Een keuken op maat in een (woon)boerderij',
      'Een tafel of bed van massief hout',
      'Inbouwkasten onder een schuin dak',
      'Een balustrade met een eigen karakter',
    ],
    projecten: ['keuken', 'balustrade', 'bedframe'],
    faq: [
      {
        vraag: 'Kom je ook in Nieuwleusen, Lemelerveld en Hoonhorst?',
        antwoord: 'Ja, de hele gemeente Dalfsen valt binnen mijn werkgebied. Lemelerveld ligt zelfs dichter bij mijn werkplaats dan Dalfsen zelf.',
      },
    ],
    buren: ['zwolle', 'heino', 'raalte'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Deventer',
    slug: 'deventer',
    provincie: 'Overijssel',
    lat: 52.255,
    lon: 6.16,
    rijtijd: 25,
    meta: 'Meubelmaker in Deventer: boekenkasten, inbouwkasten en trappen op maat voor oude panden en jaren-30-huizen. Met de hand gemaakt, kennismaken is gratis.',
    intro: 'Deventer is een stad waar ik graag kom. Scheve gevels in het Bergkwartier, jaren-30-straten met erkers en glas-in-lood, zolders onder een steil dak: in bijna elk huis daar zit een plek die om maatwerk vraagt. Vanaf mijn werkplaats ben ik er in een minuut of 25, en ik kom graag kijken wat er bij jou kan.',
    lokaal: {
      titel: 'Oude panden en jaren-30-huizen',
      tekst: [
        'Deventer is een van de oudste steden van Nederland. In de binnenstad en het Bergkwartier staan panden van honderden jaren oud, met scheve vloeren, diepe vensterbanken en weinig hoeken die haaks zijn.',
        'Daarbuiten liggen wijken met jaren-30-woningen: erkers, een trapkast, een schoorsteen in de woonkamer en een zolder onder de kap. Prachtige huizen, maar de ruimtes hebben zelden een standaardmaat.',
        'In zo\'n huis meet ik niet één keer, maar overal: een nis kan onderaan net anders zijn dan bovenaan. Een boekenkast rond de schoorsteen of een kast die een scheve muur volgt, bouw ik zo dat het lijkt alsof hij er altijd al stond.',
      ],
    },
    ideeen: [
      'Een boekenkast rond een schoorsteen of in een nis',
      'Inbouwkasten onder een schuin dak',
      'Een kastenwand in een smalle kamer',
      'Een trapkast die echt bruikbaar wordt',
      'Een balustrade of trapleuning op maat',
    ],
    projecten: ['inbouwkast', 'kastenwand', 'balustrade'],
    faq: [
      {
        vraag: 'Kun je een kast maken in een oude nis of rond een schoorsteen?',
        antwoord: 'Ja, dat is precies het soort werk dat ik graag doe. In een oud huis is een nis zelden overal even breed, dus ik meet op verschillende hoogtes op en maak de kast zo dat hij overal netjes aansluit.',
      },
      {
        vraag: 'Werk je ook in monumentale panden in de binnenstad?',
        antwoord: 'Ja. Mijn portfolio is grotendeels gemaakt voor een monumentale boerderij, dus ik weet hoe het is om te werken in een gebouw waar weinig recht is. Wil je in een monument iets vast inbouwen, check dan bij de gemeente of daar een vergunning voor nodig is.',
      },
    ],
    buren: ['wijhe', 'raalte'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Hattem',
    slug: 'hattem',
    provincie: 'Gelderland',
    lat: 52.475,
    lon: 6.063,
    rijtijd: 25,
    meta: 'Meubelmaker in Hattem: bedden, kasten en tuinmeubels van massief hout, gemaakt voor één bepaalde plek. Astrohout komt langs vanuit Salland.',
    intro: 'Tussen de Veluwe en de IJssel ligt Hattem, een klein Hanzestadje met een oude kern. Vanaf mijn werkplaats rij ik er in een minuut of 25 naartoe, over de brug bij Zwolle. Ik maak er meubels en inbouw die je in de winkel niet vindt: gemaakt voor één bepaalde plek.',
    lokaal: {
      titel: 'Hanzestadje aan de rand van de Veluwe',
      tekst: [
        'Hattem is klein, maar heeft een oude kern met smalle straatjes en panden van eeuwen oud. Daarbuiten liggen woonwijken en, richting de Veluwe, vrijstaande huizen tussen het groen.',
        'In een oud pandje is ruimte schaars en niets helemaal recht; daar werkt een kast of bed op maat beter dan iets uit de winkel. Bij een huis aan de bosrand past juist massief hout met een natuurlijke rand, zoals het hoofdbord in mijn portfolio.',
      ],
    },
    ideeen: [
      'Een bed met een hoofdbord van een boomrand',
      'Kasten op maat in een oud pand',
      'Tuinmeubels van massief hout',
      'Open schappen in een nis of onder de trap',
    ],
    projecten: ['bedframe', 'zolderslaapkamer', 'tuinstoelen'],
    faq: [
      {
        vraag: 'Kom je ook naar de Gelderse kant van de IJssel?',
        antwoord: 'Ja. Hattem ligt in Gelderland en mijn werkplaats in Overijssel, maar voor mij maakt die grens niets uit. Hattem, Heerde en Epe horen gewoon bij mijn werkgebied.',
      },
    ],
    buren: ['zwolle', 'kampen'],
  },
  // TODO AI-GENERATED
  {
    naam: 'Kampen',
    slug: 'kampen',
    provincie: 'Overijssel',
    lat: 52.555,
    lon: 5.911,
    rijtijd: 35,
    meta: 'Meubelmaker in Kampen: inbouwkasten, zolderkamers en badkamermeubels op maat voor oude panden in de binnenstad. Met de hand gemaakt door Astrohout.',
    intro: 'Kampen is een van mijn favoriete steden. Die binnenstad, de oude stadspoorten, de kade langs de IJssel: daar kom ik graag voor een mooie opdracht. Het is een halfuurtje rijden vanaf mijn werkplaats, en dat doe ik met plezier.',
    lokaal: {
      titel: 'Een binnenstad vol monumenten',
      tekst: [
        'Kampen heeft een van de best bewaarde binnensteden van Nederland, met honderden monumenten, smalle panden en drie oude stadspoorten. Daaromheen liggen wijken uit alle tijden, en aan de overkant van de IJssel ligt IJsselmuiden.',
        'Een smal, diep pand met een steile trap vraagt om maatwerk: kasten die de hoogte benutten, een slaapkamer onder de kap, een badkamer waar elke centimeter telt. Grote meubels maak ik in delen, zodat ze ook via een smalle trap binnenkomen.',
      ],
    },
    ideeen: [
      'Inbouwkasten in een smal, hoog pand',
      'Een slaapkamer onder de kap',
      'Een badkamermeubel op maat',
      'Een trapleuning of balustrade',
    ],
    projecten: ['badkamer', 'zolderslaapkamer', 'balustrade'],
    faq: [
      {
        vraag: 'Valt Kampen nog binnen je werkgebied?',
        antwoord: 'Ja. Kampen ligt iets verder weg dan Zwolle, maar het is een stad waar ik graag kom. Voor een opdracht in Kampen kom ik gewoon langs, net als in de rest van de regio.',
      },
    ],
    buren: ['zwolle', 'hattem', 'dalfsen'],
  },
];

// straight-line distance from the workshop in km
export function afstand(p: Plaats): number {
  const rad = Math.PI / 180;
  const dLat = (p.lat - werkplaats.lat) * rad;
  const dLon = (p.lon - werkplaats.lon) * rad;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(werkplaats.lat * rad) * Math.cos(p.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

export const bijSlug = (slug: string) => plaatsen.find((p) => p.slug === slug);
