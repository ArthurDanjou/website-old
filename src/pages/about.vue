<template>
  <main class="flex flex-col items-center mb-8 px-4 xl:px-64">
    <PresentationAbout />
    <SkillsAbout />
    <InterestsAbout />
    <LanguagesAbout />
    <FormationsAbout />
    <ExperiencesAbout />
    <a href="/resume.pdf" data-blobity-radius="16" target="_blank" class="z-index-3 duration-150 transform hover:scale-105">
      <div class="text-lg px-8 py-4 rounded-xl border-2 border-red-500 dark:border-amber-400 text-red-500 dark:text-amber-400 bg-white dark:bg-black">
        {{ $t('about.cv') }}
      </div>
    </a>
  </main>
</template>

<script>

export default {
  name: "about",
  head() {
    return {
      title: `${this.$i18n.t('header.about')} - Arthur Danjou`
    }
  }
}
</script>
