import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// buildホストから環境変数を取得
const BASE = process.env.BASE;
const SITE = process.env.SITE ? process.env.SITE : "http://127.0.0.1:4321/";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: SITE,
  base: BASE,
});