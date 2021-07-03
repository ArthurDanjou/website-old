<template>
  <section class="flex flex-col 2xl:flex-row justify-center items-center py-8">
    <div class="lg:mr-12">
      <img class="logo-img rounded-full my-5" src="~/assets/images/memojies/Hey.png" alt="It's me !" />
    </div>
    <div class="ml-2 text-lg leading-6 text-justify dark:text-gray-400 text-gray-700">
      <p>{{ $t('about.banner.hello') }} <span class="text-indigo-600 font-bold">Arthur DANJOU</span> 👋.</p> <br/>
      <p>{{ $t('about.banner.1')}}</p> <br/>
      <p>{{ $t('about.banner.2') }}</p> <br/>
      <p>{{ $t('about.banner.3') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsAbout"
}
</script>

<style scoped lang="scss">
.logo-img {
  height: 25rem;
}
</style>
