<template>
  <section v-if="info && info.age" class="w-full flex items-center justify-center my-12">
    <div class="flex justify-between items-center">
      <div class="w-1/2 flex justify-center">
        <img src="@/assets/images/Logo.jpg" alt="Logo Image" class="w-1/2 rounded-2xl border-2 border-gray-100 dark:border-transparent">
      </div>
      <div class="w-1/2 text-justify">
        <h2 class="text-4xl font-bold">
          Who am I ?
        </h2>
        <p class="text-xl my-6 text-gray-700 dark:text-gray-400">
          {{ $t('home.banner.description', {age: info.age}) }}
        </p>
        <div class="flex">
          <Button content="Decouvrir mon profil" link="about"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {useAsync, useContext} from "@nuxtjs/composition-api";
import {InfoData} from "../../@types/types";

export default {
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
}
</script>

<style scoped lang="scss">

</style>
