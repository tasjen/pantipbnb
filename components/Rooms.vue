<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const { rooms } = useStore();
const containerRef = ref<HTMLUListElement>();

const isLeft = ref(true);
const isRight = ref(false);

const handleScrollLeft = () => {
  containerRef.value?.scrollBy({
    left: -((containerRef.value.clientWidth ?? 0) / 1.5),
    behavior: 'smooth',
  });
  setTimeout(() => (isLeft.value = containerRef.value?.scrollLeft === 0), 500);
  setTimeout(
    () =>
      (isRight.value =
        (containerRef.value?.scrollWidth ?? 0) -
          (containerRef.value?.scrollLeft ?? 0) ===
        containerRef.value?.clientWidth),
    500,
  );
};

const handleScrollRight = () => {
  containerRef.value?.scrollBy({
    left: (containerRef.value.clientWidth ?? 0) / 1.5,
    behavior: "smooth",
  });
  setTimeout(() => (isLeft.value = containerRef.value?.scrollLeft === 0), 500);
  setTimeout(
    () =>
      (isRight.value =
        Math.abs(
          (containerRef.value?.clientWidth ?? 0) -
            ((containerRef.value?.scrollWidth ?? 0) -
              (containerRef.value?.scrollLeft ?? 0)),
        ) <= 8),
    500,
  );
};
</script>

<template>
  <div class="flex items-center md:mx-8 md:mt-4">
    <button
      v-if="!isLeft"
      variant="outline"
      size="icon"
      class="mb-4 hidden rounded-full border bg-background p-1 shadow-white-all hover:p-1.5 md:inline"
      @click="handleScrollLeft"
    >
      <ChevronLeft class="size-5" />
    </button>
    <ul
      ref="containerRef"
      class="no-scroll flex gap-12 overflow-x-auto px-4 md:mx-8"
    >
      <li
        v-for="room in rooms"
        :key="room.id"
        class="box-border shrink-0 grow-0 border-background opacity-70 transition-colors hover:border-border hover:opacity-90 md:border-b-4 pb-2"
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
      class="mb-4 hidden rounded-full border bg-background p-1 shadow-white-all hover:p-1.5 md:inline"
      @click="handleScrollRight"
    >
      <ChevronRight class="size-5" />
    </button>
  </div>
</template>
