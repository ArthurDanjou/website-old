<template>
  <div class="relative">
    <SideMenu />
    <div class="relative w-full overflow-hidden">
      <div
        id="slider"
        class="relative xl:static shadow-2xl overflow-hidden transform transition-all duration-500"
        :class="{'rounded-lg xl:rounded-none scale-90 md:scale-70 lg:scale-60 xl:scale-100 translate-x-9/12 sm:translate-x-4/12 lg:translate-x-3/12 xl:translate-x-0': opened}"
        :style="opened ? `max-height: ${height}px` : 'max-height: none'"
        :tabindex="opened ? -1 : 0"
      >
        <div
          @click.prevent="closeMenu"
          class="min-h-screen relative z-50 bg-white dark:bg-black w-full min-w-screen pb-20 xl:pb-0 duration-300"
          :class="{'cursor-pointer': opened}"
        >
          <Announcement />
          <Header />
          <Nuxt class="z-10 pt-16 lg:pt-24 content"/>
          <Footer />
        </div>
      </div>
    </div>
    <MobileNavbar />
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref, useRouter, useStore} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

export default {
  setup() {
    const store = useStore<State>()
    const $router = useRouter()

    $router.afterEach(() => {
      store.commit('SET_ROUTE', $router.currentRoute.path)
    })

    const closeMenu = () => {
      store.commit('TOGGLE_OPENED', false)
      document.getElementById('nav')!.classList.remove('z-50')
    }

    const height = ref(0)
    onMounted(() => {
      height.value = window.innerHeight
    })

    return {
      opened: computed(() => store.state.opened),
      closeMenu,
      height,
    }
  }
}
</script>
