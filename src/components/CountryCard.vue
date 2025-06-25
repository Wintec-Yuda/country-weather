<template>
  <div
    class="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-100 transition space-y-3 border border-gray-100 cursor-pointer"
    @click="handleClick"
  >
    <h2 class="text-lg font-bold text-gray-800">{{ name }}</h2>

    <p class="text-xs text-gray-500 italic">Klik untuk melihat info cuaca ☀️</p>

    <p class="text-sm text-gray-600">
      🌍 Region:
      <span class="font-medium">{{ region }}</span>
    </p>

    <p class="text-sm text-gray-600">
      👥 Populasi:
      <span class="font-medium">{{ population.toLocaleString() }}</span>
    </p>

    <p class="text-sm text-gray-600">
      🗣️ Bahasa:
      <span class="font-medium">
        {{ languageList }}
      </span>
    </p>

    <div class="flex flex-wrap gap-2 text-xs mt-1">
      <a
        :href="maps.googleMaps"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition text-center"
        @click.stop
      >
        🌐 Google Maps
      </a>
      <a
        :href="maps.openStreetMaps"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-2 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition text-center"
        @click.stop
      >
        🗺️ Street Map
      </a>
    </div>

    <div class="pt-2 border-t border-gray-200">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  region: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  languages: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const languageList = computed(() => {
  return Object.values(props.languages).join(', ')
})

function handleClick() {
  emit('click')
}
</script>
