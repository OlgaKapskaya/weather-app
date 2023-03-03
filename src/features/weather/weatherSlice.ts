import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeatherType } from '../../common/types'
import { setAppStatus } from '../../app/appSlice'
import { weatherAPI } from './weatherAPI'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'
import dayjs from 'dayjs'

type InitialStateType = {
  weather: WeatherType[]
  currentDate: string
  currentCity: string
}

const initialState: InitialStateType = {
  weather: [],
  currentDate: '',
  currentCity: '',
}

export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
  async (location: string, { dispatch }) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await weatherAPI.getSummary(location)
      const date = dayjs.unix(res.data.dt).format('DD.MM.YYYY')

      dispatch(setWeather({ weather: res.data.weather }))
      dispatch(setCurrentDate({ date }))
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
    setWeather: (state, action: PayloadAction<{ weather: WeatherType[] }>) => {
      state.weather = action.payload.weather
    },
    setCurrentDate: (state, action: PayloadAction<{ date: string }>) => {
      state.currentDate = action.payload.date
    },
  },
})
export const { setCurrentCity, setCurrentDate, setWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer