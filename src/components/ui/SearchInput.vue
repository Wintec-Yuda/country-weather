<template>
  <div class="relative w-full max-w-sm">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      class="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
    />
    <span
      v-if="model"
      @click="clear"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer text-sm"
    >
      ✖️
    </span>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
defineProps<{
  placeholder?: string
}>()

function clear() {
  model.value = ''
}
</script>
