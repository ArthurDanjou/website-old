<template>
  <div class="rounded-3xl p-2 lg:p-8 text-center h-full block duration-500" :class="getColor">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'red'
  }
})
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
</script>
