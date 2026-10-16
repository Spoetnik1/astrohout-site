# Astrohout website

De website, gebouwd met [Astro](https://astro.build). Bij het bouwen komen er gewone HTML-pagina's uit (in `dist/client/`). De site draait op [Cloudflare](https://developers.cloudflare.com/workers/static-assets/).

## Starten

```bash
cd site
npm install      # eenmalig
npm run dev      # lokale preview op http://localhost:4321, ververst vanzelf bij opslaan
npm run build    # bouwt de site naar dist/
npm run preview  # bekijkt de gebouwde site, zoals hij op Cloudflare draait
```

## Online zetten

De site staat op Cloudflare (Workers, met de `@astrojs/cloudflare`-adapter). Cloudflare bouwt hem zelf vanuit GitHub:

- een merge naar `main` gaat automatisch live op https://astrohout.nl;
- elke pull request krijgt een eigen preview-link, zodat je wijzigingen eerst kunt bekijken.

De instellingen staan in `wrangler.jsonc`. Alle pagina's blijven gewone HTML; alleen `/api/contact` (het contactformulier)
draait op de server. Wil je later nog iets op de server laten draaien, zet dan `export const prerender = false` in dat bestand.
Een database (D1), opslag voor bestanden (R2) en geheime sleutels voeg je toe via `wrangler.jsonc` en het Cloudflare-dashboard.

## Contactformulier

Het formulier op `/contact` stuurt naar `src/pages/api/contact.ts`. Die controleert de velden en Turnstile (tegen spam)
en mailt het bericht via Cloudflare naar info@astrohout.nl, van website@astrohout.nl. Op *Beantwoorden* klikken
in je mailprogramma gaat direct naar de bezoeker. Adressen en de Turnstile-sitekey staan in `src/data/site.ts` (`contactform`).

Eenmalig instellen in het Cloudflare-dashboard:

1. **Turnstile**: maak een widget aan (Turnstile > Add widget) voor `astrohout.nl` en, voor de preview-links, `workers.dev`.
   Zet de *site key* in `contactform.turnstileSiteKey` in `src/data/site.ts`.
2. **Geheime sleutel**: zet de *secret key* van die widget bij de Worker `astrohout-site` onder
   Settings > Variables and Secrets, als secret `TURNSTILE_SECRET_KEY`. Niet bij *Builds > Variables and secrets*:
   die zijn er alleen tijdens het bouwen, de draaiende site ziet ze niet. Zolang de sleutel ontbreekt,
   toont het formulier een foutmelding met het e-mailadres.
3. **Mail versturen**: astrohout.nl moet als domein in Cloudflare staan. Zet *Email Sending* aan voor het domein
   (Compute > Email Service) en voeg de DNS-records toe die het voorstelt (SPF en DKIM).
   Pas op dat je de bestaande MX-records van je e-mailprovider niet weghaalt.

Bij `npm run dev` gebruikt het formulier de testsleutels van Turnstile (altijd goed) en wordt er niets echt verstuurd:
het bericht verschijnt in de terminal.

## Waar staat wat

| Wat je wilt aanpassen | Bestand |
| --- | --- |
| Menu, e-mailadres, social links, footerlinks | `src/data/site.ts` |
| Specialismepagina's (`/kasten-op-maat` enz.: tekst en footerlink) | `src/data/specialismen.ts`; welke projecten erop staan: `specialismen` bij het project in `src/data/projecten.ts` |
| Portfolioprojecten (foto, titel, alt-tekst) | `src/data/projecten.ts` + foto in `src/assets/portfolio/` |
| Projectpagina (`/portfolio/<slug>`: specificaties en foto's) | `slug`, `specs` en `fotos` bij het project in `src/data/projecten.ts` |
| Werkgebied en plaatspagina's (`/werkgebied`, `/meubelmaker-<plaats>`: teksten, rijtijden) | `src/data/plaatsen.ts`; plek van de werkplaats: `werkplaats` in `src/data/site.ts` |
| Teksten van een pagina | `src/pages/<pagina>.astro` |
| Algemene voorwaarden, privacyverklaring | `src/pages/*.md` (Markdown; `[invulvelden]` staan gemarkeerd) |
| Header, spine, footer | `src/components/` |
| Gedeelde huisstijl (kleuren, knoppen, header, footer) | `src/styles/global.css` |
| Domein (voor sitemap en deellinks) | `site` in `astro.config.mjs` |

Foto's in `src/assets/` worden bij het bouwen automatisch verkleind en omgezet naar WebP, in meerdere formaten.
Gebruik daarvoor gerust grote originelen; ze worden niet zo op de site gezet.
Lettertypen worden bij het bouwen gedownload en vanaf de eigen site geserveerd (geen Google Fonts).

## Nog te doen

- Concepttekst van de plaatspagina's nakijken (`src/data/plaatsen.ts`, gemarkeerd met `TODO AI-GENERATED`), vooral de rijtijden en wat er over de werkwijze staat
- Concepttekst van de specialismepagina's nakijken en herschrijven (`src/data/specialismen.ts`, gemarkeerd met `TODO AI-GENERATED`)
- Concepttekst van de projectpagina's nakijken en herschrijven, samen met de nieuwe foto's (`src/data/projecten.ts`, gemarkeerd met `TODO AI-GENERATED`)
- Contactformulier in het Cloudflare-dashboard instellen (zie [Contactformulier](#contactformulier))
- Bezoekersstatistieken (privacyvriendelijk)
