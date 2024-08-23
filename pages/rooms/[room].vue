<script setup lang="ts">
import { getLatestTopicsByRoom, getRecommendedTopicsByRoom, getTrendingTopicsByRoom } from '~/lib/data';
import { useElementVisibility } from '@vueuse/core'
import { LoaderCircle } from 'lucide-vue-next';
const route = useRoute()
const roomName = route.params.room as string
const nextId = ref<number>()

const infiniteFetchingRef = ref(null)
const infiniteFetchingVisible = useElementVisibility(infiniteFetchingRef)


const { data: topics, status } = useAsyncData(`room:${roomName}`,
() =>
    Promise.all([
      getRecommendedTopicsByRoom(roomName),
      getTrendingTopicsByRoom(roomName),
      getLatestTopicsByRoom(roomName, 10)
    ]).then(([recommended, trending, {posts: latest, newNextId}]) => {
      nextId.value = newNextId;
      return { recommended, trending, latest }
    })
  , { lazy: true, server: false })

async function loadMoreLatestTopics() {
  const {posts, newNextId} = await getLatestTopicsByRoom(roomName, 10, nextId.value)
  topics.value?.latest?.push(...posts)
  nextId.value = newNextId
}
watch(infiniteFetchingVisible, async () => {
  if (infiniteFetchingRef.value && infiniteFetchingVisible.value) {
    await loadMoreLatestTopics()
  }
})
</script>

<template>
  <template v-if="!topics">
    <PostContainerSkeleton />
    <PostContainerSkeleton />
  </template>
  <template v-else>
    <PostContainer title="กระทู้แนะนำโดยสมาชิก" :posts="topics.recommended" />
    <PostContainer title="Pantip Trend" :posts="topics.trending" />
    <PostContainer title="กระทู้ล่าสุด" :posts="topics.latest" />
    <LoaderCircle
      ref="infiniteFetchingRef"
      class="animate-spin mx-auto size-16 my-8"
    />
  </template>
</template>
