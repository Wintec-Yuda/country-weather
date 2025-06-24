<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Daftar Negara</h1>

    <div v-if="countryStore.loading" class="text-gray-500">Memuat data negara...</div>
    <div v-else-if="countryStore.error" class="text-red-500">{{ countryStore.error }}</div>

    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li
        v-for="country in countryStore.countries"
        :key="country.name.common"
        @click="loadWeather(country.latlng)"
        class="cursor-pointer p-4 rounded bg-white shadow hover:bg-blue-50 transition"
      >
        <h2 class="font-semibold text-lg">{{ country.name.common }}</h2>
        <p class="text-sm text-gray-500">{{ country.region }}</p>

        <div v-if="weatherStore.loading && selectedLatLng === country.latlng.join(',')">
          <p class="text-blue-500 mt-2 text-sm">Memuat cuaca...</p>
        </div>

        <div v-else-if="weatherStore.weather && selectedLatLng === country.latlng.join(',')">
          <p class="mt-2 text-sm">🌡️ {{ weatherStore.weather.temperature }}°C</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCountryStore } from '../stores/countryStore'
import { useWeatherStore } from '../stores/weatherStore'

const countryStore = useCountryStore()
const weatherStore = useWeatherStore()

const selectedLatLng = ref<string | null>(null)

onMounted(() => {
  countryStore.loadCountries()
})

async function loadWeather(latlng: [number, number]) {
  selectedLatLng.value = latlng.join(',')
  await weatherStore.getWeather(latlng[0], latlng[1])
}
</script>
