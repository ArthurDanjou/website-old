<template>
  <div
    v-if="announce"
    class="h-12 flex justify-center items-center"
    :class="[getBackgroundColor, getHoverColor]"
  >
    {{ announce.translation.code }}
    <img
      v-if="announce.file"
      :src="`https://athena.arthurdanjou.fr/files/${announce.file}`"
      alt="Announce Cover File"
    >
  </div>
</template>

<script lang="ts">
import {computed, ref, useAsync, useContext} from "@nuxtjs/composition-api";
import {Translation} from "~/types/types";

interface Announce {
  color: string,
  hover_color: string,
  translation: Translation
  file: null
}

export default {
  name: "Announcement",
  setup() {
    const {$axios, $sentry} = useContext()
    const announce = ref<Announce>()

    useAsync(async () => {
      const response = await $axios.get('/api/announces', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        announce.value = response.data.announce
      } else {
        $sentry.captureEvent(response.data)
      }
    })

    const getBackgroundColor = computed(() => {
      switch (announce.value!.color) {
        case 'black': {
          return 'bg-black text-white dark:(bg-white text-black)'
        }
      }
    })

    const getHoverColor = computed(() => {
      switch (announce.value!.color) {
        case 'gray': {
          return 'hover:bg-gray-600'
        }
      }
    })

    return {
      announce,
      getBackgroundColor,
      getHoverColor
    }
  }
}
</script>

<style scoped>

</style>
