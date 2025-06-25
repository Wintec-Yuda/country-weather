<template>
  <transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full p-3 shadow-xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center cursor-pointer"
    >
      <!-- Icon panah atas pakai inline SVG biar nggak perlu install library -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
