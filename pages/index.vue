<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

const store = useStore();
await callOnce(store.fetchHomePageData);
onMounted(() => {
  const setIsAtTop = useDebounceFn(() => {
    store.isAtTop = window.scrollY === 0;
  }, 100)
  window.addEventListener("scroll", setIsAtTop);
})
</script>

<template>
  <div class="mx-auto">
    <Header />
    <main class="mx-auto max-w-[2400px] px-6 md:px-8 xl:px-20">
      <Highlights />
      <TopPosts type="realtime" />
      <TopPosts type="pick" />
      <TopPosts type="hitz" />
    </main>
    <Footer />
    <StickyFooter />
  </div>
</template>
