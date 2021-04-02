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
  port: 3333
}

const components = true

const buildDir = 'build'

const ssr = true

export default { srcDir, dir, build, pageTransition, target, server, buildDir, components, ssr }
