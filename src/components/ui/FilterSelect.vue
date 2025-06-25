<template>
  <div class="relative w-full max-w-sm">
    <select
      v-model="model"
      class="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition text-gray-700 bg-white"
    >
      <option disabled value="">-- Pilih Region --</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        class="text-gray-700"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
defineProps<{ 
  options: string[]
}>()
</script>
