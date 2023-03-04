export type ForecastSummaryResponseType = {
  base: string
  clouds: CloudsType
  cod: number
  coord: CoordType
  dt: number //timestamp
  id: number
  main: MainType
  name: string
  sys: SysType
  timezone: number
  visibility: number
  wind: WindType
  weather: WeatherType[]
}
export type ForecastHourlyResponseType = {

}

export type CoordType = {
  lat: number
  lon: number
}
export type CloudsType = {
  all: number
}
export type MainType = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_max: number
  temp_min: number
}
export type SysType = {
  country: string
  id: number
  sunrise: number //timestamp
  sunset: number //timestamp
  type: number
}
export type WindType = {
  deg: number
  gust: number
  speed: number
}
export type WeatherType = {
  description: string
  icon: string
  id: number
  main: string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type SysStateType = Omit<SysType, 'sunrise' | 'sunset'> & {
  sunrise: string //timestamp
  sunset: string //timestamp
}

