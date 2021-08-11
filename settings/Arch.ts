const srcDir = 'src'

const dir = {
  assets: 'assets',
  layouts: 'layouts',
  middleware: 'middlewares',
  pages: 'pages',
  static: 'static',
  store: 'store',
}

const build = {
  extractCss: true,
}

const pageTransition = {
  name: 'page',
  mode: 'out-in',
}

const target = 'server'

const server = {
  port: 3333,
  host: '0.0.0.0'
}

const components = [
  'components',
  'components/icons'
]

const buildDir = 'build'

const ssr = true

const proxy = {
  '/api': {
    target: 'https://athena.arthurdanjou.fr',
    pathRewrite: { "^/api": "" }
  }
}

export default { srcDir, dir, build, pageTransition, target, server, buildDir, components, ssr, proxy }
