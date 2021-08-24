<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.experiences') }}
      <PresentationIcon />
    </h3>
    <div v-if="experiences" v-for="experience in experiences">
      <Experience
        :title="experience.title.code"
        :company="experience.company"
        :location="experience.location"
        :begin="experience.begin_date"
        :end="experience.end_date" />
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "ExperiencesAbout",
  setup() {
    const {$axios, $sentry, app} = useContext()

    const experiences = useAsync(async () => {
      const response = await $axios.get('/api/experiences', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        return response.data.experiences.sort((a, b) => {
          return a.end_date === 'Today' ? -1 : a.end_date.split('-')[1] > b.end_date.split('-')[1] ? -1 : a.end_date.split('-')[0] > b.end_date.split('-')[0] ? 0 : 1
        })
      } else {
        app.error({statusCode: 500})
        $sentry.captureEvent(response.data)
      }
    }, 'experiences')

    return {
      experiences
    }
  }
})
</script>
