<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl">
      {{ $t('about.title.languages') }}
      <TranslateIcon />
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
