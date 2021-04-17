import {defineNuxtConfig} from "@nuxtjs/composition-api";
import {NuxtConfig} from "@nuxt/types";
import head from './settings/Head'
import buildModules from './settings/BuildModules'
import modules from './settings/Modules'
import build from './settings/Build'
import arch from './settings/Arch'
import plugins from './settings/Plugins'
import css from './settings/Style'
import configs from './settings/RuntimeConfig'

export default defineNuxtConfig({
  head,
  modules,
  ...arch,
  build,
  plugins,
  css,
  buildModules,
  ...configs
} as NuxtConfig)
