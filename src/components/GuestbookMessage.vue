<template>
  <div class="my-6">
    <div class="text-justify leading-6">
      {{ message }}
    </div>
    <div class="flex mt-3">
      <div class="text-gray-600">
        {{ author }}
      </div>
      <div class="text-gray-200 px-3">/</div>
      <div class="text-gray-400 lining-nums">
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
      const month = date.getMonth().toString().startsWith('0') ? date.getMonth() : `0${date.getMonth()}`
      const minutes = date.getMinutes().toString().startsWith('0') ? date.getMinutes() : `0${date.getMinutes()}`
      return `${date.getDate()} ${i18n.t(`month.${month}`)} ${date.getFullYear()} at ${date.getHours()}:${minutes}`
    })

    return {
      formatDateAndTime
    }
  }
})
</script>
