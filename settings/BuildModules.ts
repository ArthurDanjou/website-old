// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
const color_mode = {
  preference: 'system',
  fallback: 'light',
  classPrefix: '',
  classSuffix: '',
}

export default  [
  '@nuxt/typescript-build',
  '@nuxtjs/composition-api',
  '@nuxt/postcss8',
  'nuxt-windicss',
  'nuxt-vite',
  ['@nuxtjs/color-mode', color_mode],
]
