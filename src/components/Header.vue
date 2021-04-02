<template>
  <header class="dark:bg-black dark:text-white fixed z-50 top-0 left-0 bg-white w-full duration-400" :class="scrollPosition > 50 ? ' shadow-md dark:shadow-white h-10 lg:h-18' : 'h-16 lg:h-24'">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-32">
      <nuxt-link to="/">
        <img src="@/assets/images/logo-header.png" alt="Logo Circle" class="h-10 left cursor-pointer duration-500" />
      </nuxt-link>
      <nav class="right">
        <div class="flex flex-col md:flex-row items-center">
          <ul class="flex text-lg">
            <nuxt-link class="hidden md:inline-block" to="/about">
              <li class="nav-link">
                {{ $t('header.about') }}
              </li>
            </nuxt-link>
            <nuxt-link class="hidden md:inline-block" to="/blog">
              <li class="nav-link">
                {{ $t('header.blog') }}
              </li>
            </nuxt-link>
            <nuxt-link class="hidden md:inline-block" to="/uses">
              <li class="nav-link">
                {{ $t('header.uses') }}
              </li>
            </nuxt-link>
            <nuxt-link class="hidden md:inline-block" to="/projects">
              <li class="nav-link">
                {{ $t('header.projects') }}
              </li>
            </nuxt-link>
            <nuxt-link class="hidden md:inline-block" to="/contact">
              <li class="nav-link">
                {{ $t('header.contact') }}
              </li>
            </nuxt-link>
          </ul>
        </div>
        <ul class="dark:text-white dark:bg-black text-sm z-50 bg-white md:hidden fixed bottom-0 left-0 w-full flex items-center justify-around h-20 border-t border-gray-200 border-solid navbar-bottom-items">
          <nuxt-link to="/about" class="w-1/5 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {{ $t('header.about') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/blog" class="w-1/5 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ $t('header.blog') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/uses" class="w-1/5 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {{ $t('header.uses') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/projects" class="w-1/5 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('header.projects') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/contact" class="w-1/5 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ $t('header.contact') }}
            </li>
          </nuxt-link>
        </ul>
      </nav>
      <div>
        <ul class="flex items-center">
          <li @click="changeLanguage()" class="mx-1 h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-850">
            <div v-if="this.$i18n.locale === 'en'">
              Fr
            </div>
            <div v-else>
              🇬🇧
            </div>
          </li>
          <li @click="changeColorMode()" class="mx-1 h-9 w-9 cursor-pointer flex items-center p-1.5 rounded-xl hover:bg-gray-300 dark:hover:bg-dark-850 duration-200">
            <div v-if="this.$colorMode.preference === 'light'">
              <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <div v-else>
              <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {onMounted, onUnmounted, ref, useAsync, useContext, useRouter} from "@nuxtjs/composition-api";

export default {
  name: "Header",
  setup() {
    const {$colorMode} = useContext()
    const changeColorMode = () => {
      $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
    }

    const scrollPosition = ref(0)
    const updateScroll = () => {
      scrollPosition.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScroll)
    })

    const {i18n} = useContext()
    const $router = useRouter()
    const changeLanguage = () => useAsync(() => {
      i18n.setLocale(i18n.locale === 'fr' ? 'en' : 'fr')
      if ($router.currentRoute.fullPath.includes('blog') || $router.currentRoute.fullPath === '/') {
        window.location.reload()
      }
    })

    return {
      scrollPosition,
      changeColorMode,
      updateScroll,
      changeLanguage
    }
  }
}
</script>

<style scoped lang="scss">
.nav-link {
  @apply text-gray-500 dark:text-gray-400 hover:dark:text-white font-medium hover:text-black mx-4 cursor-pointer duration-300
}

.nav-link-mobile {
  @apply text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300
}

nav .nuxt-link-exact-active {
  @apply text-black dark:text-white;
}

.navbar-bottom-items li {
  transition: all .2s ease-in-out;
}
</style>
