import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ForecastHourlyItemsType, ForecastSummaryItemsType, ForecastType, LocationType } from '../../common/types'
type InitialStateType = {
  location: LocationType,
  forecast: ForecastType<ForecastHourlyItemsType | ForecastSummaryItemsType>
  currentCity: string
}

const initialState: InitialStateType = {
  location: {} as LocationType,
  forecast: {} as ForecastType<ForecastHourlyItemsType>,
  currentCity: ""
}
export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<{ city: string}>) => {
      state.currentCity = action.payload.city
    },
  },
})
export const {setCurrentCity} = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer