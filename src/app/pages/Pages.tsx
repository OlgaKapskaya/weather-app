import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../../common/constants/path'
import { SummaryWeather } from '../../features/weather/summary-weather/SummaryWeather'
import { DetailsWeather } from '../../features/weather/details-weather/DetailsWeather'

export const Pages = () => {


  return (
    <Routes>
      <Route path='/' element={<Navigate to={PATH.CURRENT} />} />
      <Route path={PATH.CURRENT} element={<SummaryWeather />} />
      <Route path={PATH.CURRENT + '/' + PATH.DETAILS + '/:city'} element={<DetailsWeather />} />
    </Routes>
  )
}
