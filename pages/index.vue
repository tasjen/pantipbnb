<script setup lang="ts">
const data = useStore();
await callOnce(data.fetchHomePageData);
</script>

<template>
  <div class="mx-auto">
    <Header />
    <main class="mx-auto max-w-[2400px] px-4 md:px-8 lg:px-20">
      <Highlights />
      <TopPosts type="realtime" />
      <TopPosts type="pick" />
      <TopPosts type="hitz" />
    </main>
    <Footer />
    <StickyFooter />
  </div>
</template>
