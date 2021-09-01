<template>
  <main class="contact flex flex-col items-center px-4 xl:px-64">
    <section class="w-full mb-8 text-justify">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-gray-400 text-center">
        {{ $t('contact.why.title') }}
      </h1>
      <h2 class="text-lg">
        {{ $t('contact.why.description') }}
      </h2>
    </section>
    <ContactForm class="w-full"/>
  </main>
</template>

<script lang="ts">
export default {
  name: "contact",
  head: {
    title: 'Contact - Arthur Danjou'
  }
}
</script>

<style scoped lang="scss">
.contact {
  .email:hover .arrow {
    transform: translateX(15px);
  }

  .link {
    @apply mr-5 duration-300;

    &:hover {
      @apply border-b-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-black dark:border-white border-solid;
    }
  }

  .button:disabled {
    @apply bg-gray-400 cursor-not-allowed
  }
}
</style>
