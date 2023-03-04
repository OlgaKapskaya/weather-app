import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ForecastSummaryResponseType, MainType, SysStateType, WeatherType, WindType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { weatherAPI } from './weatherAPI'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'
import dayjs from 'dayjs'

type InitialStateType = {
  weather: WeatherType[]
  currentDate: string
  currentTime: string
  currentCity: string
  main: MainType
  sys: SysStateType
  wind: WindType
  visibility: number
}

const initialState: InitialStateType = {
  weather: [],
  currentDate: '',
  currentTime: '',
  currentCity: '',
  main: {} as MainType,
  sys: {} as SysStateType,
  wind: {} as WindType,
  visibility: 0
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
      state.sys = {
        country: action.payload.weather.sys.country,
        id: action.payload.weather.sys.id,
        type: action.payload.weather.sys.type,
        sunrise: dayjs.unix(action.payload.weather.sys.sunrise).format('HH:mm'),
        sunset: dayjs.unix(action.payload.weather.sys.sunset).format('HH:mm'),
      }
      state.wind = action.payload.weather.wind
      state.visibility = action.payload.weather.visibility
    },
  },
})
export const { setCurrentCity, setSummaryWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer