<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.experiences') }}
      <PresentationIcon />
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
import {Experience} from "../../types/types";

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
