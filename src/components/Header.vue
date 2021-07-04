<template>
  <header class="dark:bg-black dark:text-white fixed z-50 top-0 left-0 bg-white w-full duration-400"
          :class="scrollPosition > 50 ? ' shadow-md dark:shadow-white h-16 lg:h-20' : 'h-20 lg:h-24'">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-32">
      <nuxt-link to="/">
        <img src="~/assets/images/logo-header.png" alt="Logo Circle" class="h-10 left cursor-pointer duration-500"/>
      </nuxt-link>
      <nav class="right">
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex text-lg">
            <nuxt-link class="nav-link hidden md:inline-block" to="/about">
              {{ $t('header.about') }}
            </nuxt-link>
            <nuxt-link class="nav-link hidden md:inline-block" to="/blog">
              {{ $t('header.blog') }}
            </nuxt-link>
            <nuxt-link class="nav-link hidden md:inline-block" to="/projects">
              {{ $t('header.projects') }}
            </nuxt-link>
            <nuxt-link class="nav-link hidden md:inline-block" to="/contact">
              {{ $t('header.contact') }}
            </nuxt-link>
          </div>
        </div>
        <ul
          class="dark:text-white dark:bg-black text-sm z-50 bg-white md:hidden fixed bottom-0 left-0 w-full flex items-center justify-around h-20 border-t border-gray-200 border-solid navbar-bottom-items"
        >
          <nuxt-link to="/" class="w-1/5">
            <li class="h-full w-full font-medium flex flex-col items-center justify-center">
              <HomeIcon :active="isWindow('')"/>
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
          <nuxt-link to="/contact" class="w-1/5">
            <li class="font-medium flex flex-col items-center justify-center">
              <ContactIcon :active="isWindow('/contact')"/>
            </li>
          </nuxt-link>
        </ul>
      </nav>
      <div>
        <ul class="flex items-center">
          <li @click="changeLanguage()"
              class="mx-1 h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-400">
            <TranslateIcon/>
          </li>
          <li @click="changeColorMode()"
              class="mx-1 h-9 w-9 cursor-pointer flex items-center p-1.5 rounded-xl hover:bg-gray-300 dark:hover:bg-dark-400 duration-200">
            <div v-if="this.$colorMode.preference === 'light'">
              <MoonIcon/>
            </div>
            <div v-else>
              <SunIcon/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  useAsync,
  useContext,
  useRouter, watch
} from "@nuxtjs/composition-api";

export default defineComponent({
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

    const isWindow = (loc: string) => {
      if (loc === '') return $router.currentRoute.path === "/"
      else return $router.currentRoute.path.includes(loc)
    }

    return {
      scrollPosition,
      changeColorMode,
      updateScroll,
      changeLanguage,
      isWindow
    }
  }
})
</script>

<style scoped lang="scss">
.nav-link {
  @apply font-medium cursor-pointer duration-300 mx-4 border-b-2 border-transparent hover:(border-indigo-600);
}

.navbar-bottom-items li {
  transition: all .2s ease-in-out;
}
</style>
