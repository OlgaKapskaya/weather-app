import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../../common/constants/path'
import { SummaryWeather } from '../../features/weather/summary-weather/SummaryWeather'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { appIsInitializedSelector } from '../../common/selectors/appSelectors'
import { Loader } from '../../common/components/loader/Loader'
import { DetailsWeather } from '../../features/weather/details-weather/DetailsWeather'

export const Pages = () => {
  const isInitialized = useAppSelector(appIsInitializedSelector)

  return (
    <Routes>
      <Route path='/' element={<Navigate to={PATH.CURRENT} />} />
      <Route path={PATH.CURRENT} element={
        isInitialized
          ? <SummaryWeather />
          : <Loader/>
        } />
        <Route path={PATH.CURRENT + '/' + PATH.DETAILS + '/:city'} element={<DetailsWeather />} />
        </Routes>
        )
      }
