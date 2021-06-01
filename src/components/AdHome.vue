<template>
  <section class="w-full my-12 h-full">
    <div class="md:space-x-12 space-y-8 md:space-y-0 flex flex-col md:flex-row items-center justify-around h-full">
      <nuxt-link to="/env" class="block h-auto md:w-2/5">
        <Ad color="rose" class="w-full flex flex-col justify-between items-center">
          <div>
            <img  class="h-48" src="~/assets/images/memojies/Dev.png" alt="Dev Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              {{ $t('home.ad.env.title') }}
            </h1>
            <h3 class="px-4 text-xl text-gray-700">
              {{ $t('home.ad.env.description') }}
            </h3>
          </div>
        </Ad>
      </nuxt-link>
      <nuxt-link to="/contact" class="min-h-full md:w-2/5">
        <Ad color="blue" class="w-full flex flex-col justify-between items-center">
          <div>
            <img class="h-48" src="~/assets/images/memojies/Fiesta.png" alt="Fiesta Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              {{ $t('home.ad.contact.title') }}
            </h1>
            <h3 class="px-4 text-lg text-gray-700">
              {{ $t('home.ad.contact.description') }}
            </h3>
          </div>
        </Ad>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "AdPreview"
}
</script>
