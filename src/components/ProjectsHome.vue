<template>
  <section v-if="projects" class="w-full flex items-center justify-center my-20">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          {{ $t('projects.latest') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4">
          {{ $t('projects.description') }}
        </p>
      </div>
      <div class="my-8 w-full lg:space-x-8 lg:flex justify-center">
        <div v-for="project in projects" class="mb-4">
          <Project
            :title="project.name"
            :cover="project.cover.file_name"
            :description="project.description.code"
            :tags="project.tags"
            :url="project.url"
          />
        </div>
      </div>
      <div class="flex">
        <Button content="projects.see_more" link="projects"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "ProjectsHome",
  setup() {
    const { $axios, app, $sentry } = useContext()

    const projects = useAsync(async () => {
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
    }, 'projects_home')

    return {
      projects
    }
  }
})
</script>
