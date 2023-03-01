import { instance } from '../../common/constants/instance'
import { ForecastHourlyResponseType, ForecastSummaryResponseType } from '../../common/types'

export const weatherAPI = {
  getSummary(location: string) {
    return instance.get<ForecastSummaryResponseType>(`${location}/summary/`)
  },
  getHourly(location: string) {
    return instance.get<ForecastHourlyResponseType>(`${location}/hourly/`)
  }
}