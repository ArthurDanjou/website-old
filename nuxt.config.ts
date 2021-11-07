import WindicssConfig from "./settings/WindicssConfig";
import ColorModeConfig from "./settings/ColorModeConfig";
import HeadConfig from "./settings/HeadConfig";
import SentryConfig from "./settings/SentryConfig";
import AxiosConfig from "./settings/AxiosConfig";
import I18nConfig from "./settings/I18nConfig";
import StorageConfig from "./settings/StorageConfig";
import RobotsConfig from "./settings/RobotsConfig";
import EnvConfig from "./settings/EnvConfig";
import RedirectConfig from "./settings/RedirectConfig";
import SiteMapConfig from "./settings/SiteMapConfig";
import {defineNuxtConfig} from "nuxt3";

export default defineNuxtConfig({
  target: 'server',
  ssr: true,

  server: {
    host: '0.0.0.0',
    port: 3333
  },

  proxy: {
    '/api': {
      target: 'https://athena.arthurdanjou.fr',
      pathRewrite: { "^/api": "" }
    }
  },

  router: {
    middleware: [
      'maintenance'
    ]
  },

  srcDir: 'src',
  dir: {
    assets: 'assets',
    layouts: 'layouts',
    middleware: 'middlewares',
    pages: 'pages',
    static: 'static',
    store: 'store',
  },

  components: [
    'components',
    'components/icons'
  ],

  build: {
    extractCSS: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ],
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  buildModules: [
    ['nuxt-windicss', WindicssConfig],
    // ['@nuxtjs/color-mode', ColorModeConfig],
  ],

  modules: [
    // ['@nuxtjs/axios', AxiosConfig],
    // ['@nuxtjs/i18n', I18nConfig],
    // ['@nuxt/content', content],
    // ['@nuxtjs/universal-storage', StorageConfig],
    // ['@nuxtjs/robots', RobotsConfig],
    // ['@nuxtjs/sitemap', SiteMapConfig],
    // ['@nuxtjs/redirect-module', RedirectConfig],
    // ['@nuxtjs/dotenv', EnvConfig],
    // ['@nuxtjs/sentry', SentryConfig]
  ],

  head: {
    meta: [
      { charset: 'utf-8' },
      { lang: 'fr-FR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: HeadConfig.description },

      /**
       * Open graph
       * See : https://ogp.me/
       */
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: HeadConfig.url },
      { hid: 'og:title', name: 'og:title', content: HeadConfig.title },
      { hid: 'og:site_name', name: 'og:site_name', content: HeadConfig.title },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'og:image', name: 'og:image', content: HeadConfig.image },

      { name: 'msapplication-TileColor', content: HeadConfig.color },
      { name: 'theme-color', content: HeadConfig.color },
    ],
    link: [
      { rel: 'icon', type: HeadConfig.favicon.type, href: HeadConfig.favicon.href },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'true' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Roboto:wght@900&display=swap' }
    ],
  },

  plugins: [
    {
      src: '~/plugins/i18n.ts'
    }
  ],

  publicRuntimeConfig: {

  },

  privateRuntimeConfig: {
    API_TOKEN: process.env.API_TOKEN,
    SENTRY_DSN: process.env.SENTRY_DSN
  }
})
