import {NuxtOptionsModule} from "@nuxt/types/config/module";

const axios = {
  proxy: true,
  credentials: true,
  proxyHeaders: true
}

const i18n = {
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-EN',
      file: 'en-EN.ts',
    },
    {
      code: 'fr',
      name: 'Français',
      iso: 'fr-FR',
      file: 'fr-FR.ts'
    },
  ],
  strategy: 'no_prefix',
  defaultLocale: 'en',
  langDir: 'locales/',
  lazy: true,
  seo: true,
  vueI18n: {
    fallbackLocale: 'en',
  },
}

const content = {
  nestedProperties: ['skills.slug'],
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-darcula.css'
    },
    remarkPlugins: [
      'remark-squeeze-paragraphs',
      'remark-slug',
      'remark-autolink-headings',
      'remark-external-links',
      'remark-footnotes',
    ],
  }
}

const storage = {
  cookie: {
    prefix: 'arthurdanjou.fr/',
    options: {
      path: '/'
    }
  },
}

const sitemap = {
  path: '/sitemap.xml',
  hostname: 'https://arthurdanjou.fr',
  cacheTime: 720000,
  gzip: true,
  generate: false,
}

const robots = {
  UserAgent: '*',
  Sitemap: 'https://arthurdanjou.fr/sitemap.xml',
  Allow: '*'
}

const redirect = [
  { from: '/source', to: 'https://github.com/arthurdanjou/artdanj-website' },
  { from: '/shelf', to: '/blog' },
  { from: '/posts', to: '/blog' },
  { from: '/resume', to: '/cv' }
]

const env = {
  path: process.cwd()
}

const sentry = {
  dsn: process.env.SENTRY_DSN
}

export default [
  ['@nuxtjs/axios', axios],
  ['@nuxtjs/i18n', i18n],
  ['@nuxt/content', content],
  ['@nuxtjs/universal-storage', storage],
  ['@nuxtjs/robots', robots],
  ['@nuxtjs/sitemap', sitemap],
  ['@nuxtjs/redirect-module', redirect],
  ['@nuxtjs/dotenv', env],
  ['@nuxtjs/sentry', sentry]
] as NuxtOptionsModule[]
