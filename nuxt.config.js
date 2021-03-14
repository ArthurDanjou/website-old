import {defineNuxtConfig} from "@nuxtjs/composition-api";
import head from './settings/Head'
import buildModules from './settings/BuildModules'
import modules from './settings/Modules'
import build from './settings/Build'
import arch from './settings/Arch'
import plugins from './settings/Plugins'
import css from './settings/Style'

export default defineNuxtConfig({
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  head,
  modules,
  ...arch,
  build,
  plugins,
  css,
  buildModules,

})
