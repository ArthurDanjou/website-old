<template>
  <div class="my-6">
    <div class="text-justify leading-6 text-black dark:text-white">
      {{ message }}
    </div>
    <div class="flex mt-3">
      <div class="text-gray-600 dark:text-gray-300">
        {{ author }}
      </div>
      <div class="text-gray-200 px-3 dark:text-gray-700">/</div>
      <div class="text-gray-400 dark:text-gray-500 lining-nums">
        {{ formatDateAndTime }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useContext} from "@nuxtjs/composition-api";

interface GuestBookMessageProps {
  author: string,
  message: string,
  date: string
}

export default defineComponent({
  name: "GuestbookMessage",
  props: {
    message: {
      type: String,
      default: 'Guestbook Message'
    },
    author: {
      type: String,
      default: "Guestbook Author"
    },
    date: {
      type: String,
      default: "Guestbook Date"
    }
  },
  setup(props: GuestBookMessageProps) {
    const {i18n} = useContext()

    const formatDateAndTime = computed(() => {
      const date = new Date(props.date)
      const realMonth = date.getMonth()+1
      const month = realMonth.toString().length == 2 ? realMonth.toString() : `0${realMonth.toString()}`
      const minutes = date.getMinutes().toString().length == 2 ? date.getMinutes() : `0${date.getMinutes()}`
      const hours = date.getHours().toString().length == 2 ? date.getHours() : `0${date.getHours()}`
      return `${date.getDate()} ${i18n.t(`month.${month}`)} ${date.getFullYear()} ${i18n.t('guestbook.at')} ${hours}:${minutes}`
    })

    return {
      formatDateAndTime
    }
  }
})
</script>
