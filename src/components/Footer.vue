<template>
  <footer class="footer w-full border-t-2 border-solid border-gray-200 px-4 xl:px-32 dark:border-gray-800 mb-22 md:mb-0">
    <div class="flex flex-col-reverse md:flex-row justify-between pt-4 items-center">
      <div class="inline flex space-x-4">
        <a class="link font-semibold" href="https://twitch.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
          <TwitchIcon /> <span>Twitch</span>,
        </a>
        <a class="link font-semibold" href="https://github.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
          <GithubIcon /> <span>Github</span>,
        </a>
        <a class="link font-semibold" href="https://twitter.com/ArthurDanj" target="_blank" rel="noopener noreferrer">
          <TwitterIcon /> <span>Twitter</span>,
        </a>
        <a class="link font-semibold" href="mailto:contact@arthurdanjou.fr" target="_blank" rel="noopener noreferrer">
          <MailIcon /> <span>Mail</span>
        </a>
      </div>
      <div class="flex space-x-4 mb-4 md:mb-0">
        <nuxt-link class="link font-semibold" to="/env">
          <span>{{ $t('header.env') }}</span>,
        </nuxt-link>
        <nuxt-link class="link font-semibold" to="/guestbook">
          <span>{{ $t('header.guestbook') }}</span>,
        </nuxt-link>
        <nuxt-link class="link font-semibold" to="/contact">
          <span>{{ $t('header.contact') }}</span>,
        </nuxt-link>
        <nuxt-link class="link font-semibold" to="/newsletter">
          <span>{{ $t('header.newsletter') }}</span>
        </nuxt-link>
      </div>
    </div>
    <div class="text-center my-4">
      <p>
        {{ $t('footer.credits') }}
        <a class="link font-semibold" target="_blank" href="https://nuxtjs.org" rel="noopener noreferrer">
          <NuxtIcon />
          <span>NuxtJS</span>
        </a>
        {{ $t('footer.credits_separator_and') }}
        <a class="link font-semibold" target="_blank" href="https://adonisjs.com" rel="noopener noreferrer">
          <AdonisIcon />
          <span>AdonisJS</span>
        </a>
        {{ $t('footer.credits_separator') }} <span>Arthur DANJOU</span>
      </p>
      <p>{{ $t('footer.copyrights', { date: getDate }) }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import {computed, defineComponent, ref, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Footer",
  setup() {
    const {$colorMode} = useContext()
    const isDarkMode = computed(() => {
      return $colorMode.preference === 'dark'
    })

    const getDate = ref(new Date().getFullYear())

    return {
      getDate,
      isDarkMode
    }
  }
})
</script>

<style scoped lang="scss">
.footer {
  .link {
    span {
      @apply border-b-2 border-gray-200 dark:border-gray-700 duration-300;
    }
    &:hover span {
      @apply border-indigo-600
    }
  }
}
</style>
