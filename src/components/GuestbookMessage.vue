<template>
  <div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

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
  }
})
</script>

<style scoped>

</style>
