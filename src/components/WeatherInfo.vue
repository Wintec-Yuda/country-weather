<template>
  <div class="text-sm text-gray-700 space-y-1">
    <p>
      🌡️ Suhu:
      <span :class="temperatureClass" class="font-medium">
        {{ weather.temperature }}°C
      </span>
    </p>
    <p>💨 Kecepatan Angin: <span :class="windClass">{{ weather.windspeed }} km/h</span></p>
    <p>🧭 Arah Angin: {{ weather.winddirection }}°</p>
    <p>🌞 Waktu: {{ formattedTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '../stores/weatherStore'
import { formatWeatherTime } from '../utils/format'
import { computed } from 'vue'

const weatherStore = useWeatherStore()
const weather = weatherStore.weather

const formattedTime = computed(() => weather ? formatWeatherTime(weather.time) : '-')

const temperatureClass = computed(() => {
  if (!weather) return ''
  const temp = weather.temperature

  if (temp <= 15) return 'text-blue-600'
  if (temp <= 25) return 'text-yellow-500'
  if (temp <= 30) return 'text-orange-500'
  return 'text-red-600'
})

const windClass = computed(() => {
  if (!weather) return ''
  const speed = weather.windspeed

  if (speed <= 5) return 'text-blue-600'
  if (speed <= 15) return 'text-yellow-500'
  if (speed <= 30) return 'text-orange-500'
  return 'text-red-600'
})
</script>
