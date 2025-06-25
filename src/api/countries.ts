import type { Country } from '../types/country'
import httpClient from './httpClient'

const BASE_URL = import.meta.env.VITE_COUNTRIES_API

export async function fetchCountries(): Promise<Country[]> {
  const res = await httpClient.get(`${BASE_URL}/all`, {
    params: {
      fields: 'name,latlng,region,maps',
    },
  })
  return res.data
}
