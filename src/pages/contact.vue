<template>
  <main class="contact flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="part.contact"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </PageTitle>
    <section class="w-full lg:w-3/4 mb-10 mt-4 text-center">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-100">
        {{ $t('contact.why.title') }}
      </h1>
      <h3 class="text-md md:text-lg">
        {{ $t('contact.why.description') }}
      </h3>
    </section>
    <section v-if="info && info.hiring.status && info.hiring.color" class="w-full lg:w-3/4 mb-10 mt-4 text-center">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-100">
        {{ $t('contact.available.title') }}
      </h1>
      <h3 class="text-lg md:text-lg">
        {{ $t('contact.available.description') }}
      </h3>
      <div class="my-4 text-indigo-600">
        {{ $t('contact.available.start') }}
        <span class="py-1 px-2 font-bold rounded-full m-0.5" :class="getColor">{{ $t('hiring.status.' + info.hiring.status) }}</span>
        {{ $t('contact.available.end') }}
      </div>
    </section>
    <ContactForm />
  </main>
</template>

<script lang="ts">
import {computed, ref, useAsync, useContext} from "@nuxtjs/composition-api";
import {InfoData, Form} from "../../@types/types";
import {combineObject} from "windicss/types/utils/algorithm/compileStyleSheet";

export default {
  name: "contact",
  head: {
    title: 'Contact - Arthur Danjou'
  },
  setup() {
    const {$content} = useContext()
    const info = useAsync(() => {
      return $content('infos').fetch<InfoData>() as Promise<InfoData>
    })

    const hiring_color = info && info.value?.hiring.color
    const getColor = computed(() => {
      switch (hiring_color) {
        case 'green':
          return `bg-green-200 text-green-700`
        case 'red':
          return `bg-red-200 text-red-700`
      }
    })

    return {
      info,
      getColor,
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  .email:hover .arrow {
    transform: translateX(15px);
  }

  .link {
    @apply mr-5 duration-300;

    &:hover {
      @apply border-b-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-black dark:border-white border-solid;
    }
  }

  .button:disabled {
    @apply bg-gray-400 cursor-not-allowed
  }
}
</style>
