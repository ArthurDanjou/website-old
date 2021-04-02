<template>
  <footer class="footer w-full border-t-2 border-solid border-gray-200 dark:border-gray-800 mb-20 md:mb-0">
    <div>
      <div class="flex flex-col items-center py-4 text-center ">
        <div class="mb-3">
          <p class="inline">{{ $t('footer.find_me') }}
            <br class="md:hidden"/>
            <a class="font-semibold" href="https://twitch.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
              <img class="inline img" src="@/assets/images/socials/twitch.svg" alt="Twitch logo" height="20" width="20" />
              <span class="link">Twitch</span>
            </a>,
            <a class="font-semibold" href="https://github.com/ArthurDanjou" target="_blank" rel="noopener noreferrer">
              <img class="inline img" src="@/assets/images/socials/github.svg" alt="Github logo" height="20" width="20" />
              <span class="link">Github</span>
            </a> &
            <a class="font-semibold" href="https://twitter.com/ArthurDanj" target="_blank" rel="noopener noreferrer">
              <img class="inline img" src="@/assets/images/socials/twitter.svg" alt="Twitter logo" height="20" width="20" />
              <span class="link">Twitter</span>
            </a>
            <br class="md:hidden"/>
            {{ $t('footer.separator') }}
            <a class="font-semibold" href="mailto:contact@arthurdanjou.fr" target="_blank" rel="noopener noreferrer">
              <svg class="inline img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="link">Mail</span>
              </a>
          </p>
          <br class="md:hidden"/>
          <span class="inline dark:text-dark-200 text-gray-600 text-xs">
            {{ $t('footer.links_click') }}
          </span>
        </div>
        <p>
          {{ $t('footer.credits') }}
          <a class="font-semibold" target="_blank" href="https://nuxtjs.org" rel="noopener noreferrer">
            <img class="inline img" src="@/assets/images/socials/nuxtjs.svg" alt="NuxtJs logo" height="20" width="20" />
            <span class="link">NuxtJs</span>
          </a>
          {{ $t('footer.credits_separator') }} <span>Arthur DANJOU</span>
        </p>
        <p>{{ $t('footer.copyrights', { date: getDate }) }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import {ref} from "@nuxtjs/composition-api";

export default {
  name: "Footer",
  setup() {
    const getDate = ref(new Date().getFullYear())

    return {
      getDate
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  .img {
    transform: translateY(-3px);
  }

  .link {
    @apply duration-100;

    &:hover {
      @apply border-b-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-black dark:border-white border-solid;
    }
  }
}
</style>
