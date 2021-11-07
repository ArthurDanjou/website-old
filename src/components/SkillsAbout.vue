<template>
  <section class="w-full mb-10 mt-4 flex flex-col">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.skills') }}
      <CubeIcon />
    </h3>
    <div class="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
      <div v-if="skills" v-for="skill in skills" class="z-index-3">
        <Skill
          :name="skill.name"
          :color="skill.color"
          :cover="skill.file.file_name"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useAsyncData, useNuxtApp} from "nuxt3";

const {$axios, $sentry, app} = useNuxtApp()
const skills = await useAsyncData('skills', async () => {
  const response = await $axios.get('/api/skills', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.status === 200) {
    return response.data.skills
  } else {
    app.error({statusCode: 500})
    $sentry.captureEvent(response.data)
  }
})
</script>
