<script setup lang="ts">
import { Search } from "lucide-vue-next";

const store = useStore();

const searchTerms = ref("");
const handleSubmit = (event: Event) => {
  event.preventDefault();
  window.open(`https://pantip.com/search?q=${searchTerms.value}`, "_blank");
};
</script>

<template>
  <form
    class="mx-auto flex items-center gap-2 lg:max-w-[900px] transition-all"
    :class="
      store.isAtTop
        ? 'md:animate-move-down-scale-up'
        : 'md:animate-move-up-scale-down md:-mb-16 md:max-w-[450px] lg:max-w-[600px]'
    "
    @submit="handleSubmit"
  >
    <Search class="absolute w-12 pl-4 md:hidden" />
    <Input
      v-model="searchTerms"
      class="h-14 rounded-full pl-14 shadow-md md:pl-8 md:text-xl relative"
      type="search"
      placeholder="ค้นหาบน Pantip"
    />
    <button
      type="submit"
      class="absolute right-2 hidden size-10 items-center justify-center rounded-full bg-[#ff385c] md:flex"
    >
      <Search class="m-auto size-5 invert" />
    </button>
  </form>
</template>
