<template>
  <header class="hidden xl:block dark:bg-black dark:text-white z-50 sticky top-0 left-0 bg-white w-full duration-400"
          :class="scrollPosition > 65 ? 'shadow-md dark:shadow-white h-16 lg:h-20' : 'h-20 lg:h-24'">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-32">
      <Logo />
      <nav class="right flex flex-col md:flex-row items-center hidden md:inline-block">
        <div class="flex text-lg">
          <nuxt-link class="nav-link" to="/about" :class="{ 'link-active': isWindow('about') }">
            {{ $t('header.about') }}
          </nuxt-link>
          <nuxt-link class="nav-link" to="/blog" :class="{ 'link-active': isWindow('blog') }">
            {{ $t('header.blog') }}
          </nuxt-link>
          <nuxt-link class="nav-link" to="/projects" :class="{ 'link-active': isWindow('projects') }">
            {{ $t('header.projects') }}
          </nuxt-link>
          <nuxt-link class="nav-link" to="/contact" :class="{ 'link-active': isWindow('contact') }">
            {{ $t('header.contact') }}
          </nuxt-link>
        </div>
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
  useRouter,
  useStore
} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

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

    const {i18n, } = useContext()
    const $router = useRouter()
    const changeLanguage = () => useAsync(() => {
      i18n.setLocale(i18n.locale === 'fr' ? 'en' : 'fr')
      if ($router.currentRoute.fullPath.includes('blog') || $router.currentRoute.fullPath === '/') {
        window.location.reload()
      }
    })

    const store = useStore<State>()
    const route = computed(() => store.state.route)

    const isWindow = (loc: string) => {
      if (loc === '') return route.value === "/"
      else return route.value.includes(loc)
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
  @apply font-medium cursor-pointer duration-500 mx-4 border-b-2 border-transparent hover:(border-indigo-600);
}

.navbar-bottom-items li {
  transition: all .2s ease-in-out;
}

.link-active {
  @apply text-indigo-600
}
</style>
