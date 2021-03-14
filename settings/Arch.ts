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

const generate = {
  interval: 2000,
}

const pageTransition = {
  name: 'page',
  mode: 'out-in',
}

const target = 'server'

const server = {
  host: '0.0.0.0',
  port: 3333
}

const buildDir = 'build'

export default { srcDir, dir, generate, build, pageTransition, target, server, buildDir }
