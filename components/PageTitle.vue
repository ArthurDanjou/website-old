<template>
  <h1
    class="mt-16 md:mt-32 font-bold text-2xl md:text-4xl mr-2 inline mb-4 border-b-2 border-solid"
    :class="getColor"
  >
    {{ $t(title) }}
    <slot />
  </h1>
</template>

<script>
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
  computed: {
    getColor() {
      switch (this.color) {
        case 'orange':
          return 'border-orange-400'
        case 'purple':
          return 'border-purple-400'
        case 'blue':
          return 'border-blue-400'
        case 'green':
          return 'border-orange-400'
      }
    }
  }
}
</script>

<style scoped>

</style>
