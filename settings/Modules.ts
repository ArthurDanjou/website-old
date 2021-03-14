const axios = {
  credentials: true,
  baseURL: process.env.NODE_ENV == 'production'
  ? 'https://my-domain.fr'
  : 'http://localhost:3333',
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
      iso: 'fr-FR',
      file: 'fr-FR.ts',
      name: 'Français'
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
  apiPrefix: 'api',
  nestedProperties: ['categories.slug'],
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

export default [
  ['@nuxtjs/axios', axios],
  ['nuxt-i18n', i18n],
  ['@nuxt/content', content],
]
