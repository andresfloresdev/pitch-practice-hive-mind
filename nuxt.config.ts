export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en-CA",
      },
    },
  },
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
        langAttribute: "lang",
        docSearch: {
          indexName: "docsearch",
        },
      },
    },
  },
});
