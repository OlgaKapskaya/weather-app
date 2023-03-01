import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from '../features/weather/weatherSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>