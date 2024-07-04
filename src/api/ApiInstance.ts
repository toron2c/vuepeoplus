import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.0.107:3333/', // Укажите базовый URL вашего API
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    // Получите токен из локального хранилища или любого другого источника
    const token = localStorage.getItem('accessToken')
    if (token) {
      // Добавьте токен к заголовкам запроса
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
