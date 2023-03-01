import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City, ICity } from 'country-state-city'
import { setAppStatus } from '../../app/appSlice'
import { errorNetworkUtil } from '../../common/utils/networkErrorUtil'

const initialState = {
  cities: [] as ICity[],
}

export const getCities = createAsyncThunk('cities/getCities', async (_, { dispatch}) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = City.getAllCities()
    dispatch(setCities({cities: res}))
    dispatch(setAppStatus('succeeded'))
  }
  catch (e) {
    errorNetworkUtil(dispatch, e)
  }
})

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: initialState,
  reducers: {
    setCities: (state, action: PayloadAction<{ cities: ICity[]}>) => {
        state.cities = action.payload.cities
    },
  },
})

export const { setCities } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer