<template>
  <footer class="footer w-full border-t-2 border-solid border-gray-200 dark:border-gray-800 mb-20 md:mb-0">
    <div>
      <div class="flex flex-col items-center py-4 text-center ">
        <div class="mb-3">
          <p class="inline">{{ $t('footer.find_me') }}
            <br class="md:hidden"/>
            <a class="font-semibold" href="https://twitch.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
              <TwitchIcon />
              <span class="link">Twitch</span>
            </a>,
            <a class="font-semibold" href="https://github.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              <span class="link">Github</span>
            </a> &
            <a class="font-semibold" href="https://twitter.com/ArthurDanj" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
              <span class="link">Twitter</span>
            </a>
            <br class="md:hidden"/>
            {{ $t('footer.separator') }}
            <a class="font-semibold" href="mailto:contact@arthurdanjou.fr" target="_blank" rel="noopener noreferrer">
              <MailIcon />
              <span class="link">Mail</span>
            </a>
          </p>
          <br class="md:hidden"/>
          <span class="inline dark:text-gray-400 text-gray-600 text-xs">
            {{ $t('footer.links_click') }}
          </span>
        </div>
        <p>
          {{ $t('footer.credits') }}
          <a class="font-semibold" target="_blank" href="https://nuxtjs.org" rel="noopener noreferrer">
            <NuxtIcon />
            <span class="link">NuxtJS</span>
          </a>
          {{ $t('footer.credits_separator_and') }}
          <a class="font-semibold" target="_blank" href="https://adonisjs.com" rel="noopener noreferrer">
            <AdonisIcon />
            <span class="link">AdonisJS</span>
          </a>
          {{ $t('footer.credits_separator') }} <span>Arthur DANJOU</span>
        </p>
        <p>{{ $t('footer.copyrights', { date: getDate }) }}</p>
      </div>
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
    @apply border-b-2 border-gray-200 hover:border-black dark:border-gray-700 dark:hover:border-white duration-300;
  }
}
</style>
