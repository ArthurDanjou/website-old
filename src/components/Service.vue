<template>
  <div class="flex flex-col items-center m-4 p-1 md:p-2 h-64 w-64 border-gray-900 dark:border-dark-800 border-2 duration-300 rounded-3xl hover:bg-opacity-25 hover:scale-105 transform cursor-pointer">
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    description: {
      default: 'Description',
      type: String
    },
    cover: {
      default: 'default.png',
      type: String
    },
    price: {
      default: 0,
      type: Number
    },
    bestSeller: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
