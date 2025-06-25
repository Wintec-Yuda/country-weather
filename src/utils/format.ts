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

export function formatPopulation(number: number): string {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + ' Miliar';
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + ' Juta';
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(/\.0$/, '') + ' Ribu';
  } else {
    return number.toString();
  }
}