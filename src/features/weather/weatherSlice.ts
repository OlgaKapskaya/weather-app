import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ForecastHourlyResponseType,
  ForecastSummaryResponseType,
  ListType,
  MainType,
  WeatherType,
  WindType,
} from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { weatherAPI } from './weatherAPI'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'
import dayjs from 'dayjs'
import { AppRootStateType } from '../../app/store'

const initialState = {
  weather: [] as WeatherType[],
  currentDate: '',
  currentTime: '',
  currentCity: '',
  main: {} as MainType,
  sunrise: '',
  sunset: '',
  wind: {} as WindType,
  visibility: 0,
  forecastList: [] as ListType[]
}

export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
  async (location: string, { dispatch }) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await weatherAPI.getSummary(location)

      dispatch(setSummaryWeather({ weather: res.data }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  })

export const getHourlyForecast = createAsyncThunk('weather/getHourlyWeather',
  async (location: string, { dispatch }) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await weatherAPI.getHourly(location)

      dispatch(setHourlyWeather({ weather: res.data }))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      errorNetworkUtil(dispatch, e)
    }
  })
export const getStartCity = createAsyncThunk('weather/getCityFromLS', async (_, { dispatch }) => {
  const local_storage = localStorage.getItem('current-city')
  if (local_storage) {
    const city = JSON.parse(local_storage)
    dispatch(setCurrentCity({ city: city }))
  }
})
export const getStartWeather = createAsyncThunk('weather/getWeather', async (_, { dispatch , getState}) => {
  dispatch(getStartCity())
  const state = getState() as AppRootStateType
  const currentCity = state.weather.currentCity

  if (currentCity) dispatch(getSummaryWeather(currentCity))
  else {
    dispatch(setCurrentCity({ city: 'Minsk' }))
    dispatch(getSummaryWeather('Minsk'))
  }
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<{ city: string }>) => {
      state.currentCity = action.payload.city
    },
    setSummaryWeather: (state, action: PayloadAction<{ weather: ForecastSummaryResponseType }>) => {
      state.weather = action.payload.weather.weather
      state.currentDate = dayjs.unix(action.payload.weather.dt).format('DD.MM.YYYY')
      state.currentTime = dayjs.unix(action.payload.weather.dt).format('HH:mm')
      state.main = action.payload.weather.main
      state.sunrise = dayjs.unix(action.payload.weather.sys.sunrise).format('HH:mm')
      state.sunset = dayjs.unix(action.payload.weather.sys.sunset).format('HH:mm')
      state.wind = action.payload.weather.wind
      state.visibility = action.payload.weather.visibility
    },
    setHourlyWeather: (state, action: PayloadAction<{ weather: ForecastHourlyResponseType }>) => {
      state.forecastList = action.payload.weather.list
    },
  },
})
export const { setCurrentCity, setSummaryWeather, setHourlyWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer