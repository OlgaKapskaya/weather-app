import { AppRootStateType } from '../../app/store'

export const weatherSelector = (state: AppRootStateType) => state.weather.weather
export const citySelector = (state: AppRootStateType) => state.weather.currentCity
export const timeSelector = (state: AppRootStateType) => state.weather.currentTime
export const dateSelector = (state: AppRootStateType) => state.weather.currentDate
export const mainSelector = (state: AppRootStateType) => state.weather.main

export const currentTempSelector = (state: AppRootStateType) => state.weather.main.temp
export const feelTempSelector = (state: AppRootStateType) => state.weather.main.feels_like
export const minTempSelector = (state: AppRootStateType) => state.weather.main.temp_min
export const maxTempSelector = (state: AppRootStateType) => state.weather.main.temp_max
export const pressureSelector = (state: AppRootStateType) => state.weather.main.pressure
export const humiditySelector = (state: AppRootStateType) => state.weather.main.humidity

export const sunriseSelector = (state: AppRootStateType) => state.weather.sunrise
export const sunsetSelector = (state: AppRootStateType) => state.weather.sunset

export const windSpeedSelector = (state: AppRootStateType) => state.weather.wind.speed
export const visibilitySelector = (state: AppRootStateType) => state.weather.visibility

export const forecastListSelector = (state: AppRootStateType) => state.weather.forecastList