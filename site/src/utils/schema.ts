// Small builders for the JSON-LD that pages put in BaseLayout's head slot.

// The business node lives in BaseLayout under this @id; other nodes point at it.
export function bedrijfId(site: URL): string {
  return new URL('/#bedrijf', site).href;
}

// BreadcrumbList from [name, path] pairs, starting after Home: breadcrumbs(site, ['Portfolio', '/portfolio'], ...)
export function breadcrumbs(site: URL, ...kruimels: [naam: string, pad: string][]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'], ...kruimels].map(([naam, pad], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: naam,
      item: new URL(pad, site).href,
    })),
  };
}
