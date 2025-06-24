import axios from 'axios'

const httpClient = axios.create({
  timeout: 10000,
})

httpClient.interceptors.request.use(config => {
  return config
})

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status

      switch (status) {
        case 400:
          console.error('Bad Request')
          break
        case 404:
          console.error('Data not found')
          break
        case 500:
          console.error('Server Error')
          break
        default:
          console.error('Unexpected Error')
      }
    } else {
      console.error('Network Error:', error.message)
    }

    return Promise.reject(error)
  }
)

export default httpClient
