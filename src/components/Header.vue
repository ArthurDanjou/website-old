<template>
  <header class="z-index-30 hidden xl:block dark:text-white w-full h-20 lg:h-24">
    <div class="dark:bg-black bg-white flex justify-between items-center h-full px-5 xl:px-32">
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
          <li
            @click="changeLanguage()"
            class="mx-2 h-8 w-8 flex items-center justify-center p-1"
            data-blobity
            data-blobity-magnetic="false"
            data-blobity-radius="20"
          >
            <TranslateIcon class="z-index-3" :french="isFrench"/>
          </li>
          <li
            @click="changeColorMode()"
            class="mx-2 h-8 w-8 flex items-center justify-center p-1"
            data-blobity
            data-blobity-magnetic="false"
            data-blobity-radius="20"
          >
            <div class="z-index-3" v-if="this.$colorMode.preference === 'light'">
              <MoonIcon/>
            </div>
            <div class="z-index-3" v-else>
              <SunIcon/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useNuxtApp, useRouter} from "nuxt3";
import {computed} from "vue";

const {$colorMode} = useNuxtApp()
const changeColorMode = () => {
  $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
}

const {i18n} = useNuxtApp()
const $router = useRouter()
const changeLanguage = () => useAsync(() => {
  i18n.setLocale(i18n.locale === 'fr' ? 'en' : 'fr')
  if ($router.currentRoute.fullPath.includes('blog')) {
    window.location.reload()
  }
}, 'language')

const isFrench = computed(() => i18n.locale === 'fr')

const { $store } = useNuxtApp()
const route = computed(() => $store.state.route)

const isWindow = (loc: string) => {
  if (loc === '') return route.value === "/"
  else return route.value.includes(loc)
}
</script>

<style scoped lang="scss">
.nav-link {
  @apply font-medium mx-4 z-index-3;
}

.navbar-bottom-items li {
  transition: all .2s ease-in-out;
}

.link-active {
  @apply text-red-500 dark:text-amber-400
}
</style>
