<template>
  <section class="p-6 border border-indigo-300 dark:border-indigo-700 rounded-lg text-justify">
    <h1 class="text-black font-bold dark:text-white text-2xl">{{ $t('guestbook.signin') }}</h1>
    <h3 class="text-gray-500 dark:text-gray-400">{{ $t('guestbook.share') }}</h3>
    <div class="flex space-x-4 my-3">
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
    <p class="text-sm text-gray-700 dark:text-gray-300">{{ $t('guestbook.infos') }}</p>
  </section>
</template>

<script lang="ts">
import {defineComponent, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "GuestBookLogin",
  setup() {
    const { $axios } = useContext()

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }

    const loginWithGithub = () => {
      return $axios.get('/auth/github',{headers})
        .then((response) => {
        console.log(response)
      })
    }

    const loginWithGoogle = () => {
      return $axios.get('/auth/google', {headers})
        .then((response) => {
        console.log(response)
      })
    }

    const loginWithTwitter = () => {
      return $axios.get('/auth/twitter', {headers})
        .then((response) => {
        console.log(response)
      })
    }

    return  {
      loginWithGithub,
      loginWithTwitter,
      loginWithGoogle
    }
  }
})
</script>

<style scoped>

</style>
