<template>
  <div class="flex flex-row mb-5">
    <span class="self-center h-4 w-4 mr-4">
      <span v-if="end === 'Today'" class="inline-flex h-full w-full rounded-full bg-transparent border-2 border-light-accent border-green-500"/>
      <span v-else class="inline-flex h-full w-full rounded-full bg-transparent border-2 border-light-accent border-gray-500"/>
    </span>
    <div class="leading-7">
      <p class="text-base dark:text-dark-900 text-gray-800 leading-6">{{begin}} - {{end}} <span class="px-3">|</span> {{location}}</p>
      <h1 class="text-2xl font-bold">{{title}} - {{company}}</h1>
      <h2 class="text-xl">{{description}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    company: {
      type: String,
      default: "ArtDanjProduction"
    },
    location: {
      type: String,
      default: "France"
    },
    begin: {
      type: String,
      default: "Now"
    },
    end: {
      type: String,
      default: "Never"
    }
  }
}
</script>

<style scoped lang="scss">

</style>
