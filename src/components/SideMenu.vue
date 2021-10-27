<template>
  <div class="relative w-full min-w-screen xl:overflow-auto">
    <div
      class="min-h-screen bg-gray-100 dark:bg-gray-900 xl:hidden pl-4 pr-20 py-4 transition-all duration-500 duration-500 absolute top-0 left-0 right-0 flex items-center"
    >
      <nav
        id="nav"
        class="w-auto"
      >
        <div class="mb-8">
          <div class="flex justify-between mb-4">
            <div @click="closeMenu" class="flex justify-center items-center cursor-pointer cross text-sm">
              <CrossIcon class="duration-300" />
              <div class="ml-4">{{ $t('sidebar.close') }}</div>
            </div>
            <div class="ml-6">
              <ul class="flex items-center">
                <li @click="changeLanguage()"
                    class="mx-1 h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-400">
                  <TranslateIcon :french="isFrench" />
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
          <Logo />
        </div>
        <div class="w-auto flex">
          <div class="flex flex-col ml-4 mb-8 space-y-1.5 font-bold text-lg">
            <div class="nav-link" :class="{ 'link-active': isWindow('') }">
              <nuxt-link to="/">
                {{ $t('header.home') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('about') }">
              <nuxt-link to="/about">
                {{ $t('header.about') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('blog') }">
              <nuxt-link to="/blog">
                {{ $t('header.blog') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('projects') }">
              <nuxt-link to="/projects">
                {{ $t('header.projects') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('services') }">
              <nuxt-link to="/services">
                {{ $t('header.services') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('env') }">
              <nuxt-link to="/env">
                {{ $t('header.env') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('newsletter') }">
              <nuxt-link to="/newsletter">
                {{ $t('header.newsletter') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('contact') }">
              <nuxt-link to="/contact">
                {{ $t('header.contact') }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <SocialList class="flex justify-between space-x-0.5" />
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useAsync, useContext, useRouter, useStore} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

export default defineComponent({
  name: "SideMenu",
  setup() {
    const {$colorMode} = useContext()
    const changeColorMode = () => {
      $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
    }

    const {i18n} = useContext()
    const $router = useRouter()
    const changeLanguage = () => useAsync(() => {
      i18n.setLocale(i18n.locale === 'fr' ? 'en' : 'fr')
      if ($router.currentRoute.fullPath.includes('blog')) {
        window.location.reload()
      }
    })

    const isFrench = computed(() => i18n.locale === 'fr')

    const store = useStore<State>()
    const closeMenu = () => {
      store.commit('TOGGLE_OPENED', false)
      document.getElementById('nav')!.classList.remove('z-50')
      setTimeout(() => {
        document.getElementById('slider')!.style.maxHeight = 'none'
      }, 500)
    }

    const route = computed(() => store.state.route)
    const isWindow = (loc: string) => {
      if (loc === '') return route.value === "/"
      else return route.value.includes(loc)
    }

    return {
      changeColorMode,
      changeLanguage,
      closeMenu,
      opened: computed(() => store.state.opened),
      isWindow,
      isFrench
    }
  }
})
</script>

<style scoped lang="scss">
.cross:hover svg {
  @apply transform scale-140;
}

.link-active a {
  @apply text-red-500 dark:text-amber-400
}
</style>
