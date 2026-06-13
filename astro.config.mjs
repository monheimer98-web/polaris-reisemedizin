// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/config/site';

// Deployment-Ziel über Umgebungsvariablen steuerbar, ohne Code zu ändern:
// - Standard (lokaler Build / Custom-Domain): Root-Pfad „/" + echte Domain.
// - GitHub-Pages-Projekt-Vorschau: der Deploy-Workflow setzt PUBLIC_BASE_PATH
//   („/polaris-reisemedizin/"), PUBLIC_SITE_URL („https://<user>.github.io")
//   und PUBLIC_NOINDEX=true (vgl. SEO.astro), damit Links, Assets, Canonical/
//   Sitemap unter dem Unterpfad stimmen und die Vorschau nicht indexiert wird.
const site = process.env.PUBLIC_SITE_URL ?? SITE_URL;
const base = process.env.PUBLIC_BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  // German is the default and served unprefixed (/), English under /en/.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }),
  ],
});
