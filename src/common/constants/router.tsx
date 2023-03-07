import { createHashRouter, RouteObject } from 'react-router-dom'

import App from '../../app/App'
import { PATH } from './path'
import { SummaryWeather } from '../../features/weather/summary-weather/SummaryWeather'
import { ForecastHourly } from '../../features/weather/forecast-hourly/ForecastHourly'

const routes: RouteObject[] = [{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <SummaryWeather />,
    },
    {
      path: PATH.DETAILS + '/:city',
      element: <ForecastHourly />,
    },
  ],
}]
export const router = createHashRouter(routes)