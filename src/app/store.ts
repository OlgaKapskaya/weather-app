import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { weatherReducer } from '../features/weather/weatherSlice'
import { appReducer } from './appSlice'
import { citiesReducer } from '../features/cities/citiesSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    weather: weatherReducer,
    cities: citiesReducer
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>