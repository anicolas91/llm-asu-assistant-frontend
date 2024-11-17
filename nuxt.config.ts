// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'ASU LLM Assistant',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'An AI assistant designed to provide information about ASU Online.',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'ASU LLM Assistant',
        },
      ],
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
        verbatimModuleSyntax: false,
        strict: true,
        types: ['vite/client'],
      },
    },
  },
  runtimeConfig: {
    llmSrcUrl: process.env.LLM_SOURCE_URL,
    public: {
      githubUrl: 'https://github.com/anicolas91',
      linkedinUrl: 'https://www.linkedin.com/in/andrea-nicolas-flores/',
      email: 'mailto:andreanicolas91@gmail.com',
    },
  },
  css: ['~/assets/css/page_transition.scss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
})
