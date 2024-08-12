<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Post } from "~/lib/schema";
type Props = {
  title: string;
  posts: Post[];
};
const { title, posts } = defineProps<Props>();
</script>
<template>
  <div v-if="posts.length" class="my-8">
    <h1 class="mb-8 text-start text-[32px] font-bold">
      {{ title }}
    </h1>
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-6"
    >
      <PostItem v-for="post in posts" :key="post.topic_id" :post="post" />
    </ul>
  </div>
</template>
