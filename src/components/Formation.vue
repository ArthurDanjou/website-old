<template>
  <div class="flex flex-row mb-5">
    <div class="self-center flex h-3 w-3 mr-3 relative">
      <span v-if="end === 'Today'" class="animate-ping relative inline h-3 w-3 rounded-full bg-indigo-600 opacity-75"></span>
      <span v-else class="inline relative h-3 w-3 rounded-full bg-gray-400 opacity-75"></span>
      <span v-if="end === 'Today'" class="inline absolute rounded-full h-3 w-3 bg-indigo-800"></span>
      <span v-else class="inline absolute rounded-full h-3 w-3 bg-gray-500"></span>
    </div>
    <div class="leading-7">
      <p class="text-base dark:text-dark-100 text-gray-800 leading-6">{{ getBeginDate }} - {{ getEndDate }} <span class="px-3">|</span> {{location}}</p>
      <h1 class="text-2xl font-bold">{{ $t(title) }}</h1>
      <h2 class="text-xl text-gray-700 dark:text-gray-400">{{ $t(description) }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, useContext} from "@nuxtjs/composition-api";

interface FormationProps {
  title: string,
  description: string,
  location: string,
  begin: string,
  end: string
}

export default {
  name: "Formation",
  props: {
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
  },
  setup(props: FormationProps) {
    const {i18n} = useContext()
    const getBeginDate = computed(() => {
      const dateFormat = props.begin.split('-')
      return i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
    })
    const getEndDate = computed(() => {
      const dateFormat = props.end.split('-')
      return props.end === 'Today' ? i18n.t('date.today') : i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
    })

    return {
      getBeginDate,
      getEndDate
    }
  }
}
</script>

<style scoped>

</style>
