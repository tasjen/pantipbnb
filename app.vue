<script setup lang="ts">
import "~/assets/css/global.css";
useHead({
  title: 'Pantipbnb',
  meta: [
    { name: 'description', content: "A clone of Airbnb homepage with Pantip's content." }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: "Airbnb Cereal VF";
  src: url("/fonts/airbnb-cereal-vf.woff2");
  font-weight: 425;
  font-style: normal;
  font-display: swap;
}

html {
  font-family:
    "Airbnb Cereal VF",
    Circular,
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    "Helvetica Neue",
    sans-serif;
}
</style>
