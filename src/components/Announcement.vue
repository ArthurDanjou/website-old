<template>
  <div
    v-if="announce"
    class="h-16 bg-black text-center"
  >
    {{ announce }}
  </div>
</template>

<script lang="ts">
import {ref, useAsync, useContext} from "@nuxtjs/composition-api";

export default {
  name: "Announcement",
  setup() {
    const {$axios, $sentry} = useContext()
    const announce = ref("")

    useAsync(async () => {
      const response = await $axios.get('/api/announce', {
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

    return {
      announce
    }
  }
}
</script>

<style scoped>

</style>
