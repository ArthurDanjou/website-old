<template>
  <div>
    <SideMenu />
    <div class="w-full overflow-hidden xl:overflow-visible">
      <div
        id="slider"
        class="xl:static shadow-2xl transition-all duration-500 overflow-hidden xl:overflow-visible"
        :class="{'transform scale-90 md:scale-70 lg:scale-60 xl:scale-100 rounded-lg xl:rounded-none translate-x-10/12 sm:translate-x-4/12 lg:translate-x-3/12 xl:translate-x-0': opened}"
        :tabindex="opened ? -1 : 0"
      >
        <div
          @click="closeMenu"
          class="min-h-screen relative bg-white dark:bg-black w-full min-w-screen pb-20 xl:pb-0 duration-300"
        >
          <Announce />
          <Header />
          <Scroller />
          <Nuxt class="pt-16 content"/>
          <Footer />
        </div>
      </div>
    </div>
    <MobileNavbar />
  </div>
</template>

<script lang="ts">
import {computed, useRouter, useStore} from "@nuxt/bridge/dist/runtime/capi.legacy";
import {options, useBlobity} from "@/plugins/Blobity";

export default {
  setup() {
    const store = useStore()
    const $router = useRouter()

    $router.afterEach(() => {
      store.commit('SET_ROUTE', $router.currentRoute.path)
    })

    const closeMenu = () => {
      store.commit('TOGGLE_OPENED', false)
      document.getElementById('nav')!.classList.remove('z-50')
      setTimeout(() => {
        document.getElementById('slider')!.style.maxHeight = 'none'
      }, 500)
    }

    useBlobity(options)

    return {
      opened: computed(() => store.state.opened),
      closeMenu,
    }
  }
}
</script>
