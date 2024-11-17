// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "LLM ASU Assistant",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
        verbatimModuleSyntax: false,
        strict: true,
        types: ["vite/client"],
      },
    },
  },
  runtimeConfig: {
    llmSrcUrl: process.env.LLM_SOURCE_URL,
  },
  css: ["~/assets/css/page_transition.scss"],
  tailwindcss: {
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },
});
