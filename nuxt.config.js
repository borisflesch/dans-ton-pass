export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DansTonPass - L'Explorateur de Pass Sanitaire Covid",
    htmlAttrs: {
      lang: 'fr'
    },
    bodyAttrs: {
      class: 'material-template'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Explorez votre Certificat Covid Digital et découvrez toutes les informations qu\'il contient sur vous et vos certificats dans les moindres détails (test, guérison, vaccination).' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: "/js/jquery-2.1.3.min.js", mode: 'client' },
      { src: "/js/bootstrap.min.js", mode: 'client' },
      { src: "/js/main.js", mode: 'client' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/css/bootstrap.min.css",
    "~/static/css/normalize.css",
    "~/static/css/animate.css",
    "~/static/css/transition-animations.css",
    "~/static/css/owl.carousel.css",
    "~/static/css/magnific-popup.css",
    "~/static/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/qrCodeReader.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
