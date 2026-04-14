<script setup>
// Theme initialization moved to nuxt.config via app.head script
// No DOM manipulation during mount to avoid theme flash
</script>

<template>
  <a href="#main-content" class="skip-to-content sr-only focus:not-sr-only bg-cyan-600 text-white px-4 py-2 fixed top-4 left-4 z-[900] rounded-md">
    {{ $t('skipToContent') }}
  </a>
  <NuxtLayout>
    <slot />
  </NuxtLayout>
</template>

<style>
.skip-to-content {
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform: translateY(-8px);
  opacity: 0;
}
.skip-to-content:focus {
  transform: translateY(0);
  opacity: 1;
}
</style>

<style>
body {
  background: radial-gradient(circle at 20% 20%, rgba(8, 10, 20, 0.95), #000510 60%) !important;
}
</style>
