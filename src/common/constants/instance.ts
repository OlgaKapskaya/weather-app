import axios from 'axios'

// export const instance = axios.create({
//   baseURL: 'https://weatherbit-v1-mashape.p.rapidapi.com',
//   headers: {
//     'X-RapidAPI-Key': '16cdb740cdmsh86a067a4b95db8ep1ef90bjsnc6214353030f',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
//   },
// })

export const instance = axios.create({
  baseURL: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/',
  headers: {
    'X-RapidAPI-Key': '16cdb740cdmsh86a067a4b95db8ep1ef90bjsnc6214353030f',
    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  }
})