<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.experiences') }}
      <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    </h3>
    <div v-if="experiences" v-for="experience in experiences">
      <Experience
        :title="experience.title"
        :company="experience.company"
        :location="experience.location"
        :begin="experience.begin_date"
        :end="experience.end_date" />
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {Experience} from "../../@types/types";

export default defineComponent({
  name: "ExperiencesAbout",
  setup() {
    const {$content, $sentry} = useContext()

    const experiences = useAsync(() => {
      return $content('experiences')
        .sortBy('end_date', 'desc')
        .fetch<Experience>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    })

    return {
      experiences
    }
  }
})
</script>

<style scoped>

</style>
