<template>
  <section class="w-full flex items-center justify-center my-12">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          {{ $t('projects.latest') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4 mb-8">
          {{ $t('projects.description') }}
        </p>
      </div>
      <div v-if="projects" class="grid grid-cols-1 gap-x-4 gap-y-8 mb-8 sm:mb-20 sm:grid-cols-3 text-left">
        <Project
          v-for="project in projects"
          :key="project.name"
          :title="project.name"
          :cover="project.cover.file_name"
          :description="project.description.code"
          :tags="project.tags"
          :url="project.url"
        />
      </div>
      <div class="flex">
        <Button content="projects.see_more" link="projects"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useAsyncData, useNuxtApp} from "nuxt3";

const { $axios, app, $sentry } = useNuxtApp()
const projects = await useAsyncData('projects_home', async () => {
  const response = await $axios.get('/api/projects', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.status === 200) {
    return response.data.projects.slice(0, 3)
  } else {
    $sentry.captureEvent(response.data)
    app.error({statusCode: 500})
  }
})
</script>
