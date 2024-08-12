<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
const store = useStore();
onMounted(() => {
  const setIsAtTop = useDebounceFn(() => {
    store.isAtTop = window.scrollY === 0;
  }, 100, { maxWait: 200 })
  window.addEventListener("scroll", setIsAtTop);
})
</script>

<template>
  <div
    class="sticky top-0 bg-background pt-4 z-50 shadow-md"
    :class="store.isAtTop && 'md:shadow-none'"
  >
    <div class="mx-auto max-w-[2400px] px-6 md:px-8 xl:px-20">
      <div class="hidden md:flex justify-between">
        <NuxtLink to="/">
          <img src="/pantip-logo.png" alt="pantip-logo" width="80" />
        </NuxtLink>
        <Menu />
      </div>
    </div>
    <div class="md:border-b">
      <SearchBar />
    </div>
    <div class="mx-auto max-w-[2400px] md:px-8 xl:px-20">
      <RoomContainer />
    </div>
  </div>
</template>
