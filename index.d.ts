import { NuxtAxiosInstance } from '@nuxtjs/axios'
import VueI18n, {IVueI18n} from "vue-i18n";

declare module 'vue/types/vue' {

  interface Vue {
    $axios: NuxtAxiosInstance,
  }
}
declare module '@nuxt/types' {

  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance,
  }

  interface Context {
    $axios: NuxtAxiosInstance,
    $i18n: VueI18n & IVueI18n
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}
