// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { readdirSync, readFileSync } from 'node:fs';

// legal pages (src/pages/*.md) whose 'bijgewerkt' date is still a [placeholder]: they carry noindex
// (see LegalLayout.astro), so they stay out of the sitemap too until a real date is filled in
const pagesDir = new URL('./src/pages/', import.meta.url);
const concepten = readdirSync(pagesDir)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /^bijgewerkt:\s*["']?\[/m.test(readFileSync(new URL(f, pagesDir), 'utf-8')))
  .map((f) => `/${f.replace(/\.md$/, '')}`);

export default defineConfig({
  // the live domain. Used for the sitemap, canonical and share links.
  site: 'https://astrohout.nl',
  // clean URLs: /over instead of /over/ or over.html
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !concepten.includes(new URL(page).pathname) })],
  // hosted on Cloudflare: pages stay static HTML, server routes (like /api/contact) can opt in with `export const prerender = false`
  adapter: cloudflare(),
  // no Astro sessions: the site has no logins or carts, so it needs no KV storage on Cloudflare
  session: false,
  // keep the texts exactly as written: no automatic curly quotes or dashes
  markdown: { smartypants: false },
  // fonts are downloaded at build time and served from the site itself, so visitors never hit Google
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Bebas Neue',
      cssVariable: '--font-bebas',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Impact', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Caveat',
      cssVariable: '--font-caveat',
      weights: [500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['cursive'],
    },
  ],
});
