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
            required
            placeholder=" "
            class="form-input w-full"
            minlength="30"
            rows="4"
          />
        <label for="content" class="form-label">{{ $t('contact.form.content') }}</label>
      </div>
    </form>
    <div class="my-12">
      <div class="font-bold px-6 py-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:(bg-indigo-600 text-white) hover:dark:text-black duration-300 cursor-pointer">
        {{ $t('contact.form.submit') }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "ContactForm"
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
