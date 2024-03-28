import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: '...',
    applyBaseStyles: true,
  }
    )],
  site: 'https://mchavezf.github.io',
  base: 'pageArboldeLuzMontessori',
});