<template>
  <div class="mb-3 mr-2 p-1 md:p-2 h-32 w-32 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25" :class="getColor">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div>
        <img class="rounded-sm" alt="Skill Img" :src="getCoverLink">
      </div>
      <h1 class="md:text-lg text-md font-bold text-center">{{ skill }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from '@nuxtjs/composition-api'

interface SkillProps {
  skill: string,
  color: string,
  cover: string
}

export default {
  name: "Skill",
  props: {
    skill: {
      type: String,
      default: "Rien"
    },
    color: {
      type: String,
      default: "red"
    },
    cover: {
      type: String,
      default: "logo.jpg"
    }
  },
  setup(props: SkillProps) {
    const getColor = computed(() => `hover:bg-${props.color}-400`)
    const getCoverLink = computed(() => require(`@/assets/images/skills/${props.cover}.png`))

    return {
      getColor,
      getCoverLink
    }
  }
}
</script>

<style scoped lang="scss">
</style>
