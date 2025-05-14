// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/content'],
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss(),],
  },
})