<template>
  <main v-if="projects" class="flex flex-col items-center px-4 xl:px-32">
    <h1 v-if="projects.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('projects.no_project') }}</h1>
    <section v-else class="flex flex-col justify-around items-center w-full">
      <h1 class="text-gray-700 dark:text-gray-400 text-xl mt-4 mb-8">{{ $t('projects.description') }}</h1>
      <div class="flex flex-col items-center md:items-start md:flex-row flex-wrap w-full space-y-3 md:space-y-0">
        <div class="grid grid-cols-1 gap-x-4 gap-y-8 mb-20 sm:grid-cols-3">
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
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxt/bridge/dist/runtime/capi.legacy";

export default defineComponent({
  name: "index",
  head() {
    return {
      title: `${this.$i18n.t('header.projects')} - Arthur Danjou`
    }
  },
  setup() {
    const { $axios, app, $sentry } = useContext()

    const projects = useAsync(async () => {
      const response = await $axios.get('/api/projects', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        return response.data.projects
      } else {
        $sentry.captureEvent(response.data)
        app.error({statusCode: 500})
      }
    }, 'projects')

    return {
      projects
    }
  }
})
</script>
