// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "akxvYagdc08ae9dX5zmrrAtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
    "@hypernym/nuxt-anime",
    "@nuxtjs/tailwindcss",
  ],
  css: [
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  // @Hack: Fixed the Vue warning of 'mismatch node' casued by rendering FA icons(svg files)
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
    ],
  },
  // Provided anime.js apply globally
  anime: {
    provide: true,
  },
});
