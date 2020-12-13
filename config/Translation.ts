export default {
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-Us',
      file: 'en-US.ts',
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
