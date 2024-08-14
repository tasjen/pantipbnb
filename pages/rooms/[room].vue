<script setup lang="ts">
import { getRecommendedTopicsByRoom, getTrendingTopicsByRoom } from '~/lib/data';
const route = useRoute()
const roomName = route.params.room as string
const { data: topics, status } = useAsyncData(`room:${roomName}`,
  () =>
    Promise.all([
      getRecommendedTopicsByRoom(roomName),
      getTrendingTopicsByRoom(roomName),
    ]).then(([recommended, trending]) => ({ recommended, trending }))
  , { lazy: true, server: false })
</script>

<template>
  <template v-if="!topics">
    <PostContainerSkeleton />
    <PostContainerSkeleton />
  </template>
  <template v-else>
    <PostContainer title="กระทู้แนะนำโดยสมาชิก" :posts="topics.recommended" />
    <PostContainer title="Pantip Trend" :posts="topics.trending" />
  </template>
</template>
