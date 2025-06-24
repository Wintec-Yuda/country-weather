import { defineStore } from 'pinia'
import type { Country } from '../types/country'
import { fetchCountries } from '../api/countries'

export const useCountryStore = defineStore('country', {
  state: () => ({
    countries: [] as Country[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async loadCountries() {
      this.loading = true
      this.error = null

      try {
        const data = await fetchCountries()
        this.countries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      } catch (e) {
        this.error = 'Gagal mengambil data negara'
      } finally {
        this.loading = false
      }
    }
  }
})
