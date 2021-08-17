<template>
  <main class="flex flex-col items-center px-4 xl:px-32">
    <PageTitle title="part.services" />
    <p class="text-justify text-gray-700 dark:text-gray-400 text-xl my-8">{{ $t('services.description') }}</p>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "services",
  head() {
    return {
      title: `${this.$i18n.t('header.services')} - Arthur Danjou`
    }
  },
})
</script>

<style scoped>

</style>
