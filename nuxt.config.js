require('dotenv').config()
const axios = require('axios')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  server: {
    port: process.env.PORT,
    host: process.env.HOST,
    serverUrl: process.env.API_URL
  },
  env: {
    serverUrl: process.env.API_URL
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/anime.js',
    '@/plugins/VueObserver.js',
    {src: '~/plugins/splide.client.js', ssr:false},
    { src: '~/plugins/fullpage.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // fullpage scroll
    //'nuxt-fullpage.js',
    // svg sprite
    '@nuxtjs/svg-sprite',
    // Doc: https://cloudinary.nuxtjs.org/
    '@nuxtjs/cloudinary',
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/yandex-metrika',
    //all time in end
    '@nuxtjs/sitemap',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: process.env.API_URL,
    credentials: true,
    header: {
      common: {
        'X-localization': 'ru'
      }
    },
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    useComponent: true
  },

  /* i18n */
  i18n: {
    parsePages: false,
    locales: [
      {
        code: 'ru',
        file: 'ru-RU.js',
        name: 'Русский'
      },
      {
        code: 'en',
        file: 'en-EN.js',
        name: 'English'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
  },
  /*
  ** nuxt sitemap
  **
  */
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: [
      '/_icons',
    ],
  },

  yandexMetrika: {
    id: process.env.YANDEX_METRIKA,
    webvisor: true,
    clickmap:true,
    useCDN:false,
    trackLinks:true,
    accurateTrackBounce:true,
  },


  router: {
    middleware: ['language']
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
}
