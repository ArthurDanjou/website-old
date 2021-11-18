<template>
  <div class="flex flex-row mb-5">
    <div class="self-center flex h-3 w-3 mr-3 relative">
      <span
        class="relative inline h-3 w-3 rounded-full opacity-75"
        :class="end === 'Today' ? 'animate-ping bg-red-500 dark:bg-purple-400' : 'bg-gray-400'"
      />
      <span
        class="inline absolute rounded-full h-3 w-3"
        :class="end === 'Today' ? 'bg-red-500 dark:bg-purple-400' : 'bg-gray-500'"
      />
    </div>
    <div class="leading-7">
      <p v-if="isSameDate()" class="text-base dark:text-dark-100 text-gray-800 leading-6">{{ getBeginDate }} <span class="px-3">|</span> {{location}}</p>
      <p v-else class="text-base dark:text-dark-100 text-gray-800 leading-6">{{ getBeginDate }} - {{ getEndDate }} <span class="px-3">|</span> {{location}}</p>
      <h1 class="text-2xl font-bold">{{ $t(title) }}</h1>
      <h2 class="text-xl text-gray-700 dark:text-gray-400">{{ company }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useContext} from "@nuxtjs/composition-api";

interface ExperienceProps {
  title: string,
  company: string,
  location: string,
  begin: string,
  end: string
}

export default defineComponent({
  name: "Experience",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    company: {
      type: String,
      default: "ArtDanjProduction"
    },
    location: {
      type: String,
      default: "France"
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
  setup(props: ExperienceProps) {
    const {i18n} = useContext()
    const getBeginDate = computed(() => {
      const dateFormat = props.begin.split('-')
      return i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
    })
    const getEndDate = computed(() => {
      const dateFormat = props.end.split('-')
      return props.end === 'Today' ? i18n.t('date.today') : i18n.t('month.' + dateFormat[0]) + " " + dateFormat[1]
    })

    const isSameDate = () => {
      return props.begin === props.end
    }

    return {
      getBeginDate,
      getEndDate,
      isSameDate
    }
  }
})
</script>
