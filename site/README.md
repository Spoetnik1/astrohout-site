# Astrohout website

De website, gebouwd met [Astro](https://astro.build). Bij het bouwen komen er gewone HTML-pagina's uit (in `dist/`), die op elke hosting werken.

## Starten

```bash
cd site
npm install      # eenmalig
npm run dev      # lokale preview op http://localhost:4321, ververst vanzelf bij opslaan
npm run build    # bouwt de site naar dist/
npm run preview  # bekijkt de gebouwde site
```

## Waar staat wat

| Wat je wilt aanpassen | Bestand |
| --- | --- |
| Menu, e-mailadres, social links, footerlinks | `src/data/site.ts` |
| Portfolioprojecten (foto, titel, alt-tekst) | `src/data/projecten.ts` + foto in `src/assets/portfolio/` |
| Teksten van een pagina | `src/pages/<pagina>.astro` |
| Algemene voorwaarden, privacyverklaring | `src/pages/*.md` (Markdown; `[invulvelden]` staan gemarkeerd) |
| Header, spine, footer | `src/components/` |
| Gedeelde huisstijl (kleuren, knoppen, header, footer) | `src/styles/global.css` |
| Domein (voor sitemap en deellinks) | `site` in `astro.config.mjs` |

Foto's in `src/assets/` worden bij het bouwen automatisch verkleind en omgezet naar WebP, in meerdere formaten.
Gebruik daarvoor gerust grote originelen; ze worden niet zo op de site gezet.
Lettertypen worden bij het bouwen gedownload en vanaf de eigen site geserveerd (geen Google Fonts).

## Nog te doen

- Contactformulier echt laten versturen (samen met de keuze voor hosting)
- Bezoekersstatistieken (privacyvriendelijk)
- Domein invullen in `astro.config.mjs`
