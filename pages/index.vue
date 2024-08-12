<script setup lang="ts">
import PostContainer from '~/components/PostContainer.vue';
import { getPantipHighlights, getPantipPick, getPantipRealtime, getPantipHitz } from '~/lib/data';

const { data: homepageData, status } = useLazyAsyncData(
  () =>
    Promise.all([
      getPantipHighlights(),
      getPantipRealtime(),
      getPantipPick(),
      getPantipHitz(),
    ]).then(([highlights, realtimes, picks, hitzs]) => ({ highlights, realtimes, picks, hitzs }))
)
</script>

<template>
  <template v-if="status === 'pending'"> Loading..... </template>
  <template v-else-if="homepageData">
    <Highlights :highlights="homepageData.highlights" />
    <PostContainer title="Pantip Realtime" :posts="homepageData.realtimes" />
    <PostContainer title="Pantip Pick" :posts="homepageData.picks" />
    <PostContainer title="Pantip Hitz" :posts="homepageData.hitzs" />
  </template>
</template>
