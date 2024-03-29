const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | FEMLIGHT',
    title: 'Customize' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Open+Sans:300|Raleway'
      } // ,
      // { rel: 'stylesheet', href: '/assets/css/style.scss' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/vue-carousel.js', ssr: false },
    // { src: '~/plugins/dropzone.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: '#94d31b',
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },
  env: {
    baseUrl: process.env.NUXT_ENV_BASE_URL || 'http://mike.www.femlight.com/xxx/api',
    clientSecret : process.env.NUXT_ENV_CLIENT_SECRET || 'DINJRja6MRzW2VtbSW0XokCfwdu6O2tNDeVSNIPU',
    helloSignClientID: process.env.NUXT_ENV_HELLOSIGN_CLIENT_ID || '3d890329ad5b164acfdcc56b9da5777c'
  }
}
