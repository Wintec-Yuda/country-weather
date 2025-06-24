import { defineStore } from 'pinia'
import type { Weather } from '../types/weather'
import { fetchCurrentWeather } from '../api/weather'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weather: null as Weather | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async getWeather(lat: number, lon: number): Promise<void> {
      this.loading = true
      this.error = null
      this.weather = null

      try {
        const data = await fetchCurrentWeather(lat, lon)
        this.weather = data
      } catch (e) {
        this.error = 'Gagal mengambil data cuaca'
      } finally {
        this.loading = false
      }
    }
  }
})
