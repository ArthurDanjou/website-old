import {defineNuxtConfig} from "@nuxtjs/composition-api";
import head from './settings/Head'
import buildModules from './settings/BuildModules'
import modules from './settings/Modules'
import build from './settings/Build'
import arch from './settings/Arch'
import plugins from './settings/Plugins'
import css from './settings/Style'
import {NuxtConfig} from "@nuxt/types";

export default defineNuxtConfig({
  head,
  modules,
  ...arch,
  build,
  plugins,
  css,
  buildModules
} as NuxtConfig)
