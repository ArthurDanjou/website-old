<template>
  <main v-if="guestbook_messages" class="flex flex-col mb-8 px-5 xl:px-64">
    <PageTitle class="self-center" title="part.guestbook"/>
    <section @click="log" class="flex flex-col 2xl:flex-row items-center py-8">
      <div class="ml-2 text-lg leading-6 text-justify dark:text-gray-400 text-gray-700">
        <p>{{ $t('guestbook.description') }}</p>
      </div>
    </section>
    <section class="md:w-2/3 p-6 border border-indigo-300 dark:border-indigo-700 rounded-lg text-justify">
      <h1 class="text-black font-bold dark:text-white text-2xl">{{ $t('guestbook.signin') }}</h1>
      <h3 class="text-gray-500 dark:text-gray-400">{{ $t('guestbook.share') }}</h3>
      <div class="flex space-x-4 my-3">
        <div class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
          <GoogleIcon />
        </div>
        <div class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
          <GithubIcon />
        </div>
        <div class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
          <TwitterIcon />
        </div>
      </div>
      <p class="text-sm text-gray-700 dark:text-gray-300">{{ $t('guestbook.infos') }}</p>
    </section>
    <section class="flex flex-col 2xl:flex-row justify-center items-center py-8">
      FETCH messages
      {{ guestbook_messages }}
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
    const { $axios } = useContext()
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
          console.log("error", error)
        })
    })

    const log = () => {
      console.log(guestbook_messages)
    }

    return {
      guestbook_messages,
      log
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
