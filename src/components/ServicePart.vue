<template>
  <div>
    <div>
      <slot name="icon" />
    </div>
    <div class="mt-8">
      <h1 class="font-bold text-3xl mb-4">
        {{ $t(title) }}
      </h1>
      <slot name="content"/>
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
    }
  }
}
</script>
