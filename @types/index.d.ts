import { NuxtAxiosInstance } from '@nuxtjs/axios'
import VueI18n, {IVueI18n} from "vue-i18n";
import {ColorModeInstance} from "@nuxtjs/color-mode/types/color-mode";
import {NuxtApp} from "@nuxt/types/app";
import {NuxtStorage} from "@nuxtjs/universal-storage";

declare module 'vue/types/vue' {

  interface Vue {
    $axios: NuxtAxiosInstance,
    i18n: VueI18n & IVueI18n
  }
}
declare module '@nuxt/types' {

  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance,
    i18n: VueI18n & IVueI18n
  }

  interface Context {
    $axios: NuxtAxiosInstance,
    i18n: VueI18n & IVueI18n
    $colorMode: ColorModeInstance,
    $app: NuxtApp,
    $storage: NuxtStorage
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance,
    i18n: VueI18n & IVueI18n
  }
}
