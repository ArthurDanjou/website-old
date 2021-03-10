import { Axios, Head, ColorMode, Tailwind, Translation, Content, Robots, SiteMap, Redirect } from './config'

export default {
  head: Head,

  target: 'server',

  server: {
    host: '0.0.0.0',
    port: 3333
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    ['@nuxtjs/tailwindcss', Tailwind],
    ['@nuxtjs/color-mode', ColorMode],
    'nuxt-postcss8'
  ],

  modules: [
    ['@nuxtjs/axios', Axios],
    ['nuxt-i18n', Translation],
    ['@nuxt/content', Content],
    ['@nuxtjs/robots', Robots],
    ['@nuxtjs/sitemap', SiteMap],
    ['@nuxtjs/redirect-module', Redirect]
  ],

  buildDir: 'build',

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}
