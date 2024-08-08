<template>
  <div class="sticky top-0 bg-background pt-4 shadow-sm border-b">
    <div class="mx-auto max-w-[2400px]">
      <div class="mx-20 hidden md:flex justify-between">
        <img src="/pantip-logo.png" alt="pantip-logo" width="80" />
        <Menu />
      </div>
      <div class="md:px-20">
        <SearchBar />
      </div>
      <Rooms />
    </div>
  </div>
</template>
