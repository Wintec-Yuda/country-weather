<template>
  <div>
    <Header />

    <main class="min-h-screen bg-blue-50">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
</script>
