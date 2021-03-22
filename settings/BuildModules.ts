// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
import {NuxtOptionsModule} from "@nuxt/types/config/module";

const color_mode = {
  preference: 'system',
  fallback: 'light',
  classPrefix: '',
  classSuffix: '',
}

const tailwindcss = {
  cssPath: './assets/css/tailwind.css',
  configPath: 'tailwind.config.js',
  exposeConfig: true,
  jit: true
}

export default [
  '@nuxt/typescript-build',
  '@nuxtjs/composition-api',
  '@nuxt/postcss8',
  ['@nuxtjs/tailwindcss', tailwindcss],
  //'nuxt-vite',
  ['@nuxtjs/color-mode', color_mode],
] as NuxtOptionsModule[]
