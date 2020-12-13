<template>
  <div class="mb-3 mr-3 p-1 md:p-2 h-64 w-64 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25 hover:scale-105 transform cursor-pointer" :class="'hover:bg-'+color+ '-600'">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="text-center">
        <img alt="Project Img" class="rounded-md" width="150" :src="'http://localhost:5555/files/' + cover">
      </div>
      <div class="text-center">
        <h1 class="md:text-2xl text-lg font-bold">{{ title }}</h1>
        <a :href="url" :class="'text-' + color + '-500'">{{ formatLink }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    url: {
      type: String,
      default: 'https://arthurdanjou.fr'
    },
    cover: {
      type: String,
      default: 'default.png'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    formatLink() {
      return this.url.replace('https://', '').replace('http://', '')
    }
  }
}
</script>

<style scoped>

</style>
