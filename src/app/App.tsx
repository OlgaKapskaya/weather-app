import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { Pages } from './pages/Pages'
import { Progress } from '@chakra-ui/react'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { appStatusSelector } from '../common/selectors/appSelectors'
import { getStartWeather } from '../features/weather/weatherSlice'


function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(appStatusSelector)


  useEffect(() => {
    dispatch(getCities())
    dispatch(getStartWeather())
  }, [])

  return (
    <div className='App'>
      {status === 'loading' && <Progress size='xs' isIndeterminate />}
      <Pages />
    </div>
  )
}

export default App
