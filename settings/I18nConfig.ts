export default {
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
