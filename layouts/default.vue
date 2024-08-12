<template>
  <div
    class="min-h-screen bg-background text-primary antialiased animate-fade-in"
  >
    <Header />
    <main class="mx-auto max-w-[2400px] px-6 md:px-8 xl:px-20">
      <slot />
    </main>
    <Footer />
    <StickyFooter />
  </div>
</template>
