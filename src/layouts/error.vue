<template>
  <main class="error w-full px-5 xl:px-64">
    <div class="mt-24 w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center md:mb-20">
        <div class="flex">
          <div class="h-16 w-16 mr-4">
            <svg class="icon inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
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
            <div class="w-full py-4 px-8 md:py-8 md:px-16 font-bold hover:bg-red-500 duration-500 rounded">
              {{ $t('error.back') }}
              <svg class="inline arrow-img" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
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

  .home-btn:hover .arrow-img {
    transform: translate(3px, 0);
  }

  .arrow-img {
    transform: translate(3px, -3px);
    transition: .4s;
  }
}
</style>
