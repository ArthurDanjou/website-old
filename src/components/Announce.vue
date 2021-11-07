<template>
  <div
    v-if="announce"
    class="p-4 duration-300 flex justify-center items-center text-center"
    :class="[getHoverColor, getBackgroundColor]"
  >
    {{ $t(announce.message.code) }}
    <img
      v-if="announce.file"
      :src="`https://athena.arthurdanjou.fr/files/${announce.file}`"
      alt="Announce Cover File"
    >
  </div>
  <div v-else class="p-4 duration-300 flex justify-center items-center text-center bg-black dark:bg-white text-white dark:text-black">
    {{ $t('loading') }}
  </div>
</template>

<script setup lang="ts">
import {useAsyncData, useNuxtApp} from "nuxt3";
import {computed} from "vue";

const {$axios, $sentry, app} = useNuxtApp()
const announce = await useAsyncData('announce', async () => {
  const response = await $axios.get('/api/announce', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.status === 200) {
    return response.data.announce
  } else {
    $sentry.captureEvent(response.data)
    app.error({statusCode: 500})
  }
})

const getBackgroundColor = computed(() => {
  switch (announce.data.value.color) {
    case 'black': {
      return 'bg-black text-white dark:(bg-white text-black)'
    }
  }
})

const getHoverColor = computed(() => {
  switch (announce.data.value.hover_color) {
    case 'gray': {
      return 'hover:bg-gray-800 dark:hover:bg-gray-300'
    }
  }
})
</script>
