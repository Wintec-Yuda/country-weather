export interface Weather {
  temperature: number         // °C
  windspeed: number           // km/h
  winddirection: number       // derajat arah angin
  weathercode: number         // kode cuaca (butuh mapping manual)
  is_day: 1 | 0               // 1 = siang, 0 = malam
  time: string                // waktu ISO string
}
