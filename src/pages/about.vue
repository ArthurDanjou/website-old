<template>
  <main class="about flex flex-col items-center mb-8 px-5 xl:px-64">
    <PageTitle title="part.about"/>
    <PresentationAbout />
    <SkillsAbout />
    <InterestsAbout />
    <LanguagesAbout />
    <FormationsAbout />
    <ExperiencesAbout />
    <a href="/resume.pdf" target="_blank" class="duration-150 transform hover:scale-105">
      <div class="text-lg cursor-pointer px-8 py-4 rounded-xl border-2 border-indigo-600 hover:(bg-indigo-600 text-white) dark:hover:text-black text-indigo-600 duration-300">
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
