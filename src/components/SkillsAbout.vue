<template>
  <section class="w-full mb-10 mt-4">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.skills') }}
      <CubeIcon />
    </h3>
    <div class="flex flex-row w-full overflow-x-auto md:overflow-x-hidden lg:flex-wrap space-x-4 lg:space-x-0 lg:justify-center">
      <div v-if="skills" v-for="skill in skills">
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
