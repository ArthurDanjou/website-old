// Global page headers: https://go.nuxtjs.dev/config-head
import {NuxtOptionsHead} from "@nuxt/types/config/head";

const params = {
  title: 'Arthur Danjou • Software Engineer',
  color: '#00a0ff',
  image: 'assets/images/memojies/Hey.png',
  url: 'https://arthurdanjou.fr',
  favicon: {
    type: 'image/jpg',
    href: '/favicon.png',
  },
  description:
    '👋 • Software Engineer passionate about networking, infrastructure and cloud • 18 yo • Paris, France',
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
    { hid: 'og:description', name: 'og:description', content: params.description },

    { name: 'msapplication-TileColor', content: params.color },
    { name: 'theme-color', content: params.color },
  ],
  link: [
    { rel: 'icon', type: params.favicon.type, href: params.favicon.href },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'true' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Roboto:wght@900&display=swap' }
  ],
} as NuxtOptionsHead
