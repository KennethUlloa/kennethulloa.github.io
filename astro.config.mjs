// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import yaml from '@rollup/plugin-yaml';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  integrations: [
    react({
      include: ["**/react/*"],
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing:{
      prefixDefaultLocale: false,
    },
  },
  site: 'https://kennethulloa.github.io',
});
