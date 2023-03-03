import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const API_KEY = "b9bf822643abfab53681f5b9aaa37937"