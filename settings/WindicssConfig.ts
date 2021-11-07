export default {
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
