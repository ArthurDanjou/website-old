<template>
  <header class="dark:bg-dark-900 dark:text-white fixed z-50 top-0 left-0 bg-white header tracking-wider w-full h-16 lg:h-24 duration-500" :class="scrollPosition > 50 ? ' shadow-md dark:shadow-white' : ''">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-64">
      <nuxt-link to="/">
        <div class="left text-2xl font-bold cursor-pointer border-b-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-black dark:border-white border-solid duration-500">
          {{ $t('header.title') }}
        </div>
      </nuxt-link>
      <nav class="right">
        <div class="flex flex-col md:flex-row items-center">
          <ul class="flex text-xl">
            <li class="mx-2 cursor-pointer">
              <div v-if="this.$i18n.locale === 'en'" @click="changeLanguage('fr')">
                🇫🇷
              </div>
              <div v-else @click="changeLanguage('en')">
                🇬🇧
              </div>
            </li>
            <li @click="changeColorMode()" class="mx-2 cursor-pointer flex items-center">
              <div v-if="this.$colorMode.value === 'light'">
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
            <nuxt-link class="red hidden md:inline-block" to="/">
              <li class="hover:text-red-400 font-bold mx-2 cursor-pointer duration-300">
                {{ $t('header.home') }}
              </li>
            </nuxt-link>
            <nuxt-link class="orange hidden md:inline-block" to="/about">
              <li class="hover:text-orange-400 font-bold mx-2 cursor-pointer duration-300">
                {{ $t('header.about') }}
              </li>
            </nuxt-link>
            <nuxt-link class="green hidden md:inline-block" to="/blog">
              <li class="hover:text-green-400 font-bold mx-2 cursor-pointer duration-300">
                {{ $t('header.blog') }}
              </li>
            </nuxt-link>
            <nuxt-link class="blue hidden md:inline-block" to="/work">
              <li class="hover:text-blue-400 font-bold mx-2 cursor-pointer duration-300">
                {{ $t('header.work') }}
              </li>
            </nuxt-link>
            <nuxt-link class="purple hidden md:inline-block" to="/contact">
              <li class="hover:text-purple-400 font-bold mx-2 cursor-pointer duration-300">
                {{ $t('header.contact') }}
              </li>
            </nuxt-link>
          </ul>
        </div>
        <ul class="dark:text-white dark:bg-dark-900 text-sm z-50 bg-white md:hidden fixed bottom-0 left-0 w-full flex items-center justify-around h-20 border-t border-gray-200 border-solid navbar-bottom-items">
          <nuxt-link to="/" class="w-1/5 red">
            <li class="font-bold flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {{ $t('header.home') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/about" class="w-1/5 orange">
            <li class="font-bold flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ $t('header.about') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/blog" class="w-1/5 green">
            <li class="font-bold flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {{ $t('header.blog') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/work" class="w-1/5 blue">
            <li class="font-bold flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('header.work') }}
            </li>
          </nuxt-link>
          <nuxt-link to="/contact" class="w-1/5 purple">
            <li class="font-bold flex flex-col items-center justify-center">
              <svg class="inline-block" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ $t('header.contact') }}
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      scrollPosition: null
    }
  },
  methods: {
    changeColorMode() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    async changeLanguage(lang) {
      await this.$i18n.setLocale(lang)
      if (this.$router.currentRoute.fullPath.includes('blog')) {
        await this.$nuxt.refresh()
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped lang="scss">
.header {

  .header-container {

    .nuxt-link-active {
      &.green {
        @apply text-green-400;
      }
      &.blue {
        @apply text-blue-400;
      }
    }

    .nuxt-link-exact-active {
      &.red {
        @apply text-red-400;
      }
      &.orange {
        @apply text-orange-400;
      }
      &.green {
        @apply text-green-400;
      }
      &.blue {
        @apply text-blue-400;
      }
      &.purple {
        @apply text-purple-400;
      }
    }

    .navbar-bottom-items li {
      transition: all .2s ease-in-out;
    }
  }
}
</style>
