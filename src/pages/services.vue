<template>
  <main class="flex flex-col items-center px-4 xl:px-32">
    <p class="text-gray-700 dark:text-gray-400 text-xl mt-4 mb-8 text-justify">
      {{ $t('services.description') }}
    </p>
    <section class="flex flex-col lg:(flex-row) justify-around items-center pt-10 w-full mb-20">
      <div class="grid grid-cols-1 md:gap-x-12 md:mb-20 md:grid-cols-3 w-full">
        <div class="flex justify-start mb-8 md:justify-center">
          <ServicePart title="services.1.title">
            <template v-slot:icon>
              <CompassIcon />
            </template>
            <template v-slot:content>
              <div class="flex flex-col space-y-4">
                <p class="service-item">Communication</p>
                <p class="service-item">Conseils</p>
                <p class="service-item">Recherche</p>
                <p class="service-item">Amélioration</p>
                <p class="service-item">User Conception</p>
                <p class="service-item">Tests</p>
              </div>
            </template>
          </ServicePart>
        </div>
        <div class="flex justify-center mb-8">
          <ServicePart title="services.2.title">
            <template v-slot:icon>
              <DesignIcon />
            </template>
            <template v-slot:content>
              <div class="flex flex-col space-y-4">
                <p class="service-item">User-Experience Design</p>
                <p class="service-item">Developer-Experience Design</p>
                <p class="service-item">User-Interface Design</p>
                <p class="service-item">Dashboard</p>
                <p class="service-item">Web panel</p>
                <p class="service-item">Design Responsif</p>
                <p class="service-item">Prototypes</p>
              </div>
            </template>
          </ServicePart>
        </div>
        <div class="flex justify-end md:justify-center">
          <ServicePart title="services.3.title">
            <template v-slot:icon>
              <CodeIcon />
            </template>
            <template v-slot:content>
              <div class="flex flex-col space-y-4">
                <p class="service-item">Portfolio</p>
                <p class="service-item">Application Web</p>
                <p class="service-item">Application Mobile</p>
                <p class="service-item">Application Bureautique</p>
                <p class="service-item">API</p>
                <p class="service-item">Infrastructure</p>
                <p class="service-item">Logiciels</p>
                <p class="service-item">DevSecOps</p>
              </div>
            </template>
          </ServicePart>
        </div>
      </div>
    </section>
    <section class="mb-24 w-full">
      <div class="flex justify-center md:justify-end mb-8">
        <h1 class="text-3xl md:text-4xl py-4 px-8 bg-indigo-500 rounded-lg text-white dark:(text-black bg-indigo-600) transform md:rotate-10">
          Mon Workflow
        </h1>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="grid grid-cols-1 md:gap-x-12 md:mb-12 md:grid-cols-3 w-full">
          <div class="flex justify-start md:justify-center">
            <div class="workflow-item">
              <span class="number">01</span> Planning
            </div>
          </div>
          <div class="flex justify-center md:justify-center">
            <div class="workflow-item mt-8">
              <span class="number">02</span> Designing
            </div>
          </div>
          <div class="flex justify-end md:justify-center">
            <div class="workflow-item mt-16">
              <span class="number">03</span> Developing
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:gap-x-12 md:mb-20 md:grid-cols-3 w-full">
          <div class="flex justify-start md:justify-center">
            <div class="workflow-item">
              <span class="number">04</span> Testing
            </div>
          </div>
          <div class="flex justify-center">
            <div class="workflow-item mt-8">
              <span class="number">05</span> Publishing
            </div>
          </div>
          <div class="flex justify-end md:justify-center">
            <div class="workflow-item mt-16">
              <span class="number">06</span> Maintaining
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full lg:w-4/5">
      <nuxt-link to="/contact">
        <Ad color="green" class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex justify-center">
            <img class="h-48 lg:h-64" src="~/assets/images/memojies/Fiesta.png" alt="Fiesta Memoji" />
          </div>
          <div class="group flex flex-col items-center justify-center lg:w-3/4 p-4 text-justify">
            <h1 class="font-bold text-black text-2xl lg:text-4xl mb-4">
              {{ $t('services.ad.title') }}
            </h1>
            <p class="text-lg lg:text-xl text-gray-700">
              {{ $t('services.ad.description') }}
            </p>
          </div>
        </Ad>
      </nuxt-link>
    </section>
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

<style scoped lang="scss">
.service-item {
  @apply text-xl text-gray-500;
}

.workflow-item {
  @apply text-3xl
}

.number {
  @apply block text-indigo-500 mb-4
}
</style>
