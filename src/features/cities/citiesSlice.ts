import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City, ICity } from 'country-state-city'
import { setAppInitialized, setAppMessage, setAppStatus } from '../../app/appSlice'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'
import { getSummaryWeather, setCurrentCity } from '../weather/weatherSlice'
import { AppRootStateType } from '../../app/store'

const initialState = {
  cities: [] as ICity[],
}

export const getCities = createAsyncThunk('cities/getCities', async (_, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = City.getAllCities()
    dispatch(setCities({ cities: res }))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorNetworkUtil(dispatch, e)
  } finally {
    dispatch(setAppInitialized(true))
  }
})
export const findCity = createAsyncThunk('cities/findCity', (city: string, { dispatch, getState }) => {
  dispatch(setAppStatus('loading'))
  const state = getState() as AppRootStateType
  try {
    const res = state.cities.cities.filter(elem => elem.name.toUpperCase() === city.toUpperCase())[0]
    // const res = state.cities.cities.filter(elem => elem.name.toUpperCase().startsWith(city.toUpperCase()))[0]
    if (res) {
      dispatch(saveCurrentCity(res.name))
      dispatch(getSummaryWeather(res.name))
      dispatch(setAppStatus('succeeded'))
    } else {
      dispatch(setAppStatus('failed'))
      dispatch(setAppMessage(`${city} not found, try again`))
    }
  } catch (e) {
    console.log(e)
    dispatch(setAppStatus('failed'))
  }
})
export const saveCurrentCity = createAsyncThunk('cities/saveCurrentCity', async (city: string, { dispatch}) => {
  const serializedState = JSON.stringify(city)
  localStorage.setItem("current-city", serializedState)
  dispatch(setCurrentCity({ city }))
})

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: initialState,
  reducers: {
    setCities: (state, action: PayloadAction<{ cities: ICity[] }>) => {
      state.cities = action.payload.cities
    },
  },
})

export const { setCities } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer