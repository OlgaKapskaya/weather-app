export type ForecastSummaryResponseType = {
  location: LocationType
  forecast: ForecastType<ForecastSummaryItemsType>
}
export type ForecastHourlyResponseType = {
  location: LocationType
  forecast: ForecastType<ForecastHourlyItemsType>
}

export type LocationType = {
  code: string
  timezone: string
  name: string
  coordinates: CoordinatesType
}
export type ForecastType<D> = {
  forecastDate: string
  nextUpdate: string
  source: string
  point: string
  fingerprint: string
  items: D[]
}

export type CoordinatesType = {
  latitude: number
  longitude: number
}
export type AstronomyType = {
  dawn: string
  sunrise: string
  suntransit: string
  sunset: string
  dusk: string
  moonrise: string
  moontransit: string
  moonset: string
  moonphase: number
  moonzodiac: number
}
export type SnowLineType = {
  avg: number
  min: number
  max: number
  unit: string
}
export type WindchillType = {
  avg: number
  min: number
  max: number
}
export type WindType = {
    unit: string
    direction: string
    avg: number
    min: number
    max: number
    text: string
    significationWind: boolean
    gusts: {
      value: number
      text: string
    }
}
export type TemperatureType = {
    min?: number
    max?: number
    avg: number
}
export type PrecType = {
    sum: number
    sumAsRain: number
    probability: number
    class: number
}
export type WeatherType = {
  state: number
  text: string
  icon: string
}

export type ForecastSummaryItemsType = {
  date: string
  dateWithTimezone: string
  freshSnow: number
  snowHeight: number
  sunHours: number
  rainHours: number
  weather: WeatherType
  prec: PrecType
  temperature: TemperatureType
  wind: WindType
  windchill: WindchillType
  snowLine: SnowLineType
  astronomy: AstronomyType
}
export type ForecastHourlyItemsType = {
  date: string
  freshSnow: number
  isNight: boolean
  period: number
  prec: PrecType
  pressure: number
  rainHours: string
  relativeHumidity: number
  snowLine: SnowLineType
  sunHours: string
  temperature: TemperatureType
  weather: WeatherType
  wind: WindType
  windchill: WindchillType
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'