import type { Weather } from '../types/weather'
import httpClient from './httpClient'

const BASE_URL = import.meta.env.VITE_WEATHER_API

export async function fetchCurrentWeather(lat: number, lon: number): Promise<Weather> {
  const res = await httpClient.get(`${BASE_URL}/forecast`, {
    params: {
      latitude: lat,
      longitude: lon,
      current_weather: true,
    },
  })

  return res.data.current_weather
}
