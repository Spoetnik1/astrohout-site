// Portfolio projects, in the order they appear on the portfolio page.
// Adding a project: put the photo in src/assets/portfolio/ and add a line here.
// The letter (A, B, C, ...) is assigned automatically from the position.
// A project with a slug, specs and fotos also gets its own page at /portfolio/<slug>.
// fotos is a list of rows; photos in one row get the same height and together fill the width.
// specialismen puts the project on those specialism pages, see src/data/specialismen.ts.
import type { ImageMetadata } from 'astro';
import type { SpecialismeSlug } from './specialismen';
import bed1 from '../assets/portfolio/bed1.jpg';
import bed2 from '../assets/portfolio/bed2.jpg';
import bed3 from '../assets/portfolio/bed3.jpg';
import bed4 from '../assets/portfolio/bed4.jpg';
import bed5 from '../assets/portfolio/bed5.jpg';
import bed6 from '../assets/portfolio/bed6.jpg';
import bed7 from '../assets/portfolio/bed7.jpg';
import bed8 from '../assets/portfolio/bed8.jpg';
import bed9 from '../assets/portfolio/bed9.jpg';
import keuken1 from '../assets/portfolio/keuken1.jpg';
import keuken2 from '../assets/portfolio/keuken2.jpg';
import keuken3 from '../assets/portfolio/keuken3.jpg';
import schappen1 from '../assets/portfolio/schappen1.jpg';
import schappen2 from '../assets/portfolio/schappen2.jpg';
import badkamer from '../assets/portfolio/badkamer.jpg';
import badkamer2 from '../assets/portfolio/badkamer2.jpg';
import badkamer3 from '../assets/portfolio/badkamer3.jpg';
import badkamer4 from '../assets/portfolio/badkamer4.jpg';
import badkamer5 from '../assets/portfolio/badkamer5.jpg';
import badkamer6 from '../assets/portfolio/badkamer6.jpg';
import badkamer7 from '../assets/portfolio/badkamer7.jpg';
import badkamer9 from '../assets/portfolio/badkamer9.jpg';
import hek1 from '../assets/portfolio/hek1.jpg';
import hek2 from '../assets/portfolio/hek2.jpg';
import hek3 from '../assets/portfolio/hek3.jpg';
import hek4 from '../assets/portfolio/hek4.jpg';
import singleRoom1 from '../assets/portfolio/single_room1.jpg';
import singleRoom2 from '../assets/portfolio/single_room2.jpg';
import singleRoom3 from '../assets/portfolio/single_room3.jpg';
import divider1 from '../assets/portfolio/divider1.jpg';
import buitenstoel1 from '../assets/portfolio/buitenstoel1.jpg';
import buitenstoel2 from '../assets/portfolio/buitenstoel2.jpg';
import buitenstoel3 from '../assets/portfolio/buitenstoel3.jpg';
import buitenstoel4 from '../assets/portfolio/buitenstoel4.jpg';
import buitenstoel5 from '../assets/portfolio/buitenstoel5.jpg';
import borrelplank1 from '../assets/portfolio/borrelplank1.jpg';
import borrelplank2 from '../assets/portfolio/borrelplank2.jpg';
import borrelplank3 from '../assets/portfolio/borrelplank3.jpg';
import borrelplank4 from '../assets/portfolio/borrelplank4.jpg';

interface Foto {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  titel: string;
  foto: ImageMetadata;
  alt: string;
  slug?: string;
  specs?: string[];
  fotos?: Foto[][];
  specialismen?: SpecialismeSlug[];
}

export const projecten: Project[] = [
  {
    titel: 'Zolderslaapkamer',
    foto: bed8,
    alt: 'Zolderslaapkamer met bed van massief hout en ingebouwde kasten',
    slug: 'zolderslaapkamer',
    specialismen: ['bedden-op-maat', 'kasten-op-maat'],
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'slaapkamer op maat onder een schuin dak',
      'bed van massief hout',
      'hoofdbord met natuurlijke boomrand',
      'kasten in de knieschotten',
      'deuren beplakt met behang',
      'open schappen',
    ],
    fotos: [
      [{ src: bed8, alt: 'Zolderslaapkamer met het houten bed in het midden en aan beide kanten kasten onder het schuine dak' }],
      [
        { src: bed9, alt: 'De zolderslaapkamer vanaf de deur, met dakramen en open schappen aan beide kanten' },
        { src: bed3, alt: 'Voeteneind van het bed met een zwarte grendel in het houten frame' },
      ],
      [
        { src: bed4, alt: 'Het bed van opzij, met het hoofdbord met boomrand tegen de muur' },
        { src: bed1, alt: 'Laag standpunt langs de zijkant van het bed op het tapijt' },
      ],
    ],
  },
  {
    titel: 'Keuken',
    foto: keuken1,
    alt: 'Keuken met groene kasten, houten werkblad en visgraatvloer',
    slug: 'keuken',
    specialismen: ['keukens-op-maat'],
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'keuken op maat onder een schuin dak',
      'bovenkast die de dakhelling volgt',
      'open nis voor waterkoker en voorraad',
      'open vakken tussen de kasten',
      'houten werkblad',
      'ingebouwde oven en koelkast',
    ],
    fotos: [
      [{ src: keuken1, alt: 'Keukenblok met grijze lades en deuren, groene zijkant, open vakken en ingebouwde oven' }],
      [
        { src: keuken2, alt: 'Groene bovenkast die de dakhelling volgt, met een open nis boven het houten werkblad en de spoelbak' },
        { src: keuken3, alt: 'Zijaanzicht van de keuken onder het schuine dak, met het werkblad richting het raam' },
      ],
    ],
  },
  {
    titel: 'Inbouwkast',
    foto: schappen1,
    alt: 'Inbouwkasten met open schappen onder een schuin dak',
    slug: 'inbouwkast',
    specialismen: ['kasten-op-maat'],
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'inbouwkasten onder een schuin dak',
      'open schappen',
      'deuren beplakt met behang',
      'gordijn als afsluiting',
    ],
    fotos: [
      [
        { src: schappen1, alt: 'Inbouwkast met open schappen naast een deur met groen behang, aan het voeteneind van het bed' },
        { src: schappen2, alt: 'Inbouwkast met open schappen, een deur met behang en een blauw gordijn' },
      ],
    ],
  },
  {
    titel: 'Bedframe',
    foto: bed5,
    alt: 'Hoek van een massief houten bedframe met zichtbare nerf',
    slug: 'bedframe',
    specialismen: ['bedden-op-maat'],
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'bedframe van massief hout',
      'dikke planken met zichtbare nerf',
      'hoofdbord met natuurlijke boomrand',
      'zwarte grendels in het frame',
    ],
    fotos: [
      [
        { src: bed5, alt: 'Hoek van het bedframe van dichtbij, met de nerf van het hout' },
        { src: bed7, alt: 'Zijkant van het bedframe, laag langs het tapijt gefotografeerd' },
      ],
      [
        { src: bed2, alt: 'Hoofdbord met natuurlijke boomrand en een zwarte grendel' },
        { src: bed6, alt: 'Hoek van het bedframe op het tapijt' },
      ],
    ],
  },
  {
    titel: 'Badkamer',
    foto: badkamer,
    alt: 'Badkamer met houten wastafelmeubel en spiegelkast',
    slug: 'badkamer',
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'wastafelmeubel van massief hout',
      'zwarte waskom',
      'spiegel met houten lijst',
      'nissen in de wand',
      'houten lijsten langs de tegelwand',
    ],
    fotos: [
      [
        { src: badkamer, alt: 'Badkamer met vrijstaand bad, groene tegels en het houten wastafelmeubel' },
        { src: badkamer7, alt: 'Wastafelmeubel en spiegel naast de groene tegelwand' },
        { src: badkamer9, alt: 'Wastafelmeubel met zwarte waskom, spiegel en nis in de wand' },
      ],
      [
        { src: badkamer6, alt: 'Bad met nis in de groene tegelwand, daarnaast het wastafelmeubel en de spiegel' },
        { src: badkamer4, alt: 'Het houten wastafelmeubel met zwarte waskom van dichtbij' },
      ],
      [
        { src: badkamer2, alt: 'Wastafelmeubel van voren, met de deurtjes en greepjes' },
        { src: badkamer5, alt: 'Spiegel met houten lijst en een nis in de wand' },
        { src: badkamer3, alt: 'Bad en wastafelmeubel tussen de groene tegels en de houten lijst' },
      ],
    ],
  },
  {
    titel: 'Balustrade',
    foto: hek2,
    alt: 'Trapbalustrade met spijlen van ongeschilde takken',
    slug: 'balustrade',
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'balustrade rond het trapgat',
      'spijlen van takken, elke spijl anders',
      'zwart frame',
    ],
    fotos: [
      [
        { src: hek2, alt: 'Spijlen van takken naast de trap, van dichtbij' },
        { src: hek1, alt: 'Doorkijk door de spijlen naar de eettafel' },
      ],
      [
        { src: hek3, alt: 'De balustrade rond het trapgat in de woonkamer' },
        { src: hek4, alt: 'Balustrade met zwart frame en spijlen van takken' },
      ],
    ],
  },
  {
    titel: 'Kastenwand',
    foto: singleRoom2,
    alt: 'Kastenwand van multiplex in een smalle kamer',
    slug: 'kastenwand',
    specialismen: ['kasten-op-maat', 'bedden-op-maat'],
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'kastenwand van multiplex in een smalle kamer',
      'verhoogd bed met kasten eronder',
      'open vakken en dichte kastjes',
      'opstapje naar het bed',
    ],
    fotos: [
      [{ src: singleRoom1, alt: 'Verhoogd bed tussen kasten en open vakken van multiplex' }],
      [
        { src: singleRoom2, alt: 'Hoge kastenwand van multiplex met open vakken en kastjes' },
        { src: singleRoom3, alt: 'Opstapje van multiplex naar het bed, naast een zwarte trapleuning' },
      ],
    ],
  },
  {
    titel: 'Kamerscherm',
    foto: divider1,
    alt: 'Vouwbaar kamerscherm met beschilderde panelen',
    slug: 'kamerscherm',
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'vouwbaar kamerscherm',
      'beschilderde panelen met vogels en bloesem',
    ],
    fotos: [
      [{ src: divider1, alt: 'Vouwbaar kamerscherm met beschilderde panelen in een kamer met schuin dak' }],
    ],
  },
  {
    titel: 'Tuinstoelen',
    foto: buitenstoel1,
    alt: 'Twee houten tuinstoelen in het gras',
    slug: 'tuinstoelen',
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'tuinstoelen van hout',
      'rugleuning van brede planken',
      'armleuningen van boomstammetjes',
    ],
    fotos: [
      [
        { src: buitenstoel1, alt: 'Twee houten tuinstoelen in het gras naast een schuur' },
        { src: buitenstoel3, alt: 'De tuinstoelen in een boomgaard' },
      ],
      [
        { src: buitenstoel5, alt: 'Uiteinde van een armleuning van boomstam, van dichtbij' },
        { src: buitenstoel4, alt: 'Tuinstoel in het gras onder de bomen' },
        { src: buitenstoel2, alt: 'Tuinstoel voor een groene schuurdeur' },
      ],
    ],
  },
  {
    titel: 'Borrelplanken',
    foto: borrelplank1,
    alt: 'Borrelplank van gelamineerd hout met handgreep',
    slug: 'borrelplanken',
    // TODO AI-GENERATED: spec line and photo descriptions were written by AI from the photos. Check and rewrite.
    specs: [
      'borrelplanken van verlijmd hout',
      'uitgefreesde handgrepen',
      'afgeronde randen',
    ],
    fotos: [
      [
        { src: borrelplank1, alt: 'Borrelplank op een houten tafel' },
        { src: borrelplank2, alt: 'Twee borrelplanken met uitgefreesde handgrepen' },
      ],
      [
        { src: borrelplank3, alt: 'Handgreep van een borrelplank van dichtbij' },
        { src: borrelplank4, alt: 'Nerf van het verlijmde hout van dichtbij' },
      ],
    ],
  },
];
