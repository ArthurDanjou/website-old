<template>
  <div v-if="maintenance" class="w-screen h-screen flex items-center">
    <div class="absolute right-4 top-4">
      <ul class="flex items-center">
        <li @click="changeLanguage()"
            class="mx-1 h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-400">
          <TranslateIcon :french="isFrench"/>
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
    <div class="w-full flex flex-col items-center">
      <div class="self-center">
        <div class="flex justify-center mb-8">
          <img class="w-full lg:w-3/4 xl:w-1/3" src="@/assets/images/maintenance.png" alt="Maintenance Image" />
        </div>
        <div class="text-center">
          <h3 class="text-xl lg:text-2xl">
            {{ $t('maintenance.back_soon') }}
          </h3>
          <h1 class="font-black text-3xl lg:text-5xl my-4">
            {{ $t('maintenance.title') }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 text-md lg:text-xl">
            {{ $t(maintenance.reason.code) }}
          </p>
        </div>
      </div>
      <div class="lg:w-2/3 p-4 lg:p-8 mt-auto w-full ">
        <div class="py-4 text-center border-t-2 border-gray-200 dark:border-gray-800 social-links">
          {{ $t('maintenance.progress') }} <br class="lg:hidden"/>
          <a target="_blank" href="https://twitter.com/ArthurDanj" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <div class="mx-2 inline">{{ $t('maintenance.separator') }}</div>
          <a target="_blank" href="https://discord.gg/ENG6cFQhPS" rel="noopener noreferrer">
            <DiscordIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "maintenance",
  layout: 'maintenance',
  setup() {
    const {$axios, $sentry, app} = useContext()

    const maintenance = useAsync(async () => {
      const response = await $axios.get('/api/maintenance', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        return response.data.maintenance
      } else {
        $sentry.captureEvent(response.data)
        app.error({statusCode: 500})
      }
    }, 'maintenance')

    const {i18n} = useContext()
    const changeLanguage = () => useAsync(() => {
      i18n.setLocale(i18n.locale === 'fr' ? 'en' : 'fr')
    })
    const isFrench = computed(() => i18n.locale === 'fr')

    const {$colorMode} = useContext()
    const changeColorMode = () => {
      $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
    }

    return {
      maintenance,
      changeLanguage,
      isFrench,
      changeColorMode
    }
  }
})
</script>

<style lang="scss">
.social-links a {
  svg {
    @apply h-6 w-6 duration-300
  }

  &:hover svg {
    @apply transform hover:scale-120
  }
}
</style>
