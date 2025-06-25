export function formatWeatherTime(isoTime: string): string {
  const date = new Date(isoTime)

  return date.toLocaleString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'long', 
    year: 'numeric',
  })
}
