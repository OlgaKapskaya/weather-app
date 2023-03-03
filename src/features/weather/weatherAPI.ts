import { instance } from '../../common/constants/instance'
import { ForecastHourlyResponseType, ForecastSummaryResponseType } from '../../common/types'

export const weatherAPI = {
  getSummary(location: string) {
    return instance.get<ForecastSummaryResponseType>(`weather?q=${location}&appid=d8b8feb797d8d7246525255551517358`)
  },
  getHourly(location: string) {
    return instance.get(`forecast?q=${location}&appid=d8b8feb797d8d7246525255551517358`)
  }
}