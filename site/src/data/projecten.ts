// Portfolio projects, in the order they appear on the portfolio page.
// Adding a project: put the photo in src/assets/portfolio/ and add a line here.
// The letter (A, B, C, ...) is assigned automatically from the position.
import bed8 from '../assets/portfolio/bed8.jpg';
import keuken1 from '../assets/portfolio/keuken1.jpg';
import schappen1 from '../assets/portfolio/schappen1.jpg';
import bed5 from '../assets/portfolio/bed5.jpg';
import badkamer from '../assets/portfolio/badkamer.jpg';
import hek2 from '../assets/portfolio/hek2.jpg';
import singleRoom2 from '../assets/portfolio/single_room2.jpg';
import divider1 from '../assets/portfolio/divider1.jpg';
import buitenstoel1 from '../assets/portfolio/buitenstoel1.jpg';
import borrelplank1 from '../assets/portfolio/borrelplank1.jpg';

export const projecten = [
  { titel: 'Zolderslaapkamer', foto: bed8, alt: 'Zolderslaapkamer met bed van massief hout en ingebouwde kasten' },
  { titel: 'Keuken', foto: keuken1, alt: 'Keuken met groene kasten, houten werkblad en visgraatvloer' },
  { titel: 'Inbouwkast', foto: schappen1, alt: 'Inbouwkasten met open schappen onder een schuin dak' },
  { titel: 'Bedframe', foto: bed5, alt: 'Hoek van een massief houten bedframe met zichtbare nerf' },
  { titel: 'Badkamer', foto: badkamer, alt: 'Badkamer met houten wastafelmeubel en spiegelkast' },
  { titel: 'Balustrade', foto: hek2, alt: 'Trapbalustrade met spijlen van ongeschilde takken' },
  { titel: 'Kastenwand', foto: singleRoom2, alt: 'Kastenwand van multiplex in een smalle kamer' },
  { titel: 'Kamerscherm', foto: divider1, alt: 'Vouwbaar kamerscherm met beschilderde panelen' },
  { titel: 'Tuinstoelen', foto: buitenstoel1, alt: 'Twee houten tuinstoelen in het gras' },
  { titel: 'Borrelplanken', foto: borrelplank1, alt: 'Borrelplank van gelamineerd hout met handgreep' },
];
