export interface Country {
  name: {
    common: string
  }
  region: string
  latlng: [number, number]  // [latitude, longitude]
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  languages?: Record<string, string>
}
