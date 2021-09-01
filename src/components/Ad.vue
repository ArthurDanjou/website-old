<template>
  <div class="rounded-3xl p-2 lg:p-8 text-center h-full block duration-500" :class="getColor">
    <slot />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@nuxtjs/composition-api";

interface AdProps {
  color: string
}

export default defineComponent({
  name: "Ad",
  props: {
    color: {
      type: String,
      default: 'red'
    }
  },
  setup(props: AdProps) {
    const getColor = computed(() => {
      switch (props.color) {
        case 'red':
          return 'bg-red-400'
        case 'blue':
          return 'bg-blue-400'
        case 'green':
          return 'bg-green-400'
      }
    })

    return {
      getColor
    }
  }
})
</script>
