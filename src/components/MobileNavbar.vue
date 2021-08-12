<template>
  <div
    class="w-full z-100 fixed bottom-0 left-0 md:hidden duration-500"
    :class="{'opened': isOpened}"
  >
    <ul
      class="bg-gray-200 dark:bg-gray-800 m-4 rounded-3xl dark:text-white text-sm flex items-center justify-around h-20 navbar-bottom-items"
    >
      <nuxt-link to="/" class="w-1/5">
        <li class="h-full w-full font-medium flex flex-col items-center justify-center">
          <HomeIcon :active="isWindow('')"/>
          {{ debug }}
        </li>
      </nuxt-link>
      <nuxt-link to="/about" class="w-1/5">
        <li class="font-medium flex flex-col items-center justify-center">
          <UserIcon :active="isWindow('/about')"/>
        </li>
      </nuxt-link>
      <nuxt-link to="/blog" class="w-1/5">
        <li class="font-medium flex flex-col items-center justify-center">
          <BookIcon :active="isWindow('/blog')"/>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects" class="w-1/5">
        <li class="font-medium flex flex-col items-center justify-center">
          <LightbulbIcon :active="isWindow('/projects')"/>
        </li>
      </nuxt-link>
      <li @click='toggleMenu' class="w-1/5 flex flex-col items-center justify-center cursor-pointer">
        <MenuIcon :type="getMenuIconType"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useRouter, useStore} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

const PAGE_TYPE = {
  projects: 1,
}

export default defineComponent({
  name: "MobileNavbar",
  setup() {
    const $router = useRouter()
    const debug = computed(() => $router.currentRoute.path)

    const isWindow = (loc: string) => {
      if (loc === '') return $router.currentRoute.path === "/"
      else return $router.currentRoute.path.includes(loc)
    }

    const getMenuIconType = computed(() => PAGE_TYPE[$router.currentRoute.path.split('/')[1]] || 0)

    const store = useStore<State>()
    const toggleMenu = () => {
      window.scrollTo({
        top: 0,
      })
      store.commit('TOGGLE_OPENED', !store.state.opened)
    }

    $router.afterEach(() => {
      store.commit('TOGGLE_OPENED', false)
    })

    const isOpened = computed(() => store.state.opened)

    return {
      isWindow,
      toggleMenu,
      isOpened,
      getMenuIconType,
      debug
    }
  }
})
</script>

<style scoped lang="scss">
.opened {
  @apply transform translate-x-9/12 scale-90 -translate-y-10 duration-500;
}
</style>
