// Portfolio projects, in the order they appear on the portfolio page.
// Adding a project: put the photo in src/assets/portfolio/ and add a line here.
// The letter (A, B, C, ...) is assigned automatically from the position.
// A project with a slug, specs and fotos also gets its own page at /portfolio/<slug>.
// fotos is a list of rows; photos in one row get the same height and together fill the width.
import type { ImageMetadata } from 'astro';
import bed8 from '../assets/portfolio/bed8.jpg';
import keuken1 from '../assets/portfolio/keuken1.jpg';
import keuken2 from '../assets/portfolio/keuken2.jpg';
import keuken3 from '../assets/portfolio/keuken3.jpg';
import schappen1 from '../assets/portfolio/schappen1.jpg';
import bed5 from '../assets/portfolio/bed5.jpg';
import badkamer from '../assets/portfolio/badkamer.jpg';
import hek2 from '../assets/portfolio/hek2.jpg';
import singleRoom2 from '../assets/portfolio/single_room2.jpg';
import divider1 from '../assets/portfolio/divider1.jpg';
import buitenstoel1 from '../assets/portfolio/buitenstoel1.jpg';
import borrelplank1 from '../assets/portfolio/borrelplank1.jpg';

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
}

export const projecten: Project[] = [
  { titel: 'Zolderslaapkamer', foto: bed8, alt: 'Zolderslaapkamer met bed van massief hout en ingebouwde kasten' },
  {
    titel: 'Keuken',
    foto: keuken1,
    alt: 'Keuken met groene kasten, houten werkblad en visgraatvloer',
    slug: 'keuken',
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
  { titel: 'Inbouwkast', foto: schappen1, alt: 'Inbouwkasten met open schappen onder een schuin dak' },
  { titel: 'Bedframe', foto: bed5, alt: 'Hoek van een massief houten bedframe met zichtbare nerf' },
  { titel: 'Badkamer', foto: badkamer, alt: 'Badkamer met houten wastafelmeubel en spiegelkast' },
  { titel: 'Balustrade', foto: hek2, alt: 'Trapbalustrade met spijlen van ongeschilde takken' },
  { titel: 'Kastenwand', foto: singleRoom2, alt: 'Kastenwand van multiplex in een smalle kamer' },
  { titel: 'Kamerscherm', foto: divider1, alt: 'Vouwbaar kamerscherm met beschilderde panelen' },
  { titel: 'Tuinstoelen', foto: buitenstoel1, alt: 'Twee houten tuinstoelen in het gras' },
  { titel: 'Borrelplanken', foto: borrelplank1, alt: 'Borrelplank van gelamineerd hout met handgreep' },
];
