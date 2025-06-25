<template>
  <div class="bg-white shadow rounded-xl p-4 text-center space-y-1">
    <h3 class="text-sm text-gray-500">{{ title }}</h3>
    <p :class="['text-xl font-semibold', valueClass]">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  valueClass?: string
}>()
</script>
