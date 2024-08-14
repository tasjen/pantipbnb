<script setup lang="ts">
import type { Room } from '~/lib/schema';

type Props = {
  room: Room;
};
const { room } = defineProps<Props>();
const route = useRoute()
const roomNameEng = room.link_url.split('/').at(-1)
</script>

<template>
  <li
    class="shrink-0 grow-0 transition-colors hover:opacity-100 md:border-b-[3px] pb-2 active:scale-95"
    :class="route.params.room === roomNameEng
    ? 'border-primary hover:border-primary opacity-100'
    : 'border-transparent opacity-70 hover:border-border'"
  >
    <NuxtLink :to="`/rooms/${roomNameEng === 'forum' ? 'all' : roomNameEng}`">
      <img
        :src="room.room_icon_url"
        :alt="room.name"
        class="mx-auto size-8 invert md:size-12"
      />
      <p class="text-center text-xs font-semibold">{{ room.name }}</p>
    </NuxtLink>
  </li>
</template>
