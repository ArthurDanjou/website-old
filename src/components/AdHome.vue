<template>
  <section class="w-full h-full my-12">
    <div class="w-full grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-2 h-full">
      <nuxt-link to="/env">
        <Ad color="red" class="group w-full flex flex-col justify-between items-center">
          <div>
            <img class="h-64 group-hover:scale-105 transform duration-500" src="~/assets/images/memojies/Dev.png" alt="Dev Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              {{ $t('home.ad.env.title') }}
            </h1>
            <h2 class="px-4 text-xl text-gray-700">
              {{ $t('home.ad.env.description') }}
            </h2>
          </div>
        </Ad>
      </nuxt-link>
      <nuxt-link to="/contact">
        <Ad color="blue" class="group w-full flex flex-col justify-between items-center">
          <div>
            <img class="h-64 group-hover:scale-105 transform duration-500" src="~/assets/images/memojies/HandUp.png" alt="HandUp Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              {{ $t('home.ad.contact.title') }}
            </h1>
            <h2 class="px-4 text-lg text-gray-700">
              {{ $t('home.ad.contact.description') }}
            </h2>
          </div>
        </Ad>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "AdHome"
}
</script>
