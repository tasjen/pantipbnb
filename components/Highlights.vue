<script setup lang="ts">
const { highlights } = useStore();
</script>

<template>
  <div>
    <h1 class="my-8 text-start text-[32px] font-bold">Pantip Highlight</h1>
    <ul
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
    >
      <li v-for="e in highlights" :key="e.id">
        <a :href="e.post_url" target="_blank">
          <img
            :src="e.image_url[0] ?? ''"
            :alt="e.name"
            class="h-auto w-full rounded-lg"
          />
          <p class="mt-2 break-words text-center font-bold">{{ e.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
