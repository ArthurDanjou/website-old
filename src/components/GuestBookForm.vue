<template>
  <section class="p-6 border border-indigo-600 bg-indigo-100 dark:border-indigo-700 rounded-lg text-justify">
    <h1 class="text-black font-bold dark:text-white text-2xl">{{ $t('guestbook.signin') }}</h1>
    <h3 class="text-gray-500 dark:text-gray-400">{{ $t('guestbook.share') }}</h3>
    <div class="hidden flex space-x-4 my-3">
      <div @click="loginWithGoogle" class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
        <GoogleIcon />
      </div>
      <div @click="loginWithGithub" class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
        <GithubIcon />
      </div>
      <div @click="loginWithTwitter" class="icon-parent flex justify-center items-center p-2 border border-black dark:border-white duration-300 cursor-pointer">
        <TwitterIcon />
      </div>
    </div>
    <div class="my-3">
      <form v-if="!success" class="relative">
        <input
          required
          :placeholder="$t('guestbook.placeholder')"
          v-model="form.message"
          class="pl-4 pr-32 py-2 mt-1 focus:border-indigo-600 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <button
            @click.prevent="handleForm"
            v-if="form.message && form.message.length > 0"
            class="flex items-center justify-center absolute right-1 top-1 px-8 py-1 font-bold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 hover:dark:bg-gray-700 duration-300"
          >
            {{ $t('guestbook.sign') }}
          </button>
      </form>
      <div class="flex">
        <div v-if="error" class="py-1 text-red-400 text-sm">
          {{ $t('guestbook.error') }}
        </div>
      </div>
      <div class="flex">
        <div v-if="success" class="py-1 text-green-400 text-sm">
          {{ $t('guestbook.success') }}
        </div>
      </div>
    </div>
    <p class="text-sm text-gray-700 dark:text-gray-300">{{ $t('guestbook.infos') }}</p>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref, useContext} from "@nuxtjs/composition-api";
import {GuestbookForm} from "~/types/types";

export default defineComponent({
  name: "GuestBookForm",
  setup() {
    const { $axios, $sentry } = useContext()

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }

    const loginWithGithub = () => {
      $axios.get('/auth/github', {headers})
    }

    const loginWithGoogle = () => {
      return $axios.get('/auth/google', {headers})
    }

    const loginWithTwitter = () => {
      $axios.get('/auth/twitter', {headers})
    }

    const error = ref(false)
    const success = ref(false)
    const form = ref<GuestbookForm>({} as GuestbookForm)

    const handleForm = async () => {
      const response = await $axios.post('/guestbook', {
        message: form.value.message
      },  {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        form.value.message = ''
        success.value = true
      } else {
        $sentry.captureEvent(response.data)
        error.value = true
        setTimeout(() => {
          error.value = false
        }, 5000)
      }
    }

    return  {
      loginWithGithub,
      loginWithTwitter,
      loginWithGoogle,
      form,
      success,
      error,
      handleForm
    }
  }
})
</script>

<style scoped>
.disabled {
  @apply hidden
}
</style>
