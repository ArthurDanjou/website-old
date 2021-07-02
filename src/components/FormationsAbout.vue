<template>
  <div class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.formations') }}
      <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    </h3>
    <div v-if="formations" v-for="formation in formations">
      <Formation
        :title="formation.title"
        :description="formation.description"
        :location="formation.location"
        :begin="formation.begin_date"
        :end="formation.end_date" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {Formation} from "../../types/types";

export default defineComponent({
  name: "FormationsHome",
  setup() {
    const {$content, $sentry} = useContext()

    const formations = useAsync(() => {
      return $content('formations')
        .sortBy('end_date', 'desc')
        .fetch<Formation>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    })

    return {
      formations
    }
  }
})
</script>

<style scoped>

</style>
