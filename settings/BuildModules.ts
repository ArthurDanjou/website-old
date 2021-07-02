// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
import {NuxtOptionsModule} from "@nuxt/types/config/module";
import {resolve} from 'path'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'

const color_mode = {
  preference: 'system',
  fallback: 'light',
  classPrefix: '',
  classSuffix: '',
}

const windicss = {
  scan: {
    dirs: [ './' ],
    exclude: [
      'node_modules',
      '.git',
      '.nuxt/**/*',
      'build/**/*',
      '*.template.html',
      'app.html'
    ],
    include: []
  },
  transformCSS: 'pre',
  preflight: {
    alias: {
      // add nuxt aliases
      'nuxt-link': 'a',
      // @nuxt/image module
      'nuxt-img': 'img',
    }
  }
}

const vite = {
  vue: {
    include: [/\.vue$/, /\.md$/],
  },
  plugins: [
    ViteComponents({
      dirs: [
        resolve('./components'),
      ],
      extensions: ['vue', 'md'],
      customLoaderMatcher: path => path.endsWith('.md'),
    }),
    WindiCSS({
      scan: {
        dirs: [
          resolve('./pages'),
          resolve('./components'),
        ],
      },
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Prism)
      },
    }),
  ],
  ssr: true
}

export default [
  '@nuxt/typescript-build',
  '@nuxtjs/composition-api/module',
  ['nuxt-windicss', windicss],
  ['@nuxtjs/color-mode', color_mode],
  //['nuxt-vite', vite]
] as NuxtOptionsModule[]
