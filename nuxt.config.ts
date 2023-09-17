export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    // [
    //   "@nuxtjs/algolia",
    //   {
    //     apiKey: "2fae4c7e2cd6079feac3cb49160542f9",
    //     applicationId: "BY3IEY8A5V",
    //   },
    // ],
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  runtimeConfig: {
    public: {
      content: {
        // @ts-ignore
        // TODO: fix types
        documentDriven: {
          host: "https://hivemind.pitchpractice.ca",
        },
      },
      algolia: {
        applicationId: "BY3IEY8A5V",
        apiKey: "2fae4c7e2cd6079feac3cb49160542f9",
        langAttribute: "lang",
        docSearch: {
          indexName: "netlify_5f628b0e-8bb6-41c7-ad1f-b941716df428_master_all",
        },
        // @ts-ignore
        transformItems: (items) => items || [],
      },
    },
  },
});
