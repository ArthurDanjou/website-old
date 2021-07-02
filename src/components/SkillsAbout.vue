<template>
  <section class="w-full mb-10 mt-4">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.skills') }}
      <CubeIcon />
    </h3>
    <div class="flex flex-row w-full overflow-x-auto md:overflow-x-hidden lg:flex-wrap space-x-4 lg:space-x-0 lg:justify-center">
      <div v-if="skills" v-for="skill in skills">
        <Skill
          :skill="skill.title"
          :color="skill.color"
          :cover="skill.cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {Skill} from "../../types/types";

export default defineComponent({
  name: "SkillsAbout",
  setup() {
    const {$content, $sentry} = useContext()

    const skills = useAsync(() => {
      return $content('skills')
        .fetch<Skill>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    })

    return {
      skills
    }
  }
})
</script>
