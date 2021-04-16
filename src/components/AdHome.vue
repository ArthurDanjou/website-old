<template>
  <section class="w-full my-12">
    <div class="md:space-x-12 space-y-8 md:space-y-0 flex flex-col md:flex-row items-center justify-around h-full">
      <nuxt-link to="/uses" class="md:w-1/3 h-full">
        <Ad color="rose" class="h-96 w-full flex flex-col justify-between items-center">
          <div>
            <img class="h-48" src="~/assets/images/memojies/Dev.png" alt="Dev Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              Usages
            </h1>
            <h3 class="px-4 text-xl text-gray-700">
              Venez decouvrir mon environnement de developpement
            </h3>
          </div>
        </Ad>
      </nuxt-link>
      <nuxt-link to="/contact" class="md:w-1/3 h-full">
        <Ad color="blue" class="h-96 w-full flex flex-col justify-between items-center">
          <div>
            <img class="h-48" src="~/assets/images/memojies/Fiesta.png" alt="Fiesta Memoji" />
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              Vous avez un projet ?
            </h1>
            <h3 class="px-4 text-lg text-gray-700">
              Contactez moi en detaillant votre projet pour debuter notre collaboration.
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

<style scoped lang="scss">

</style>
