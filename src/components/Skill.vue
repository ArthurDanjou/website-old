<template>
  <div
    :id="name.toLowerCase()"
    class="p-1 flex items-center group group"
  >
    <img
      class="rounded-sm h-8 mr-2"
      :alt="`Skill ${name} Image`"
      :src="`https://athena.arthurdanjou.fr/files/${cover}`"
    />
    <h1 :class="getColor" class="duration-300 md:font-lg font-md font-bold text-center text-gray-700 dark:text-gray-400">{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from '@nuxtjs/composition-api'

interface SkillProps {
  name: string,
  color: string,
  cover: string
}

export default defineComponent({
  name: "Skill",
  props: {
    name: {
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
          return 'group-hover:text-blueGray-400'
        case 'cyan':
          return 'group-hover:text-cyan-400'
        case 'yellow':
          return 'group-hover:text-yellow-400'
        case 'emerald':
          return 'group-hover:text-emerald-400'
        case 'purple':
          return 'group-hover:text-purple-400'
        case 'orange':
          return 'group-hover:text-orange-700'
        case 'sky':
          return 'group-hover:text-sky-400'
        case 'lime':
          return 'group-hover:text-lime-400'
        case 'teal':
          return 'group-hover:text-teal-400'
        case 'blue':
          return 'group-hover:text-blue-400'
        case 'red':
          return 'group-hover:text-red-400'
        case 'rose':
          return 'group-hover:text-rose-400'
        case 'amber':
          return 'group-hover:text-amber-400'
      }
    })

    return {
      getColor
    }
  }
})
</script>
