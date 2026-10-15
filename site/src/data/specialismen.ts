// Specialisms: each one gets its own page at /<slug> and a link in the footer.
// The projects on a page are the ones in src/data/projecten.ts with this slug in their `specialismen`.
//
// TODO AI-GENERATED: the titles, descriptions and intro texts below were written by AI. Check and rewrite:
// get the tone right, add what's missing (wood types, lead time, price indication) and remove
// anything that isn't true. Delete this note once that's done.

export const specialismen = [
  {
    slug: 'kasten-op-maat',
    label: 'Kasten op maat',   // link text in the footer
    titel: 'Kasten op maat',
    description: 'Inbouwkasten en kastenwanden op maat van Astrohout, ook onder een schuin dak of in een smalle kamer.',
    intro: [
      'Een kast op maat gebruikt de ruimte die een kast uit de winkel laat liggen: onder het schuine dak, in de knieschotten, rond een deur of tot aan het plafond.',
      'Samen bepalen we wat erin moet en hoe hij eruitziet. Open schappen, dichte deuren, lades, of deuren met hetzelfde behang als de muur, zodat de kast bijna verdwijnt.',
    ],
  },
  {
    slug: 'bedden-op-maat',
    label: 'Bedden',
    titel: 'Bedden op maat',
    description: 'Bedden op maat van Astrohout: frames van massief hout, verhoogde bedden en bedden onder een schuin dak.',
    intro: [
      'Een bed op maat past precies in de kamer en gaat jaren mee. Van een stevig frame van massief hout tot een verhoogd bed met kasten eronder.',
      'Ik werk graag met de vorm van het hout zelf, zoals een hoofdbord met de natuurlijke boomrand. Maat, hoogte en afwerking stemmen we af op jou en de ruimte.',
    ],
  },
  {
    slug: 'keukens-op-maat',
    label: 'Keukens',
    titel: 'Keukens op maat',
    description: 'Keukens op maat van Astrohout, ook voor een kleine ruimte of onder een schuin dak.',
    intro: [
      'Een keuken op maat volgt de ruimte in plaats van andersom. Ook onder een schuin dak of in een kleine ruimte past dan alles wat je nodig hebt.',
      'Kasten, werkblad, open vakken en ruimte voor inbouwapparatuur: samen bepalen we de indeling, de kleuren en het hout.',
    ],
  },
  {
    slug: 'trappen-en-hekken',
    label: 'Trappen en hekken',
    titel: 'Trappen en hekken',
    description: 'Balustrades, trapleuningen en hekken op maat van Astrohout.',
    intro: [
      'Een balustrade of trapleuning zie je elke dag en pak je elke dag vast. Dan mag hij ook mooi zijn.',
      'Ik maak balustrades en hekken op maat, bijvoorbeeld met spijlen van takken waarbij elke spijl anders is, in een strak zwart frame.',
    ],
  },
] as const;

export type Specialisme = (typeof specialismen)[number];
export type SpecialismeSlug = Specialisme['slug'];
