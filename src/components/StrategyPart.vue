<template>
  <div>
    <h1 class="font-bold text-2xl">
      {{ $t(title) }}
    </h1>
    <p class="text-gray-700 dark:text-gray-400 text-base text-justify">
      {{ $t(description) }}
    </p>
  </div>
</template>

<script lang="ts">
interface StrategyPartProp {
  title: string,
  description: string
}

export default {
  name: "StrategyPart",
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    }
  },
  setup(props: StrategyPartProp) {

  }
}
</script>

<style scoped lang="scss">

</style>
