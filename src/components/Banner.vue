<template>
  <section class="my-16 md:my-32 w-full flex items-center justify-center">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-6xl font-bold text-gray-700 dark:text-gray-400">
        {{ $t('home.banner.hello') }} <span class="text-black dark:text-white">Arthur Danjou</span> 👋,
      </h1>
      <h2 class="my-6 text-4xl text-black dark:text-white">
        <strong>{{ $t('home.banner.role') }}</strong>. <br />
        {{ $t('home.banner.student.main') }} <strong>{{ $t('home.banner.student.strong') }}</strong>.
      </h2>
      <p class="mt-4 text-lg text-gray-800 mb-10 dark:text-gray-300">{{ $t('home.banner.contact.follow') }}
        <a href="https://twitter.com/arthurdanj" target="_blank" rel="noreferrer noopener" class="link">Twitter</a>,
        <a href="https://twitch.tv/arthurdanjou" target="_blank" rel="noreferrer noopener" class="link">Twitch</a>
        {{ $t('home.banner.contact.and') }}
        <a href="https://github.com/arthurdanjou" target="_blank" rel="noreferrer noopener" class="link">Github</a>
        {{ $t('home.banner.contact.spacer') }}
        <nuxt-link to="contact" class="link">{{ $t('home.banner.contact.contact') }}</nuxt-link> {{ $t('home.banner.contact.me') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Banner"
}
</script>

<style scoped lang="scss">
.link {
  @apply font-medium cursor-pointer border-b-2 border-gray-200 text-indigo-600 hover:border-indigo-600 duration-200 dark:(font-white border-gray-700) hover:dark:border-indigo-600
}
</style>
