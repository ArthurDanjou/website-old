<template>
  <div
    class="m-2 p-1 md:p-2 h-48 w-48 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25"
    :class="getColor"
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div>
        <img class="rounded-sm" alt="Skill Img" :src="getCoverLink">
      </div>
      <h1 class="md:text-xl text-lg font-bold text-center">{{ skill }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@nuxtjs/composition-api'

interface WorkSkillProp {
  skill: string,
  color: string,
  cover: string
}

export default {
  name: "WorkSkill",
  props: {
    skill: {
      type: String,
      default: "Rien"
    },
    color: {
      type: String,
      default: "red-100"
    },
    cover: {
      type: String,
      default: "logo.jpg"
    }
  },
  setup(props: WorkSkillProp) {
    const getColor = computed(() => `hover:bg-${props.color}-600`)
    const getCoverLink = computed(() => require(`@/assets/images/skills/${props.cover}.png`))

    return {
      getColor,
      getCoverLink
    }
  }
}
</script>

<style scoped>

</style>
