// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Not live yet: adjust once the domain is known. Used for the sitemap, canonical and share links.
  site: 'https://astrohout.nl',
  // clean URLs: /over instead of /over/ or over.html
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
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
