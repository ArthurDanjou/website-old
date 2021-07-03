<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl">
      {{ $t('about.title.interests') }}
      <FireIcon />
    </h3>
    <div>
      <ul class="text-xl text-gray-700 dark:text-gray-400">
        <li class="my-2">
          {{ $t('about.title.technologies') }}
          <CpuIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.dev') }}
          <DevelopmentIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.devops') }}
          <InfiniteIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.startups') }}
          <VialIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.sysadmin') }}
          <ServerIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.trips') }}
          <PlaneIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.moto') }}
          <MotorcycleIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.cloud') }}
          <CloudIcon />
        </li>
        <li class="my-2">
          {{ $t('about.interests.maths') }}
          <MathsIcon />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "InterestsAbout",
}
</script>
