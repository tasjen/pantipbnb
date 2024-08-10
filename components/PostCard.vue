<script setup lang="ts">
import type { TopPost } from '~/lib/schema';
import { MessageSquareText, SquarePlus } from "lucide-vue-next";
import { formatPostDate } from '~/lib/utils';
type Props = {
  post: TopPost;
};
const { post } = defineProps<Props>();

const titleRef = ref<HTMLParagraphElement>()

const isTitleTruncated = ref(false)
function setIsTitleTruncated() {
  if (titleRef.value) {
    isTitleTruncated.value = titleRef.value.offsetWidth < titleRef.value.scrollWidth
  }
}

onMounted(() => {
  setIsTitleTruncated()
  window.addEventListener('resize', setIsTitleTruncated)
})
onUnmounted(() => window.addEventListener('resize', setIsTitleTruncated))
</script>

<template>
  <li class="text-sm">
    <a
      class="group"
      :href="`https://pantip.com/topic/${post.topic_id}`"
      target="_blank"
    >
      <div v-if="post.thumbnail_url" class="flex aspect-square">
        <img
          :src="post.thumbnail_url"
          :alt="post.title"
          class="m-auto rounded-xl max-w-full max-h-full"
        />
      </div>
      <div
        v-else
        class="flex aspect-square overflow-hidden text-ellipsis rounded-xl bg-border p-8"
      >
        <p
          class="m-auto text-wrap text-center font-bold text-[150%] leading-[150%]"
        >
          {{ post.title }}
        </p>
      </div>
      <div class="flex justify-between items-end">
        <div class="overflow-hidden mt-2 pr-2">
          <p
            ref="titleRef"
            class="truncate font-bold align-bottom"
            :class="{
            'group-hover:inline-block': isTitleTruncated,
            'group-hover:animate-text-loop': isTitleTruncated
          }"
          >
            {{ post.title }}
          </p>
        </div>
        <div class="shrink-0">
          <MessageSquareText class="mr-1 inline size-4" />
          <span>{{ post.comments_count }}</span>
        </div>
      </div>
    </a>
    <div class="flex justify-between items-end">
      <a
        class="text-muted-foreground hover:underline"
        :href="`https://pantip.com${post.author.slug}`"
      >
        {{ post.author.name }}
      </a>
      <div>
        <SquarePlus class="mr-1 mb-1 inline size-4" />
        <span>{{ post.votes_count }}</span>
      </div>
    </div>
    <p class="text-muted-foreground">
      {{ formatPostDate(new Date(post.created_time)) }}
    </p>
  </li>
</template>
