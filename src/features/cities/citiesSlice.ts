import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City, ICity } from 'country-state-city'
import { setAppMessage, setAppStatus } from '../../app/appSlice'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'
import { getSummaryWeather, setCurrentCity } from '../weather/weatherSlice'
import { AppRootStateType } from '../../app/store'
import { setToLocalStorage } from '../../common/utils/setToLocalStorage'

const initialState = {
  cities: [] as ICity[],
  searchCities: [] as ICity[],
}

export const getCities = createAsyncThunk('cities/getCities', async (_, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = City.getAllCities()
    dispatch(setCities({ cities: res }))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorNetworkUtil(dispatch, e)
  }
})
export const findCity = createAsyncThunk('cities/findCity', (city: string, { dispatch, getState }) => {
  dispatch(setAppStatus('loading'))
  const state = getState() as AppRootStateType
  try {
    const res = state.cities.cities.filter(elem => elem.name.toUpperCase().startsWith(city.toUpperCase()))
    if (res.length > 0) {
      dispatch(setSearchCities({ cities: res }))
      dispatch(setAppStatus('succeeded'))
    } else {
      dispatch(setAppStatus('failed'))
      dispatch(setAppMessage(`City "${city}" not found, try again`))
    }
  } catch (e) {
    console.log(e)
    dispatch(setAppStatus('failed'))
  }
})

export const chooseCity = createAsyncThunk('cities/chooseCity', (city: string, { dispatch }) => {
  dispatch(setAppStatus('loading'))
  try {
    dispatch(saveCurrentCity(city))
    dispatch(getSummaryWeather(city))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    console.log(e)
    dispatch(setAppStatus('failed'))
  }
})

export const saveCurrentCity = createAsyncThunk('cities/saveCurrentCity', async (city: string, { dispatch }) => {
  setToLocalStorage(city, 'current-city')
  dispatch(setCurrentCity({ city }))
})

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: initialState,
  reducers: {
    setCities: (state, action: PayloadAction<{ cities: ICity[] }>) => {
      state.cities = action.payload.cities
    },
    setSearchCities: (state, action: PayloadAction<{ cities: ICity[] }>) => {
      state.searchCities = action.payload.cities
    },
  },
})

export const { setCities, setSearchCities } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer