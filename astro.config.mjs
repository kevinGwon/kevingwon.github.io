import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const siteEnv = process.env.SITE;
const baseEnv = process.env.BASE;

export default defineConfig({
  site: siteEnv && /^https?:\/\//.test(siteEnv) ? siteEnv : undefined,
  base: baseEnv || undefined,
  integrations: [mdx(), tailwind(), sitemap()],
  markdown: { drafts: true },
});
