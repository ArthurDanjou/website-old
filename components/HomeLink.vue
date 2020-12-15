<template>
  <nuxt-link :to="link">
    <div
      class="home-link h-full duration-500 cursor-pointer flex flex-row justify-between py-3 w-full md:w-96 items-center"
      :class="getColor"
    >
      <div class="ml-4">
        <h1 class="text-2xl md:text-3xl font-bold my-2">
          {{ $t(title) }}
          <slot />
        </h1>
        <p class="w-5/6 text-gray-900 dark:text-dark-100 text-justify duration-300">{{ $t(description) }}</p>
      </div>
      <div class="mr-10 arrow duration-300">
        <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "HomeLink",
  props: {
    title: {
      default: "Title",
      type: String
    },
    description: {
      default: "Description",
      type: String
    },
    color: {
      default: "red-100",
      type: String
    },
    link: {
      default: "/",
      type: String
    }
  },
  computed: {
    getColor() {
      switch (this.color) {
        case 'orange':
          return 'hover:bg-orange-400 dark:hover:bg-orange-600 active:bg-orange-400 dark:active:bg-orange-600'
        case 'purple':
          return 'hover:bg-purple-400 dark:hover:bg-purple-600 active:bg-purple-400 dark:active:bg-purple-600'
        case 'blue':
          return 'hover:bg-blue-400 dark:hover:bg-blue-600 active:bg-blue-400 dark:active:bg-blue-600'
        case 'green':
          return 'hover:bg-green-400 dark:hover:bg-green-600 active:bg-green-400 dark:active:bg-green-600'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home-link:hover {
  p {
    @apply dark:text-white
  }
  .arrow {
    transform: translateX(15px);
  }
}
</style>
