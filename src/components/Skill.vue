<template>
  <div class="mb-3 mr-2 p-1 md:p-2 h-32 w-32 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25" :class="getColor">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div>
        <img class="rounded-sm" alt="Skill Img" :src="getCoverLink">
      </div>
      <h1 class="md:text-lg text-md font-bold text-center text-gray-700 dark:text-gray-400">{{ skill }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from '@nuxtjs/composition-api'

interface SkillProps {
  skill: string,
  color: string,
  cover: string
}

export default defineComponent({
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
    const getColor = computed(() => {
      switch (props.color) {
        case 'blueGray':
          return 'hover:bg-blueGray-400'
        case 'cyan':
          return 'hover:bg-cyan-400'
        case 'yellow':
          return 'hover:bg-yellow-400'
        case 'emerald':
          return 'hover:bg-emerald-400'
        case 'purple':
          return 'hover:bg-purple-400'
        case 'orange':
          return 'hover:bg-orange-400'
        case 'lightBlue':
          return 'hover:bg-lightBlue-400'
        case 'lime':
          return 'hover:bg-lime-400'
        case 'teal':
          return 'hover:bg-teal-400'
        case 'blue':
          return 'hover:bg-blue-400'
        case 'red':
          return 'hover:bg-red-400'
        case 'rose':
          return 'hover:bg-rose-400'
        case 'amber':
          return 'hover:bg-amber-400'
      }
    })
    const getCoverLink = computed(() => require(`@/assets/images/skills/${props.cover}`))

    return {
      getColor,
      getCoverLink
    }
  }
})
</script>
