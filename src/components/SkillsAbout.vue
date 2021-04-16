<template>
  <section class="w-full mb-10 mt-4">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.skills') }}
      <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
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
import {useAsync, useContext} from "@nuxtjs/composition-api";
import {Skill} from "../../@types/types";

export default {
  name: "SkillsAbout",
  setup() {
    const {$content} = useContext()

    const skills = useAsync(() => {
      return $content('skills').fetch<Skill>()
    })

    return {
      skills
    }
  }
}
</script>
