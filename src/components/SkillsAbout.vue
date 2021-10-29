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

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "SkillsAbout",
  setup() {
    const {$axios, $sentry, app} = useContext()

    const skills = useAsync(async () => {
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
    }, 'skills')

    return {
      skills
    }
  }
})
</script>
