require('dotenv').config()
const axios = require('axios')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
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

    '@luxdamore/nuxt-prune-html',
    'nuxt-purgecss',
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

  pruneHtml: {
    enabled: true, // `true` in production
    hideGenericMessagesInConsole: false, // `false` in production
    hideErrorsInConsole: false, // deactivate the `console.error` method
    hookRenderRoute: true, // activate `hook:render:route`
    hookGeneratePage: true, // activate `hook:generate:page`
    selectors: [
      // CSS selectors to prune
      'link[rel="preload"][as="script"]',
      'script:not([type="application/ld+json"])',
    ],
    classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
    link: [], // inject custom links, only if pruned
    script: [], // inject custom scripts, only if pruned
    htmlElementClass: null, // a string added as a class to the <html> element if pruned
    cheerio: {
      // the config passed to the `cheerio.load(__config__)` method
      xmlMode: false,
    },
    types: [
      // it's possibile to add different rules for pruning
      'default-detect',
    ],

    // 👇🏻 Type: `default-detect`
    headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
    auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
    isAudit: true, // remove selectors if match with `auditUserAgent`
    isBot: true, // remove selectors if is a bot
    ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
    matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

    // 👇🏻 Type: 'query-parameters'
    queryParametersToPrune: [
      // array of objects (key-value)
      // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
      {
        key: 'prune',
        value: 'true',
      },
    ],
    queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

    // 👇🏻 Type: 'headers-exist'
    headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
    headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

    // Emitted events for callbacks methods
    onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
  },
}
