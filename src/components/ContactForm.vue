<template>
  <section class="w-full flex items-center justify-center flex-col">
    <h2 class="text-center mb-10 font-bold text-gray-700 text-2xl md:text-3xl my-4 dark:text-gray-400">
      {{ $t('contact.form.title.main') }} <br class="lg:hidden"/><a class="email text-black dark:text-white" href="mailto:me@arthurdanjou.fr" target="_blank">{{ $t('contact.form.title.email') }}</a> 📬
    </h2>
    <form class="w-full lg:w-1/2">
      <div class="w-full lg:flex lg:space-x-4 justify-center mb-8 lg:mb-12">
        <div class="form-div lg:w-1/2 mb-8 lg:mb-0">
          <input
            id="name"
            v-model="form.name"
            required
            type="text"
            placeholder=" "
            class="form-input-half w-full"
          />
          <label for="name" class="form-label">{{ $t('contact.form.name') }}</label>
        </div>
        <div class="form-div lg:w-1/2">
          <input
            id="email"
            v-model="form.email"
            required
            type="email"
            placeholder=" "
            class="form-input-half w-full"
          />
          <label for="email" class="form-label">{{ $t('contact.form.email') }}</label>
        </div>
      </div>
      <div class="form-div w-full mb-8 lg:mb-12">
        <input
          id="subject"
          v-model="form.subject"
          required
          type="text"
          placeholder=" "
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
    <div v-if="error" class="mt-4 px-3 py-1 rounded-full bg-red-300 font-bold text-black">
      {{ $t('contact.form.error') }}
    </div>
    <div v-if="success" class="mt-4 px-3 py-1 rounded-full bg-green-300 font-bold text-black">
      {{ $t('contact.form.success') }}
    </div>
    <div class="my-12">
      <button :disabled="!isSendable" @click.prevent="handleForm" class="font-bold px-6 py-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:(bg-indigo-600 text-white) hover:dark:text-black duration-300 cursor-pointer">
        {{ $t('contact.form.submit') }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, ref, useContext} from "@nuxtjs/composition-api";
import {Form} from "../../@types/types";

export default {
  name: "ContactForm",
  setup() {
    const error = ref(false)
    const success = ref(false)

    const {$axios} = useContext()
    const form = ref<Form>({} as Form)
    const handleForm = async () => {
      const {data} = await $axios.post('form',
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
      if (data && data.status === 200) {
        success.value = true
        setTimeout(() => {
          success.value = false
          form.value = {} as Form
        }, 5000)
      } else {
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
}
</script>

<style scoped lang="scss">
input:focus-within ~ label, textarea:focus-within ~ label,
input:not(:placeholder-shown) ~ label, textarea:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-7;
}

.form-input-half:focus-within ~ label,
.form-input-half:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6 -translate-x-5;
}

.form-div {
  @apply relative border-b border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white
}

.form-input-half, .form-input {
  @apply block w-full appearance-none focus:outline-none bg-transparent
}

.form-label {
  @apply absolute top-0 -z-1 duration-300 text-gray-700 dark:text-gray-400
}

.email {
  @apply duration-300 border-b-2 border-gray-200 dark:border-gray-800 hover:(border-black dark:border-white)
}
</style>
