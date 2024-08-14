<script setup lang="ts">
import type { Highlight } from '~/lib/schema';

type Props = {
  highlights: Highlight[];
};
const { highlights } = defineProps<Props>();
</script>

<template>
  <div>
    <h1 class="my-8 text-start text-[32px] font-bold">Pantip Highlight</h1>
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-6"
    >
      <li v-for="e in highlights" :key="e.id">
        <NuxtLink :to="e.post_url" target="_blank">
          <div class="aspect-square content-center">
            <div>
              <img
                :src="e.image_url[0] ?? ''"
                :alt="e.name"
                class="size-full rounded-xl"
              />
            </div>
          </div>
          <p class="mt-2 break-words text-center font-bold">{{ e.name }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
