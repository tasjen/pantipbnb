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
    class="mx-auto flex items-center gap-2 px-6 pb-4 lg:max-w-[900px] transition-all"
    :class="
      store.isAtTop
        ? 'md:animate-move-down-scale-up'
        : 'md:animate-move-up-scale-down md:-mb-16 md:max-w-[600px] lg:max-w-[750px]'
    "
    @submit="handleSubmit"
  >
    <p class="absolute -top-12 left-[40%] font-medium text-lg">
      Learn, Share & Fun
    </p>
    <Search class="absolute w-12 pl-4 md:hidden" />
    <Input
      v-model="searchTerms"
      class="h-14 rounded-full pl-14 shadow-md md:pl-8 md:text-xl"
      type="search"
      placeholder="ค้นหาบน Pantip"
    />
    <button
      type="submit"
      class="relative right-16 hidden h-11 w-12 items-center justify-center rounded-full bg-[#ff385c] md:flex"
    >
      <Search class="m-auto size-5 invert" />
    </button>
  </form>
</template>
