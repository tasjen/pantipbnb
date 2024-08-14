<script setup lang="ts">
import { getPantipHighlights, getPantipPick, getPantipRealtime, getPantipHitz } from '~/lib/data';

const { data: homepageData, status } = useAsyncData(
  () =>
    Promise.all([
      getPantipHighlights(),
      getPantipRealtime(),
      getPantipPick(),
      getPantipHitz(),
    ]).then(([highlights, realtimes, picks, hitzs]) => ({ highlights, realtimes, picks, hitzs }))
  , { lazy: true, server: false })
</script>

<template>
  <template v-if="!homepageData">
    <PostContainerSkeleton />
    <PostContainerSkeleton />
    <PostContainerSkeleton />
  </template>
  <template v-else>
    <HighlightContainer :highlights="homepageData.highlights" />
    <PostContainer title="Pantip Realtime" :posts="homepageData.realtimes" />
    <PostContainer title="Pantip Pick" :posts="homepageData.picks" />
    <PostContainer title="Pantip Hitz" :posts="homepageData.hitzs" />
  </template>
</template>
