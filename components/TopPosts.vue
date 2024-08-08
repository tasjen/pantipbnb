<script setup lang="ts">
import type { TopPost } from "~/lib/schema";
import { MessageSquareText, SquarePlus } from "lucide-vue-next";
type Props = {
  type: TopPost["type"];
};
const { type } = defineProps<Props>();
const store = useStore();

const filteredTopPosts = computed(() =>
  store.topPosts.filter((e) => e.type === type),
);

const formatPostDate = (postDate: string): string => {
  const hours =
    (new Date().getTime() - new Date(postDate).getTime()) / 1e3 / 60 / 60;
  if (hours < 1) {
    return `${Math.floor(hours * 60)} นาที`;
  }
  if (hours < 24) {
    return `${Math.floor(hours)} ชั่วโมง`;
  }
  return new Date(postDate)
    .toLocaleString("th-TH", { dateStyle: "medium" })
    .slice(0, -4);
};
</script>
<template>
  <div>
    <h1 class="my-8 text-start text-[32px] font-bold">
      Pantip {{ type[0]?.toUpperCase() + type.slice(1) }}
    </h1>
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-6"
    >
      <li v-for="post in filteredTopPosts" :key="post.topic_id" class="text-sm">
        <a :href="`https://pantip.com/topic/${post.topic_id}`" target="_blank">
          <div v-if="post.thumbnail_url" class="flex aspect-square">
            <img
              :src="post.thumbnail_url ?? ''"
              :alt="post.title"
              class="mx-auto rounded-xl max-w-full max-h-full m-auto"
            />
          </div>
          <div
            v-else
            class="flex aspect-square overflow-hidden text-ellipsis rounded-xl bg-border p-8"
          >
            <p class="m-auto text-wrap text-center font-bold text-base">
              {{ post.title }}
            </p>
          </div>
          <div class="flex justify-between items-end">
            <div class="overflow-hidden mt-2 pr-2">
              <p
                class="truncate font-bold hover:inline-block hover:animate-text-loop align-bottom"
              >
                {{ post.title }}
              </p>
            </div>
            <div class="shrink-0">
              <MessageSquareText class="mr-1 inline size-4" />
              <span>{{ post.comments_count }}</span>
            </div>
          </div>
          <div class="flex justify-between items-end">
            <p
              class="text-muted-foreground"
              @click="formatPostDate(post.created_time)"
            >
              {{ post.author.name }}
            </p>
            <div>
              <SquarePlus class="mr-1 mb-1 inline size-4" />
              <span>{{ post.votes_count }}</span>
            </div>
          </div>
          <p class="text-muted-foreground">
            {{ formatPostDate(post.created_time) }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
