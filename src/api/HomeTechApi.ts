import axios from 'axios'

const techApi = axios.create({
  baseURL: import.meta.env.VITE_TECH_API_URL,
})

techApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { techApi }
