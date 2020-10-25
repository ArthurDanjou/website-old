import { Axios, Head } from './config'

export default {
  head: Head,

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
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    ['@nuxtjs/axios', Axios],
  ],

  buildDir: 'build',

  srcDir: 'src',

  dir: {
    assets: 'assets',
    layouts: 'templates/layouts',
    middleware: 'middleware',
    pages: 'templates/pages',
    static: 'public',
    store: 'store',
  },

  build: {},

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
}
