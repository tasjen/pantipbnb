<template>
  <footer class="space-y-4 border-t bg-primary-foreground">
    <div class="border-b py-4">
      <p class="text-center text-xl font-bold">เว็บในเครือ</p>
      <div
        class="mx-auto grid max-w-[2400px] grid-cols-2  px-6 md:px-8 xl:px-20"
      >
        <NuxtLink to="https://www.bloggang.com/" target="_blank" class="m-auto">
          <img
            src="https://pantip.com/static/images/logo-bloggang.png"
            class="h-16"
            alt="logo-bloggang"
          />
        </NuxtLink>
        <NuxtLink to="https://www.pantown.com/" target="_blank" class="m-auto">
          <img
            src="https://pantip.com/static/images/logo-pantown.png"
            class="h-16"
            alt="logo-pantown"
          />
        </NuxtLink>
        <NuxtLink
          to="https://www.pantipmarket.com/"
          target="_blank"
          class="m-auto"
        >
          <img
            src="https://pantip.com/static/images/logo-pantipmarket.png"
            class="h-16"
            alt="logo-pantipmarket"
          />
        </NuxtLink>
        <NuxtLink to="https://maggang.com/" target="_blank" class="m-auto">
          <img
            src="https://pantip.com/static/images/logo-maggang.png"
            class="h-16"
            alt="logo-maggang"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="space-y-4 border-b pb-8">
      <p class="text-center text-xl font-bold">ดาวน์โหลดได้แล้ววันนี้</p>
      <div
        class="mx-auto grid max-w-[2400px] grid-cols-3 items-center justify-center gap-8  px-6 md:px-8 xl:px-20"
      >
        <NuxtLink to="https://www.bloggang.com/" target="_blank" class="m-auto">
          <img
            src="https://pantip.com/static/images/button_download-app-store.png"
            class="h-16"
            alt="button_download-app-store"
          />
        </NuxtLink>
        <NuxtLink to="https://www.pantown.com/" target="_blank" class="m-auto">
          <img
            src="https://pantip.com/static/images/button_download-google-play.png"
            class="h-16"
            alt="button_download-google-play"
          />
        </NuxtLink>
        <NuxtLink
          to="https://www.pantipmarket.com/"
          target="_blank"
          class="m-auto"
        >
          <img
            src="https://ptcdn.info/application/huawei-Black.png"
            class="h-16"
            alt="huawei-Black"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="border-b">
      <div
        class="mx-auto flex max-w-[2400px] justify-between py-4  px-6 md:px-8 xl:px-20"
      >
        <div class="flex flex-col">
          <NuxtLink
            to="https://pantip.com/about/tos"
            target="_blank"
            class="hover:underline"
          >
            กฎ กติกาและมารยาท
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/defamation"
            target="_blank"
            class="hover:underline"
          >
            คำแนะนำการโพสต์
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/privacy"
            target="_blank"
            class="hover:underline"
          >
            นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/privilege"
            target="_blank"
            class="hover:underline"
          >
            สิทธิ์การใช้งานของสมาชิก
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/contact"
            target="_blank"
            class="hover:underline"
          >
            ติดต่อทีมงาน Pantip
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink
            to="https://pantip.com/advertising"
            target="_blank"
            class="hover:underline"
          >
            ติดต่อลงโฆษณา
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/job"
            target="_blank"
            class="hover:underline"
          >
            ร่วมงานกับ Pantip
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/app"
            target="_blank"
            class="hover:underline"
          >
            Download App Pantip
          </NuxtLink>
          <NuxtLink
            to="https://pantip.com/about/certified_developer"
            target="_blank"
            class="hover:underline"
          >
            Pantip Certified Developer
          </NuxtLink>
        </div>
      </div>
    </div>
    <div>
      <p class="mx-auto max-w-[2400px] text-start py-4  px-6 md:px-8 xl:px-20">
        © 2024 Internet Marketing co., ltd
      </p>
    </div>
  </footer>
</template>
