<template>
  <main class="contact flex flex-col px-5 xl:px-64">
    <PageTitle class="self-center" title="part.contact" />
    <section class="w-full lg:w-3/4 mb-10 mt-4 text-justify">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-gray-400">
        {{ $t('contact.why.title') }}
      </h1>
      <h3 class="text-xl md:text-xl">
        {{ $t('contact.why.description') }}
      </h3>
    </section>
    <section class="w-full lg:w-3/4 mb-10 mt-4 text-justify">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-gray-400">
        {{ $t('contact.available.title') }}
      </h1>
      <h3 class="text-lg md:text-xl">
        {{ $t('contact.available.description') }}
      </h3>
      <div class="text-lg md:text-xl my-4 text-indigo-600">
        {{ $t('contact.available.start') }}
        <span v-if="info && info.hiring.status && info.hiring.color" class="py-1 px-2 font-bold rounded-full m-0.5" :class="getColor">{{ $t('hiring.status.' + info.hiring.status) }}</span>
        {{ $t('contact.available.end') }}
      </div>
    </section>
    <ContactForm class="w-full"/>
  </main>
</template>

<script lang="ts">
import {computed, useAsync, useContext} from "@nuxtjs/composition-api";
import {InfoData} from "~/types/types";

export default {
  name: "contact",
  head: {
    title: 'Contact - Arthur Danjou'
  },
  setup() {
    const {$content, $sentry} = useContext()
    const info = useAsync(() => {
      return ($content('infos')
        .fetch<InfoData>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    )as Promise<InfoData>
    })

    const hiring_color = info && info.value?.hiring.color
    const getColor = computed(() => {
      switch (hiring_color) {
        case 'green':
          return `bg-green-200 text-green-700`
        case 'red':
          return `bg-red-200 text-red-700`
        default:
          return 'bg-green-200 text-green-700'
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
