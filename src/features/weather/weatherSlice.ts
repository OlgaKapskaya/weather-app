import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ForecastSummaryResponseType, MainType, WeatherType } from '../../common/types'
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
}

const initialState: InitialStateType = {
  weather: [],
  currentDate: '',
  currentTime: '',
  currentCity: '',
  main: {} as MainType
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
    },
  },
})
export const { setCurrentCity, setSummaryWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer