<script setup lang="ts">
import type { TopPost } from "~/lib/schema";
type Props = {
  type: TopPost["type"];
};
const { type } = defineProps<Props>();
const store = useStore();

const filteredTopPosts = computed(() =>
  store.topPosts.filter((e) => e.type === type),
);
</script>
<template>
  <div>
    <h1 class="my-8 text-start text-[32px] font-bold">
      Pantip {{ type[0]?.toUpperCase() + type.slice(1) }}
    </h1>
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-6"
    >
      <PostCard
        v-for="post in filteredTopPosts"
        :key="post.topic_id"
        :post="post"
      />
    </ul>
  </div>
</template>
