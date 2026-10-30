// QR codes on flyers. Each code is astrohout.nl/qr/<code>; scanning it lands on `naar`.
// The redirect is temporary (302), so `naar` can change at any time, even after the flyer is printed.
// Never reuse a code for a new flyer: scans are counted per code (see src/pages/qr/[code].ts).
export type QrCode = {
  naar: string;          // page on the site ('/portfolio') or a full URL
  omschrijving: string;  // which flyer this is, for yourself
};

export const qrCodes: Record<string, QrCode> = {
  test: { naar: '/', omschrijving: 'Testcode, niet printen' },
  'tmb-plaat-20x20': { naar: '/', omschrijving: 'TMB plaat 20x20' },
};
