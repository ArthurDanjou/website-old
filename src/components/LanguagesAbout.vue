<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl">
      {{ $t('about.title.languages') }}
      <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    </h3>
    <div>
      <table class="text-base text-xl text-gray-700 dark:text-gray-400">
        <tr>
          <td class="font-bold py-2 pr-4">{{ $t('about.languages.fr')}} 🇫🇷</td>
          <td class="py-2 px-4">{{ $t('about.languages.native') }}</td>
        </tr>
        <tr>
          <td class="font-bold py-2 pr-4">{{ $t('about.languages.en')}} 🇬🇧</td>
          <td class="py-2 px-4">{{ $t('about.languages.fluent') }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "LanguagesAbout"
}
</script>

<style scoped>

</style>
