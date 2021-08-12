<template>
  <div class="md:hidden w-full min-w-screen">
    <div class="bg-gray-100 dark:bg-gray-900 min-h-screen duration-500 absolute top-0 left-0 right-0 py-4 pr-20 pl-4 flex items-center">
      <nav class="w-auto">
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
          <nuxt-link class="profile ml-4 flex items-center" to="/">
            <img class="h-12 w-12 duration-500" src="@/assets/images/photo-rounded.png" alt="Photo of me" />
            <h1 class="ml-4 font-bold text-lg">Arthur Danjou</h1>
          </nuxt-link>
        </div>
        <div class="w-auto flex">
          <div class="flex flex-col ml-4 mb-8 space-y-1.5 font-bold text-lg">
            <div class="nav-link" :class="{ 'link-active': isWindow('') }">
              <nuxt-link to="/">
                {{ $t('header.home') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('') }">
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
            <div class="nav-link" :class="{ 'link-active': isWindow('guestbook') }">
              <nuxt-link to="/guestbook">
                {{ $t('header.guestbook') }}
              </nuxt-link>
            </div>
            <div class="nav-link" :class="{ 'link-active': isWindow('contact') }">
              <nuxt-link to="/contact">
                {{ $t('header.contact') }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="social-links flex justify-between space-x-1">
          <a target="_blank" href="https://twitter.com/ArthurDanj" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a target="_blank" href="https://github.com/ArthurDanjou" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a target="_blank" href="https://www.polywork.com/arthurdanjou" rel="noopener noreferrer">
            <PolyworkIcon />
          </a>
          <a target="_blank" href="https://www.twitch.tv/arthurdanjou" rel="noopener noreferrer">
            <TwitchIcon />
          </a>
          <a target="_blank" href="https://discord.gg/RQhjE5UkxD" rel="noopener noreferrer">
            <DiscordIcon />
          </a>
          <a target="_blank" href="mailto:contact@arthurdanjou.fr" rel="noopener noreferrer">
            <MailIcon />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext, useRouter, useStore} from "@nuxtjs/composition-api";
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
      if ($router.currentRoute.fullPath.includes('blog') || $router.currentRoute.fullPath === '/') {
        window.location.reload()
      }
    })

    const isWindow = (loc: string) => {
      if (loc === '') return $router.currentRoute.path === "/"
      else return $router.currentRoute.path.includes(loc)
    }

    const store = useStore<State>()
    const closeMenu = () => {
      store.commit('TOGGLE_OPENED', false)
    }

    return {
      isWindow,
      changeColorMode,
      changeLanguage,
      closeMenu
    }
  }
})
</script>

<style lang="scss">
.cross:hover svg {
  @apply transform scale-140;
}

.profile:hover img {
  @apply transform rotate-360;
}

.nav-link a, .link-active a {
  @apply duration-300 border-b-2 border-transparent;

  &:hover {
    @apply border-indigo-600;
  }
}

.social-links a {
  svg {
    @apply h-8 w-8 duration-300
  }

  &:hover svg {
    @apply transform hover:scale-120
  }
}
</style>
