<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const store = useStore();
const containerRef = ref<HTMLUListElement>();

const isLeft = ref(true);
const isRight = ref(false);

function handleScrollLeft() {
  const container = containerRef.value;
  if (!container) return;
  container.scrollBy({
    left: -container.clientWidth / 1.5,
    behavior: 'smooth',
  });
  setTimeout(() => {
    isLeft.value = container.scrollLeft <= 20
    isRight.value = Math.abs(container.clientWidth - (container.scrollWidth - container.scrollLeft)) <= 20
  }, 550);
};

function handleScrollRight() {
  const container = containerRef.value;
  if (!container) return;
  container.scrollBy({
    left: container.clientWidth / 1.5,
    behavior: "smooth",
  });
  setTimeout(() => {
    isLeft.value = container.scrollLeft <= 20
    isRight.value = Math.abs(container.clientWidth - (container.scrollWidth - container.scrollLeft)) <= 20
  }, 550);
};
</script>

<template>
  <div class="flex items-center md:mt-4 relative">
    <button
      v-if="!isLeft"
      variant="outline"
      size="icon"
      class="mb-4 hidden rounded-full border bg-background p-1 border-[rgba(0,0,0,0.3)] shadow-white-all hover:p-[5px] md:inline absolute left-0 z-10 transition-all"
      @click="handleScrollLeft"
    >
      <ChevronLeft class="size-5" />
    </button>
    <ul
      ref="containerRef"
      class="no-scroll flex gap-12 overflow-x-auto px-4 md:px-0"
    >
      <li
        v-for="room in store.rooms"
        :key="room.id"
        class="box-border shrink-0 grow-0 border-background opacity-70 transition-colors hover:border-border md:hover:border-[#cccccc] hover:opacity-90 md:border-b-2 pb-2"
      >
        <a :href="room.link_url" target="_blank">
          <img
            :src="room.room_icon_url"
            :alt="room.name"
            class="mx-auto size-8 invert md:size-12"
          />
          <p class="text-center text-xs font-semibold">{{ room.name }}</p>
        </a>
      </li>
    </ul>
    <button
      v-if="!isRight"
      variant="outline"
      size="icon"
      class="mb-4 hidden rounded-full border border-[rgba(0,0,0,0.3)] bg-background p-1 shadow-white-all hover:p-[5px] md:inline absolute right-0 z-10 transition-all"
      @click="handleScrollRight"
    >
      <ChevronRight class="size-5" />
    </button>
  </div>
</template>
