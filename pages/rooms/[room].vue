<script setup lang="ts">
import PostContainer from '~/components/PostContainer.vue';
import { getRecommendedTopicByRoom, getTrendingTopicByRoom } from '~/lib/data';
const route = useRoute()
const { data: roomTopics, status } = useLazyAsyncData(
  () =>
    Promise.all([
      getRecommendedTopicByRoom(route.params.room as string),
      getTrendingTopicByRoom(route.params.room as string),
    ]).then(([recommendedTopics, trendingTopics]) => ({ recommendedTopics, trendingTopics }))
)
</script>

<template>
  <template v-if="status === 'pending'"> Loading..... </template>
  <template v-else-if="roomTopics">
    <PostContainer
      title="กระทู้แนะนำโดยสมาชิก"
      :posts="roomTopics.recommendedTopics"
    />
    <PostContainer title="Pantip Trend" :posts="roomTopics.trendingTopics" />
  </template>
</template>
