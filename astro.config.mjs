// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: https://vrossi18.github.io/its-educacao-lp
// Com domínio próprio, defina SITE_URL=https://seudominio.com.br e BASE_PATH=/ no build.
export default defineConfig({
  site: process.env.SITE_URL || "https://vrossi18.github.io",
  base: process.env.BASE_PATH || "/its-educacao-lp",
  compressHTML: true,
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
