<script setup lang="ts">
import type { Highlight } from '~/lib/schema';

type Props = {
  highlight: Highlight;
};
const { highlight } = defineProps<Props>();
const cellRef = ref<HTMLLIElement>()
const imageRef = ref<HTMLImageElement>();


// const isWidthFull = ref(false)
// const isHeightFull = ref(false)
// const isMounted = useMounted();
// function adjustImage() {
//   if (!isMounted || !cellRef.value || !imageRef.value) return;
//   console.log(imageRef.value.clientHeight)
//   console.log(imageRef.value.clientWidth)
//   isHeightFull.value = imageRef.value.clientHeight >= imageRef.value.clientWidth
//   isWidthFull.value = imageRef.value.clientWidth >= imageRef.value.clientHeight
// }

// onMounted(() => {
//   adjustImage()
//   window.addEventListener('resize', adjustImage)
// })
// onUnmounted(() => window.addEventListener('resize', adjustImage))
// :class="{'h-full': isHeightFull, 'w-full': isWidthFull}"
</script>

<template>
  <li ref="cellRef">
    <NuxtLink :to="highlight.post_url" target="_blank">
      <div class="aspect-square flex">
        <img
          ref="imageRef"
          :src="highlight.image_url[0] ?? ''"
          :alt="highlight.name"
          class="rounded-xl .max-w-full .max-h-full size-full object-contain"
        />
      </div>
      <p class="mt-2 break-words text-center font-bold">{{ highlight.name }}</p>
    </NuxtLink>
  </li>
</template>
