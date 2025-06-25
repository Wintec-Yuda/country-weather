<template>
  <div v-if="weather" class="text-sm text-gray-700 space-y-1">
    <p>
      🌡️ Suhu:
      <span :class="temperatureClass" class="font-medium">
        {{ weather.temperature }}°C
      </span>
    </p>
    <p>
      💨 Kecepatan Angin:
      <span :class="windClass">
        {{ weather.windspeed }} km/h
      </span>
    </p>
    <p>🧭 Arah Angin: {{ weather.winddirection }}°</p>
    <p>🌞 Waktu: {{ formattedTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeatherStore } from '../stores/weatherStore'
import { formatWeatherTime } from '../utils/format'

const weatherStore = useWeatherStore()
const weather = computed(() => weatherStore.weather)

const formattedTime = computed(() =>
  weather.value ? formatWeatherTime(weather.value.time) : '-'
)

const temperatureClass = computed(() => {
  const temp = weather.value?.temperature
  if (temp == null) return ''

  if (temp <= 15) return 'text-blue-600'
  if (temp <= 25) return 'text-yellow-500'
  if (temp <= 30) return 'text-orange-500'
  return 'text-red-600'
})

const windClass = computed(() => {
  const speed = weather.value?.windspeed
  if (speed == null) return ''

  if (speed <= 5) return 'text-blue-600'
  if (speed <= 15) return 'text-yellow-500'
  if (speed <= 30) return 'text-orange-500'
  return 'text-red-600'
})
</script>
