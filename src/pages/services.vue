<template>
  <main class="flex flex-col items-center px-4 xl:px-32">
    <PageTitle title="part.services" />
    <p class="text-justify text-gray-700 dark:text-gray-400 text-xl my-8">{{ $t('services.description') }}</p>
    <div class="flex flex-col justify-around items-center py-10 w-full">
      <div class="flex flex-col lg:(flex-row justify-around mb-16) w-full">
        <ServicePart title="services.1.title" content="services.1.content" >
          <CodeIcon />
        </ServicePart>
        <ServicePart title="services.2.title" content="services.2.content">
          <NetworkIcon />
        </ServicePart>
      </div>
      <div class="flex flex-col lg:(flex-row justify-around) w-full">
        <ServicePart title="services.3.title" content="services.3.content">
          <SupportIcon />
        </ServicePart>
        <ServicePart title="services.4.title" content="services.4.content">
          <GlassIcon />
        </ServicePart>
      </div>
    </div>
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
