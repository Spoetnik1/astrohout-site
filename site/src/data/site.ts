// Everything that appears on more than one page: menu, contact details, social links.

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/over', label: 'Over' },
  { href: '/contact', label: 'Contact' },
];

export const juridisch = [
  { href: '/algemene-voorwaarden', label: 'algemene voorwaarden' },
  { href: '/privacyverklaring', label: 'privacyverklaring' },
];

// The company Astrohout currently runs under (footer, KvK).
export const bedrijf = {
  naam: 'JambalayaTMB',
  kvk: '42017220',
};

// Where the workshop is: the starting point for the distances and the map on the werkgebied pages.
// Between Wijhe and Heino, closer to Heino. The coordinates are rounded on purpose (about a km),
// so the map shows the area but not the house.
export const werkplaats = {
  plaats: 'Wijhe',
  provincie: 'Overijssel',
  lat: 52.42,
  lon: 6.19,
};

export const contact = {
  email: 'info@astrohout.nl',
  instagram: { handle: '@astro.hout', href: 'https://www.instagram.com/astro.hout/' },
  // empty hides the icon in the footer; fill in a URL to show it again
  pinterest: '',
  linkedin: '',
};
