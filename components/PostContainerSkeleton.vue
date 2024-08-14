<template>
  <div class="my-8">
    <Skeleton class="w-80 h-8 mb-10 mt-10" />
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-6"
    >
      <PostItemSkeleton v-for="(_,index) in Array(10)" :key="index" />
    </ul>
  </div>
</template>
