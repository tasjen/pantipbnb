<script setup>
import { Menu as MenuIcon, UserRound as UserIcon } from "lucide-vue-next";
</script>

<template>
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger>
      <span
        class="space-x-4 rounded-full border p-4 transition-shadow duration-150 hover:shadow-md"
      >
        <MenuIcon class="inline size-6" />
        <UserIcon class="inline size-6" />
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="mr-4">
      <DropdownMenuItem class="font-medium">
        <NuxtLink to="https://pantip.com/login"
          >เข้าสู่ระบบ / สมัครสมาชิก</NuxtLink
        >
      </DropdownMenuItem>
      <DropdownMenuItem class="font-medium">
        <NuxtLink to="https://pantip.com/forum/new_topic">ตั้งกระทู้</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com">หน้าแรก</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/home/feed">My Feed</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/home/pick">Pantip Pick</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/home/hitz">Pantip Hitz</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/home/communities">Explore</NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/point" target="_blank">
          แลกพอยต์
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="https://pantip.com/activities" target="_blank">
          กิจกรรมพันทิป
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
