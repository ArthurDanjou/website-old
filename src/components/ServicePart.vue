<template>
  <div class="relative lg:(w-1/2 m-8) mt-8">
    <div class="absolute right-0 top-0 bg-indigo-600 text-white rounded-xl p-3">
      <slot />
    </div>
    <div class="rounded-lg mt-8 md:mr-8 pt-4 md:p-8">
      <h1 class="font-bold capitalize text-4xl mb-4">
        {{ $t(title) }}
      </h1>
      <p class="text-gray-600 text-lg text-justify leading-5 ">
        {{ $t(content) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePart",
  props: {
    title: {
      type: String,
      default: 'services.1.title'
    },
    content: {
      type: String,
      default: 'services.1.content'
    }
  }
}
</script>
