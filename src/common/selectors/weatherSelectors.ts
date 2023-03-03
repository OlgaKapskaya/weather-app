import { AppRootStateType } from '../../app/store'

export const weatherSelector = (state: AppRootStateType) => state.weather.weather
export const citySelector = (state: AppRootStateType) => state.weather.currentCity
export const mainSelector = (state: AppRootStateType) => state.weather.main