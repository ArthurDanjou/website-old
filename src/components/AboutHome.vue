<template>
  <section v-if="info && info.age" class="w-full flex items-center justify-center my-12">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-12 md:mb-0 w-full md:w-1/2 flex justify-center">
        <img src="@/assets/images/memojies/Hat.png" alt="It's me !" class="xl:w-1/2">
      </div>
      <div class="md:w-1/2 text-justify">
        <h2 class="text-4xl font-bold text-center md:text-justify">
          {{ $t('home.about.title') }}
        </h2>
        <p class="text-xl my-6 text-gray-700 dark:text-gray-400">
          {{ $t('home.about.description', {age: info.age}) }}
        </p>
        <div class="flex justify-center md:justify-start">
          <Button content="home.about.about" link="about"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {InfoData} from "../../@types/types";

export default defineComponent({
  name: "AboutPreview",
  setup() {
    const {$content} = useContext()
    const info = useAsync(() => {
      return $content('infos').fetch<InfoData>()
    })

    return {
      info
    }
  }
})
</script>
