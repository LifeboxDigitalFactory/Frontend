// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  app: {
    head: {
      title: "Lifebox Academy",
    },
  },
  css: ["@mdi/font/css/materialdesignicons.min.css"],
  imports: {
    dirs: ["endpoints", "stores"],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://127.0.0.1:8000",
    },
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            colors: {
              primary: "#0B6E4F",
              secondary: "#1A535C",
              background: "#F7F9F8",
            },
          },
        },
      },
    },
  },
})
