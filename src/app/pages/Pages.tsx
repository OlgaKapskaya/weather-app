import { Route, Routes } from 'react-router-dom'
import { PATH } from '../../common/constants/path'
import { SummaryWeather } from '../../features/weather/summary-weather/SummaryWeather'
import { ForecastHourly } from '../../features/weather/forecast-hourly/ForecastHourly'

export const Pages = () => {

  return (
    <Routes>
      <Route index path='/' element={<SummaryWeather />} />
      <Route path={PATH.DETAILS + '/:city'} element={<ForecastHourly />} />
    </Routes>
  )
}


