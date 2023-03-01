import { createSlice } from '@reduxjs/toolkit'
import { ForecastHourlyItemsType, ForecastSummaryItemsType, ForecastType, LocationType } from '../../common/types'
type InitialStateType = {
  location: LocationType,
  forecast: ForecastType<ForecastHourlyItemsType | ForecastSummaryItemsType>
}

const initialState: InitialStateType = {
  location: {} as LocationType,
  forecast: {} as ForecastType<ForecastHourlyItemsType>
}
export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {},
})
export const {} = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer