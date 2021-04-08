<template>
  <main class="about flex flex-col items-center">
    <PageTitle
      title="part.about"
      color="orange"
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

export default {
  name: "about",
  head() {
    return {
      title: 'About me - Arthur Danjou'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
