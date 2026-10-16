// The business itself as schema.org data. BaseLayout puts it on every page; other pages
// point to it with { '@id': bedrijfId(site) } instead of describing it again.
import { contact, werkplaats } from '../data/site';
import { plaatsen } from '../data/plaatsen';

export const bedrijfId = (site: URL) => new URL('/#bedrijf', site).href;

// HomeAndConstructionBusiness rather than FurnitureStore: there is no shop or showroom with opening
// hours; the work is designed, made and installed in people's homes (kasten, keukens, trappen).
export function bedrijfSchema(site: URL, image: string) {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': bedrijfId(site),
    name: 'Astrohout',
    url: site.href,
    email: contact.email,
    logo: new URL('/logo/astrohout-512.png', site).href,
    image,
    sameAs: [contact.instagram.href, contact.pinterest, contact.linkedin].filter(Boolean),
    // no street on purpose: the workshop is at home
    address: { '@type': 'PostalAddress', addressLocality: werkplaats.plaats, addressRegion: werkplaats.provincie, addressCountry: 'NL' },
    geo: { '@type': 'GeoCoordinates', latitude: werkplaats.lat, longitude: werkplaats.lon },
    areaServed: plaatsen.map((p) => ({ '@type': 'City', name: p.naam, containedInPlace: { '@type': 'State', name: p.provincie } })),
  };
}
