<template>
  <main class="flex flex-col mb-12 px-4 xl:px-64">
    <section class="flex flex-col 2xl:flex-row items-center py-8">
      <div class="text-gray-700 dark:text-gray-400 text-xl mt-4 mb-8 text-justify">
        <p>{{ $t('newsletter.description') }}</p>
      </div>
    </section>
    <section class="p-6 border border-red-500 dark:border-amber-400 rounded-lg text-justify">
      <h1 class="text-black font-bold dark:text-white text-2xl">{{ $t('newsletter.title') }}</h1>
      <h3 class="text-gray-500 dark:text-gray-400">{{ $t('newsletter.subtitle') }}</h3>
      <div class="my-3">
        <form v-if="!success && !exist" class="relative">
          <input
            required
            type="email"
            :placeholder="$t('newsletter.placeholder')"
            v-model="form.email"
            class="pl-4 pr-32 py-2 mt-1 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
          <button
            data-blobity-magnetic="false"
            data-blobity-offset-x="2"
            data-blobity-offset-y="2"
            @click.prevent="handleForm"
            v-if="form.email && form.email.length > 0"
            class="z-index-3 button flex items-center justify-center px-8 py-1 font-bold text-gray-900 dark:text-gray-100 rounded"
          >
            {{ $t('newsletter.subscribe') }}
          </button>
        </form>
        <div class="flex">
          <div v-if="error" class="py-1 text-red-400 text-sm">
            {{ $t('newsletter.error') }}
          </div>
        </div>
        <div class="flex">
          <div v-if="success" class="py-1 text-green-400 text-sm">
            {{ $t('newsletter.success') }}
          </div>
        </div>
        <div class="flex">
          <div v-if="exist" class="py-1 text-green-400 text-sm">
            {{ $t('newsletter.exist') }}
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-700 dark:text-gray-300">{{ $t('newsletter.count', { count: subscribers }) }}</p>
      <p class="text-sm text-gray-700 dark:text-gray-300">{{ $t('newsletter.infos') }} <strong>{{ $t('newsletter.no_spam') }}</strong></p>
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent, ref, useAsync, useContext} from "@nuxtjs/composition-api";
import {NewsletterForm} from "~/types/types";

export default defineComponent({
  name: "newsletter",
  head() {
    return {
      title: `${this.$i18n.t('header.newsletter')} - Arthur Danjou`
    }
  },
  setup() {
    const { $axios, $sentry, app } = useContext()

    const subscribers = useAsync(async () => {
      const response = await $axios.get('/api/subscribers', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`,
        }
      })
      if (response.status === 200) {
        return response.data.count
      } else {
        $sentry.captureEvent(response.data)
        app.error({statusCode: 500})
      }
    }, 'subscribers')

    const error = ref(false)
    const success = ref(false)
    const exist = ref(false)
    const form = ref<NewsletterForm>({} as NewsletterForm)

    const handleForm = () => {
      $axios.post('/api/subscribers', {
        email: form.value.email
      },  {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      }).then((response) => {
        if (response.status === 200) {
          form.value.email = ''
          success.value = true
        } else if (response.status === 201) {
          form.value.email = ""
          exist.value = true
        } else {
          $sentry.captureEvent(response.data)
          error.value = true
          setTimeout(() => {
            error.value = false
          }, 5000)
        }
      }).catch(error => {
        $sentry.captureEvent(error)
      })
    }

    return {
      subscribers,
      error,
      success,
      form,
      handleForm,
      exist
    }
  }
})
</script>

<style scoped lang="scss">
.button {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
}
</style>
