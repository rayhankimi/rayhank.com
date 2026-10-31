// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  // Ikon diambil dari paket lokal @iconify-json/*, bukan dari API luar.
  icon: {
    serverBundle: { collections: ['mdi', 'simple-icons'] },
  },
  css: [
    '@fontsource-variable/plus-jakarta-sans',
    '@fontsource/commit-mono/300.css',
    '@fontsource/commit-mono/400.css',
    '~/assets/css/main.css',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Alamat pendek untuk CV, sama seperti di situs lama.
  routeRules: {
    '/cv': { redirect: '/cv4.pdf' },
  },
})
