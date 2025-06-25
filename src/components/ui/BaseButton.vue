<template>
  <button
    class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ 
  disabled?: boolean
}>()

defineEmits(['click'])
</script>
