<script setup lang="ts">
const store = useStore();
</script>

<template>
  <div
    class="sticky top-0 bg-background pt-4 z-50"
    :class="!store.isAtTop && 'shadow-md'"
  >
    <div class="mx-auto max-w-[2400px] px-6 md:px-8 xl:px-20">
      <div class="hidden md:flex justify-between">
        <img src="/pantip-logo.png" alt="pantip-logo" width="80" />
        <Menu />
      </div>
      <!-- <div class="md:px-20 md:border-b"></div> -->
    </div>
    <div class="md:border-b">
      <SearchBar />
    </div>
    <div class="mx-auto max-w-[2400px] md:px-8 xl:px-20">
      <Rooms />
    </div>
  </div>
</template>
