import axios from 'axios'
import { BASE_URL } from './reactQuery/ApiRouts'

export const axiosInstance = axios.create({
    baseURL:BASE_URL
})

axiosInstance.interceptors.request.use(async config=>{
    config.headers.Authorization = import.meta.env.VITE_API_AUTH
    return config
},error => {
    Promise.reject(error)
})