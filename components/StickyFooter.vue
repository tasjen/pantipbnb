<script setup lang="ts">
import { UserRound } from "lucide-vue-next";
</script>
<template>
  <NuxtLink
    to="https://pantip.com/login"
    class="sticky bottom-0 flex flex-col items-center border-t bg-background p-2 md:hidden"
  >
    <UserRound class="size-8 opacity-80" />
    <p class="text-sm">เข้าสู่ระบบ</p>
  </NuxtLink>
</template>
