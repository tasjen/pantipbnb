<script setup lang="ts">
const store = useStore();
</script>

<template>
  <div
    class="sticky top-0 bg-background pt-4"
    :class="!store.isAtTop && 'shadow-md'"
  >
    <div class="mx-auto max-w-[2400px]">
      <div class="mx-20 hidden md:flex justify-between">
        <img src="/pantip-logo.png" alt="pantip-logo" width="80" />
        <Menu />
      </div>
      <!-- <div class="md:px-20 md:border-b"></div> -->
    </div>
    <div class="md:border-b">
      <SearchBar />
    </div>
    <div class="mx-auto max-w-[2400px]">
      <Rooms />
    </div>
  </div>
</template>
