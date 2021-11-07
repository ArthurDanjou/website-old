<template>
  <section class="w-full mb-10">
    <h3 class="font-bold text-2xl md:text-4xl mb-3">
      {{ $t('about.title.formations') }}
      <DegreeHatIcon />
    </h3>
    <div v-if="formations" v-for="formation in formations">
      <Formation
        :title="formation.title.code"
        :description="formation.description.code"
        :location="formation.location"
        :begin="formation.begin_date"
        :end="formation.end_date" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {useAsyncData, useNuxtApp} from "nuxt3";

const {$axios, $sentry, app} = useNuxtApp()

const formations = await useAsyncData('formations', async () => {
  const response = await $axios.get('/api/formations', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.status === 200) {
    return response.data.formations.sort((a, b) => {
      return a.end_date === 'Today' ? -1 : a.end_date.split('-')[1] > b.end_date.split('-')[1] ? -1 : a.end_date.split('-')[0] > b.end_date.split('-')[0] ? 0 : 1
    })
  } else {
    app.error({statusCode: 500})
    $sentry.captureEvent(response.data)
  }
})
</script>
