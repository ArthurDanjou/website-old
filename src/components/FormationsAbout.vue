<template>
  <div class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.formations') }}
      <DegreeHatIcon />
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
import {Formation} from "~/types/types";

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
