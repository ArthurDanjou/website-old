<template>
  <div class="flex flex-row mb-5">
    <div class="self-center flex h-3 w-3 mr-3 relative">
      <span
        class="relative inline h-3 w-3 rounded-full opacity-75"
        :class="props.end === 'Today' ? 'animate-ping bg-red-500 dark:bg-amber-400' : 'bg-gray-400'"
      />
      <span
        class="inline absolute rounded-full h-3 w-3"
        :class="props.end === 'Today' ? 'bg-red-500 dark:bg-amber-400' : 'bg-gray-500'"
      />
    </div>
    <div class="leading-7">
      <p class="text-base dark:text-dark-100 text-gray-800 leading-6">{{ getBeginDate }} - {{ getEndDate }} <span class="px-3">|</span> {{props.location}}</p>
      <h1 class="text-2xl font-bold">{{ $t(props.title) }}</h1>
      <h2 class="text-xl text-gray-700 dark:text-gray-400">{{ $t(props.description) }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useNuxtApp} from "nuxt3";
import {computed} from "vue";

interface FormationProps {
  title: string,
  description: string,
  location: string,
  begin: string,
  end: string
}

const props = defineProps({
  title: {
    type: String,
    default: "Title"
  },
  description: {
    type: String,
    default: "Description"
  },
  location: {
    type: String,
    default: "Location"
  },
  begin: {
    type: String,
    default: "Now"
  },
  end: {
    type: String,
    default: "Never"
  }
})

const {i18n} = useNuxtApp()
const getBeginDate = computed(() => {
  const dateFormat = props.begin.split('-')
  return i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
})
const getEndDate = computed(() => {
  const dateFormat = props.end.split('-')
  return props.end === 'Today' ? i18n.t('date.today') : i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
})
</script>
