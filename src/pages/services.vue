<template>
  <main class="flex flex-col items-center px-4 xl:px-32">
    <PageTitle title="part.services" />
    <p class="text-justify text-gray-700 dark:text-gray-400 text-xl my-8">{{ $t('services.description') }}</p>
    <div class="flex flex-col lg:(flex-row) justify-around items-center pt-10 w-full">
      <div class="grid grid-cols-1 gap-x-12 mb-20 sm:grid-cols-3 w-full">
        <ServicePart title="services.1.title">
          <template v-slot:icon>
            <CompassIcon />
          </template>
          <template v-slot:content>
            <div class="flex flex-col space-y-4">
              <p>Développement</p>
              <p>Architecture</p>
              <p>Test</p>
            </div>
          </template>
        </ServicePart>
        <ServicePart title="services.2.title">
          <template v-slot:icon>
            <DesignIcon />
          </template>
          <template v-slot:content>
            <div class="flex flex-col space-y-4">
              <p>Développement</p>
              <p>Architecture</p>
              <p>Test</p>
              <p>Test</p>
            </div>
          </template>
        </ServicePart>
        <ServicePart title="services.3.title">
          <template v-slot:icon>
            <CodeIcon />
          </template>
          <template v-slot:content>
            <div class="flex flex-col space-y-4">
              <p>Développement</p>
              <p>Architecture</p>
            </div>
          </template>
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
