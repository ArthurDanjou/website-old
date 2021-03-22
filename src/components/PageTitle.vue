<template>
  <h1
    class="mt-16 md:mt-32 font-bold text-2xl md:text-4xl mr-2 inline mb-4 border-b-2 border-solid"
    :class="getColor"
  >
    {{ this.$t(title) }}
    <slot />
  </h1>
</template>

<script lang="ts">

import {computed} from "@nuxtjs/composition-api";

interface TitleProps {
  title: string,
  color: string
}

export default {
  name: "PageTitle",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    color: {
      default: 'red',
      type: String
    }
  },
  setup(props: TitleProps) {
    const getColor = computed(() => `border-${props.color}-400`)

    return {
      getColor
    }
  }
}
</script>

<style scoped>

</style>
