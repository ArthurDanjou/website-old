<template>
  <nuxt-link :to="link">
    <div
      class="mb-8 md:mb-0 home-link h-full duration-500 cursor-pointer flex flex-row justify-between py-3 w-full md:w-96 items-center"
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

<script lang="ts">

import {computed} from "@nuxtjs/composition-api";

interface HomeLinkProps {
  title: string,
  description: string,
  color: string,
  link: string
}

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
  setup(props: HomeLinkProps) {
    const getColor = computed(() => `hover:bg-${props.color}-400 dark:hover:bg-${props.color}-600 active:bg-${props.color}-400 dark:active:bg-${props.color}-600`)

    return {
      getColor
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
