<template>
  <section class="flex flex-col justify-center items-center py-8">
    <div>
      <img class="rounded-full my-5" src="~/assets/images/memojies/Hey.png" alt="A picture of myself" />
    </div>
    <div class="text-lg leading-6 text-justify dark:text-gray-400 text-gray-700">
      <div>{{ $t('about.banner.hello') }} <span class="text-indigo-600 font-bold">Arthur DANJOU</span> 👋.</div> <br/>
      <p>{{ $t('about.banner.1')}}</p> <br/>
      <p>{{ $t('about.banner.2') }}</p> <br/>
      <p>{{ $t('about.banner.3') }}</p> <br />
      <p>{{ $t('about.banner.4') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsAbout"
}
</script>
