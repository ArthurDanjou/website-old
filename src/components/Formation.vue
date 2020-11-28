<template>
  <div class="flex flex-row relative mb-5">
    <div class="self-center flex h-4 w-4 mr-4 relative">
      <span v-if="end === 'Today'" class="animate-ping relative inline h-full w-full rounded-full bg-orange-400 opacity-75"></span>
      <span v-else class="inline relative h-full w-full rounded-full bg-gray-400 opacity-75"></span>
      <span v-if="end === 'Today'" class="inline absolute rounded-full h-4 w-4 bg-orange-500"></span>
      <span v-else class="inline absolute rounded-full h-4 w-4 bg-gray-500"></span>
    </div>
    <div class="leading-7 relative">
      <p class="text-base dark:text-dark-900 text-gray-800 leading-6">{{ formatDate(begin) }} - {{ formatDate(end) }} <span class="px-3">|</span> {{location}}</p>
      <h1 class="text-2xl font-bold">{{ $t(title) }}</h1>
      <h2 class="text-xl">{{ $t(description) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formation",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    location: {
      type: String,
      default: "Location"
    },
    begin: {
      type: String,
      default: "Now"
    },
    end: {
      type: String,
      default: "Never"
    }
  },
  methods: {
    formatDate(date) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];
      const dateFormat = new Date(date)
      return monthNames[dateFormat.getMonth()] + " " + dateFormat.getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
