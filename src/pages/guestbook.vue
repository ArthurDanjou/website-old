<template>
  <main v-if="guestbook_messages" class="flex flex-col mb-8 px-4 xl:px-64">
    <PageTitle class="self-center" title="part.guestbook"/>
    <section class="flex flex-col 2xl:flex-row items-center py-8">
      <div class="ml-2 text-lg leading-6 text-justify dark:text-gray-400 text-gray-700">
        <p>{{ $t('guestbook.description') }}</p>
      </div>
    </section>
    <GuestBookLogin />
    <section class="flex flex-col py-8">
      <div v-for="message in guestbook_messages">
        <GuestbookMessage
          :message="message.message"
          :author="message.user.username"
          :date="message.created_at"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent, ref, useAsync, useContext} from "@nuxtjs/composition-api";

interface GuestbookMessage {
  message: string,
  author: string,
  date: string
}

export default defineComponent({
  name: "guestbook",
  head() {
    return {
      title: `${this.$i18n.t('header.guestbook')} - Arthur Danjou`
    }
  },
  setup() {
    const { $axios, $sentry } = useContext()
    const guestbook_messages = ref([])

    useAsync(async () => {
      await $axios.get('guestbook', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
        .then(response => {
          guestbook_messages.value = response.data.guestbook_messages
        })
        .catch(error => {
          $sentry.captureEvent(error)
        })
    })

    return {
      guestbook_messages
    }
  }
})
</script>

<style scoped lang="scss">
.icon-parent svg {
  @apply duration-300;
}
.icon-parent:hover svg {
  @apply transform scale-110;
}
</style>
