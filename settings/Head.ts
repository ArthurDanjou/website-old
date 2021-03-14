// Global page headers: https://go.nuxtjs.dev/config-head
const params = {
  title: 'nuxt-ts-app',
  color: '#0DA5FF',
  image: '/images/image.jpg',
  url: 'https://my-domain.com',
  favicon: {
    type: 'image/jpg',
    href: '/favicon.jpg',
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
}

export default {
  htmlAttrs: { lang: 'fr-FR' },
  title: params.title,
  meta: [
    { charset: 'utf-8' },
    { lang: 'fr-FR' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: params.description },

    /**
     * Open graph
     * See : https://ogp.me/
     */
    { hid: 'og:type', name: 'og:type', content: 'website' },
    { hid: 'og:url', name: 'og:url', content: params.url },
    { hid: 'og:title', name: 'og:title', content: params.title },
    { hid: 'og:site_name', name: 'og:site_name', content: params.title },
    { hid: 'og:locale', name: 'og:locale', content: 'fr' },
    { hid: 'og:image', name: 'og:image', content: params.image },

    { name: 'msapplication-TileColor', content: params.color },
    { name: 'theme-color', content: params.color },
  ],
  link: [{ rel: 'icon', type: params.favicon.type, href: params.favicon.href }],
}
