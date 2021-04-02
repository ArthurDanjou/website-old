<template>
  <div class="w-full my-12">
    <div class="space-x-12 flex items-center justify-center">
      <nuxt-link to="/uses" class="h-84 w-1/2">
        <Ad class="h-full w-full flex flex-col justify-between">
          <div>
            ILLUSTRATION
          </div>
          <div>
            <h1 class="font-bold text-black text-3xl">
              Usages
            </h1>
            <p class="text-lg text-gray-700 mt-4">
              Venez decouvrir mon environnement de developpement
            </p>
          </div>
        </Ad>
      </nuxt-link>
      <nuxt-link to="/contact" class="h-84 w-1/2">
        <Ad color="blue" class="h-full w-full flex flex-col justify-between">
          <div>
            ILLUSTRATION
          </div>
          <div>
            <h1 class="font-bold text-black text-4xl">
              Vous avez un projet ?
            </h1>
            <p class="text-lg text-gray-700 mt-4">
              Contactez moi en detaillant votre projet pour debuter notre collaboration.
            </p>
          </div>
        </Ad>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AdPreview"
}
</script>

<style scoped lang="scss">

</style>
