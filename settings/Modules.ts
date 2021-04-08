import {NuxtOptionsModule} from "@nuxt/types/config/module";

const axios = {
  credentials: true,
  baseURL: 'https://api.arthurdanjou.fr'
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

const storage = {
  cookie: {
    prefix: 'artsite',
    options: {
      path: '/'
    }
  },
}

export default [
  ['@nuxtjs/axios', axios],
  ['nuxt-i18n', i18n],
  ['@nuxt/content', content],
  ['@nuxtjs/universal-storage', storage]
] as NuxtOptionsModule[]
