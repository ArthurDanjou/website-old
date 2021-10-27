<template>
  <section class="w-full flex justify-center flex-col">
    <h2 class="z-index-3 mb-10 font-bold text-gray-700 text-2xl md:text-3xl my-4 dark:text-gray-400 text-center">
      {{ $t('contact.form.title.main') }} <br class="lg:hidden"/>
      <a data-blobity-magnetic="false" class="text-black dark:text-white" href="mailto:me@arthurdanjou.fr" target="_blank">{{ $t('contact.form.title.email') }}</a>
      📬
    </h2>
    <form class="w-full">
      <div class="w-full lg:flex justify-center mb-8 lg:mb-12">
        <div class="form-div lg:w-1/2 mb-8 lg:mb-0 lg:mr-4">
          <input
            id="name"
            v-model="form.name"
            required
            placeholder=" "
            type="text"
            class="first-input w-full"
          />
          <label for="name" class="form-label">{{ $t('contact.form.name') }}</label>
        </div>
        <div class="form-div lg:w-1/2">
          <input
            id="email"
            v-model="form.email"
            required
            placeholder=" "
            type="email"
            class="second-input w-full"
          />
          <label for="email" class="form-label">{{ $t('contact.form.email') }}</label>
        </div>
      </div>
      <div class="form-div w-full mb-8 lg:mb-12">
        <input
          id="subject"
          v-model="form.subject"
          required
          placeholder=" "
          type="text"
          class="form-input w-full"
        />
        <label for="subject" class="form-label">{{ $t('contact.form.subject') }}</label>
      </div>
      <div class="form-div w-full">
          <textarea
            id="content"
            v-model="form.content"
            required
            placeholder=" "
            class="form-input w-full"
            minlength="30"
            rows="4"
          />
        <label for="content" class="form-label">{{ $t('contact.form.content') }}</label>
      </div>
    </form>
    <div v-if="error" class="mt-2 py-1 text-red-400 text-sm">
      {{ $t('contact.form.error') }}
    </div>
    <div v-if="success" class="mt-2 py-1 text-green-400 text-sm">
      {{ $t('contact.form.success') }}
    </div>
    <div class="my-12 flex justify-center">
      <button
        :disabled="!isSendable"
        :class="{'disabled': !isSendable}"
        @click.prevent="handleForm"
        class="font-bold px-8 py-4 border-2 rounded-xl border-red-500 dark:border-amber-400 text-red-500 dark:text-amber-400 hover:(bg-red-500 dark:bg-amber-400 text-white) hover:dark:text-black duration-300 cursor-pointer"
      >
        {{ $t('contact.form.submit') }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref, useContext} from "@nuxtjs/composition-api";
import {Form} from "~/types/types";

export default defineComponent({
  name: "ContactForm",
  setup() {
    const error = ref(false)
    const success = ref(false)

    const {$axios, $sentry} = useContext()
    const form = ref<Form>({} as Form)
    const handleForm = async () => {
      const response = await $axios.post('/api/form',
        {
          email: form.value.email,
          name: form.value.name,
          content: form.value.content,
          subject: form.value.subject
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`
          }
        })
      if (response.status === 200) {
        success.value = true
        setTimeout(() => {
          success.value = false
          form.value = {} as Form
        }, 5000)
      } else {
        $sentry.captureEvent(response.data)
        error.value = true
        setTimeout(() => {
          error.value = false
        }, 5000)
      }
    }

    const isSendable = computed(() => {
      const {email, name, content, subject} = form.value
      return isNotEmpty(email) && isNotEmpty(name) && isNotEmpty(content) && isNotEmpty(subject)
    })

    const isNotEmpty = (object: string | undefined) => {
      return object !== undefined && object.length > 0 && object !== "" && object !== ''
    }

    return {
      error,
      success,
      isSendable,
      form,
      handleForm
    }
  }
})
</script>

<style scoped lang="scss">
input:focus-within ~ label, input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-7;
}

textarea:focus-within ~ label, textarea:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-6;
}

.first-input:focus-within ~ label, .first-input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-5;
}

.second-input:focus-within ~ label, .second-input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-7;
}

.form-div {
  @apply relative border-b border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white
}

.second-input, .first-input, .form-input {
  @apply block w-full appearance-none focus:outline-none bg-transparent
}

.form-label {
  @apply absolute top-0 duration-300 text-gray-700 dark:text-gray-400
}

.disabled {
  @apply bg-gray-300 cursor-not-allowed border-gray-300 hover:text-black text-black
}
</style>
