<template>
  <main class="error w-full px-5 xl:px-64">
    <div class="mt-24 w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center md:mb-20">
        <div class="flex">
          <div class="h-16 w-16 mr-4">
            <ErrorIcon class="w-full h-full"/>
          </div>
          <div class="mb-12 lining-nums">
            <div class="mb-2">
              <p v-if="error.statusCode === 404" class="text-3xl md:text-6xl dark:text-white font-bold">
                {{ $t('error.error').toUpperCase() }} 404
              </p>
              <p v-else class="text-3xl md:text-6xl dark:text-white font-bold">
                {{ $t('error.error').toUpperCase() }} 500
              </p>
            </div>
            <div class="flex flex-col">
              <p v-if="error.statusCode === 404" class="text-xl md:text-2xl text-gray-900 dark:text-dark-100">
                {{ $t('error.no_page') }}
              </p>
              <p v-else class="text-xl md:text-2xl text-gray-900 dark:text-dark-100">
                {{ $t('error.internal') }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="home-btn" @click="next">
            <div class="cursor-pointer w-full py-4 px-4 md:py-4 md:px-4 font-bold hover:bg-indigo-600 duration-500 rounded">
              <BackSpaceIcon class="arrow-img text-xl"/>
              {{ $t('error.back') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, useRouter} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "error",
  props: ['error'],
  head: {
    title: 'Error - Arthur Danjou'
  },
  setup() {
    const router = useRouter()
    const next = () => router.back()

    return {next}
  }
})
</script>

<style scoped lang="scss">
.error {
  .arrow-img {
    transform: translate(0, -2px);
    transition: .4s;
  }
}
</style>
