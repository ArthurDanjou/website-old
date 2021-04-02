<template>
  <section class="w-full flex items-center justify-center my-12">
    <div class="flex flex-col items-center w-full">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          Workflow
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl w-2/3 mt-4">
          Je suis ce processus afin d'etre le plus productif et de donner le resultat le plus qualitatif possible.
        </p>
      </div>
      <div class="my-8 flex flex-row-reverse w-full justify-between items-center">
        <div class="w-1/2 flex justify-center items-center">
          La belle image
        </div>
        <div class="flex justify-center 1/2">
          <div class="flex flex-col space-y-6 w-full">
            <StrategyPart
              title="#1. Brainstorming"
              description="Je realise blablabla Je realise blablabla Je realise blablabla Je realise blablabla"
            />
            <StrategyPart
              title="#2. Conception"
              description="Je realise blablabla"
            />
            <StrategyPart
              title="#3. Developpement"
              description="Je realise blablabla"
            />
            <StrategyPart
              title="#4. Livraison"
              description="Je realise blablabla"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "StrategyPreview",
}
</script>

<style scoped lang="scss">

</style>
