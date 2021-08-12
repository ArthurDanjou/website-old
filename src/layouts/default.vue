<template>
  <div>
    <SideMenu />
    <div
      class="z-50 relative top-0 left-0 w-full duration-500 h-1/2"
      :class="{'opened': opened}"
      :style="`max-height: ${height}px`"
    >
      <div @click="closeMenu" class="z-50 bg-white dark:bg-black overflow-hidden overflow-x-hidden w-full min-w-screen" :class="{'cursor-pointer': opened}">
        <Announcement />
        <Header />
        <Nuxt class="z-10 pt-16 lg:pt-24 content"/>
        <Footer />
      </div>
    </div>
    <MobileNavbar />
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref, useStore} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

export default {
  setup() {
    const store = useStore<State>()

    const opened = computed(() => store.state.opened)

    const closeMenu = () => {
      store.commit('TOGGLE_OPENED', false)
    }

    const height = ref(0)
    onMounted(() => {
      height.value = window.innerHeight
    })

    return {
      opened,
      closeMenu,
      height
    }
  }
}
</script>

<style scoped lang="scss">
.opened {
  @apply rounded-lg overflow-hidden overflow-x-hidden transform scale-90 translate-x-9/12 transition-all duration-500;
}
</style>
