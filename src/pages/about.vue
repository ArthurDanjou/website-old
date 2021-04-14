<template>
  <main class="about flex flex-col items-center mb-8 px-5 xl:px-64">
    <PageTitle
      title="part.about"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </PageTitle>
    <PresentationAbout />
    <SkillsAbout />
    <InterestsAbout />
    <LanguagesAbout />
    <FormationsAbout />
    <ExperiencesAbout />
    <Button content="about.cv" link="/cv" />
  </main>
</template>

<script lang="ts">

import {useContext, useMeta} from "@nuxtjs/composition-api";

export default {
  name: "about",
  head() {},
  setup() {
    const { i18n } = useContext()

    useMeta({
      title: `${i18n.t('header.about')} - Arthur Danjou`
    })
  }
}
</script>

<style scoped lang="scss">
</style>
