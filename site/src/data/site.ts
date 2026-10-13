// Everything that appears on more than one page: menu, contact details, social links.

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/over', label: 'Over' },
  { href: '/contact', label: 'Contact' },
];

export const specialismen = [
  { href: '#', label: 'Kasten op maat' },
  { href: '#', label: 'Bedden' },
  { href: '#', label: 'Keukens' },
  { href: '#', label: 'Trappen en hekken' },
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

export const contact = {
  email: 'info@astrohout.nl',
  instagram: { handle: '@astro.hout', href: 'https://www.instagram.com/astro.hout/' },
  // empty hides the icon in the footer; fill in a URL to show it again
  pinterest: '',
  linkedin: '',
};
