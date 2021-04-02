<template>
  <section class="my-32 w-full flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-700 dark:text-gray-400">
        Hello I am <span class="text-black dark:text-white">Arthur Danjou</span>
      </h1>
      <h3 class="my-6 text-2xl font-medium text-gray-700 dark:text-gray-400">
        Developer and Student
      </h3>
      <p class="text-lg text-gray-800 mb-10 dark:text-gray-300">You can follow me on <span class="link">Twitter</span>,
        <span class="link">Twitch</span>
        and <span class="link">Github</span>.
        Here is my <nuxt-link to="/contact" class="link">Contact</nuxt-link> page.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Banner"
}
</script>

<style scoped lang="scss">
.link {
  @apply font-medium cursor-pointer border-b-2 border-gray-200 text-teal-400 hover:border-teal-400 duration-200 dark:(font-white border-gray-700) hover:dark:border-teal-400
}
</style>
