<template>
  <header class="dark:bg-black dark:text-white fixed z-50 top-0 left-0 bg-white w-full duration-400" :class="scrollPosition > 50 ? ' shadow-md dark:shadow-white h-16 lg:h-20' : 'h-20 lg:h-24'">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-32">
      <nuxt-link to="/">
        <img src="~/assets/images/logo-header.png" alt="Logo Circle" class="h-10 left cursor-pointer duration-500" />
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
            <nuxt-link class="hidden md:inline-block" to="/env">
              <li class="nav-link">
                {{ $t('header.env') }}
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
          <nuxt-link to="/" class="w-1/6 nav-link-mobile">
            <li class="h-full w-full font-medium flex flex-col items-center justify-center">
              <HomeIcon :active="true" />
            </li>
          </nuxt-link>
          <nuxt-link to="/about" class="w-1/6 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <UserIcon :active="false" />
            </li>
          </nuxt-link>
          <nuxt-link to="/blog" class="w-1/6 nav-link-mobile blog">
            <li class="font-medium flex flex-col items-center justify-center">
              <BookIcon />
            </li>
          </nuxt-link>
          <nuxt-link to="/env" class="w-1/6 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <ComputerIcon />
            </li>
          </nuxt-link>
          <nuxt-link to="/projects" class="w-1/6 nav-link-mobile">
            <li class="font-medium flex flex-col items-center justify-center">
              <LightbulbIcon />
            </li>
          </nuxt-link>
          <nuxt-link to="/contact" class="w-1/6 nav-link-mobile">
              <li class="font-medium flex flex-col items-center justify-center">
                <ContactIcon />
              </li>
          </nuxt-link>
        </ul>
      </nav>
      <div>
        <ul class="flex items-center">
          <li @click="changeLanguage()" class="mx-1 h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-400">
            <TranslateIcon />
          </li>
          <li @click="changeColorMode()" class="mx-1 h-9 w-9 cursor-pointer flex items-center p-1.5 rounded-xl hover:bg-gray-300 dark:hover:bg-dark-400 duration-200">
            <div v-if="this.$colorMode.preference === 'light'">
              <MoonIcon />
            </div>
            <div v-else>
              <SunIcon />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref, useAsync, useContext, useRouter} from "@nuxtjs/composition-api";

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

    return {
      scrollPosition,
      changeColorMode,
      updateScroll,
      changeLanguage
    }
  }
})
</script>

<style scoped lang="scss">
.nav-link {
  @apply text-gray-500 dark:text-gray-400 hover:dark:text-white font-medium hover:text-black mx-4 cursor-pointer duration-300
}

.nav-link-mobile {
  @apply text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300
}

.nuxt-link-exact-active {
  @apply text-black dark:text-white;
}

.navbar-bottom-items li {
  transition: all .2s ease-in-out;
}
</style>
