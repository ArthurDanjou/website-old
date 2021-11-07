<template>
  <div
    class="z-index-3 xl:hidden fixed top-auto bottom-0 w-full md:w-2/3 md:left-1/2 p-4 transition-all duration-500 transform md:-translate-x-1/2"
    :class="{'-translate-y-8 translate-x-10/12 sm:translate-x-1/2 xl:translate-x-0': opened}"
  >
    <nav class="flex justify-evenly py-4 bg-gray-200 dark:bg-gray-700 rounded-3xl dark:text-white text-sm overflow-hidden">
      <nuxt-link data-no-blobity to="/" class="relative font-medium">
        <HomeIcon :active="isWindow('')"/>
      </nuxt-link>
      <nuxt-link data-no-blobity to="/about" class="relative font-medium">
        <UserIcon :active="isWindow('/about')"/>
      </nuxt-link>
      <nuxt-link data-no-blobity to="/blog" class="relative font-medium">
        <BookIcon :active="isWindow('/blog')"/>
      </nuxt-link>
      <nuxt-link data-no-blobity to="/projects" class="relative font-medium">
        <LightbulbIcon :active="isWindow('/projects')"/>
      </nuxt-link>
      <button data-no-blobity @click='toggleMenu' class="font-medium cursor-pointer">
        <CrossIcon data-no-blobity v-if="opened" />
        <MenuIcon data-no-blobity v-else :type="getMenuIconType"/>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {useNuxtApp, useRouter} from "nuxt3";
import {computed} from "vue";

const PAGE_TYPE = {
  projects: 1,
  services: 2,
  env: 3,
  about: 4,
  newsletter: 5
}

const { $store } = useNuxtApp()
const route = computed(() => $store.state.route)
const isWindow = (loc: string) => {
  if (loc === '') return route.value === "/"
  else return route.value.includes(loc)
}

const getMenuIconType = computed(() => PAGE_TYPE[route.value.split('/')[1]] || 0)

const toggleMenu = () => {
  $store.commit('TOGGLE_OPENED', !$store.state.opened)
  if ($store.state.opened) {
    document.getElementById('slider')!.style.maxHeight = window.innerHeight + 'px'
    setTimeout(() => document.getElementById('nav')!.classList.add('z-50'), 300)
  } else {
    document.getElementById('nav')!.classList.remove('z-50')
    setTimeout(() => {
      document.getElementById('slider')!.style.maxHeight = 'none'
    }, 500)
  }
}

const $router = useRouter()
$router.afterEach(() => {
  $store.commit('TOGGLE_OPENED', false)
  document.getElementById('nav')!.classList.remove('z-50')
  setTimeout(() => {
    document.getElementById('slider')!.style.maxHeight = 'none'
  }, 600)
})

const opened = computed(() => $store.state.opened)
</script>
