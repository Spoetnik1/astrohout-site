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

// Where the workshop is: the address in the footer and the business schema, and the starting point
// for the distances and the map on the werkgebied pages. Between Wijhe and Heino, closer to Heino,
// on the grounds of The Makers Barn. Visits by appointment.
export const werkplaats = {
  terrein: 'The Makers Barn',
  straat: 'Duisterendijk 2',
  postcode: '8131 RA',
  plaats: 'Wijhe',
  richting: 'Heino',   // the other village it sits towards
  provincie: 'Overijssel',
  lat: 52.4145,        // Duisterendijk 2, from the PDOK address register
  lon: 6.1913,
};

export const contact = {
  email: 'info@astrohout.nl',
  instagram: { handle: '@astro.hout', href: 'https://www.instagram.com/astro.hout/' },
  // empty hides the icon in the footer; fill in a URL to show it again
  pinterest: '',
  linkedin: '',
};

// contact form: where messages go, who they come from, and the public Turnstile key (anti-spam).
// The site key is public; the secret key belongs in the Cloudflare dashboard (TURNSTILE_SECRET_KEY).
export const contactform = {
  to: 'info@astrohout.nl',
  from: { name: 'Astrohout website', email: 'website@astrohout.nl' },
  turnstileSiteKey: '0x4AAAAAAFXqILO2o67DMm--',   // from Cloudflare dashboard > Turnstile
};
