import axios from 'axios'

// export const instance = axios.create({
//   baseURL: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/',
//   headers: {
//     'X-RapidAPI-Key': '16cdb740cdmsh86a067a4b95db8ep1ef90bjsnc6214353030f',
//     'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
//   }
// })

export const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const API_KEY = "b9bf822643abfab53681f5b9aaa37937"