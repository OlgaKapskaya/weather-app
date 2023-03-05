import './App.css'
import React, { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
// import { Pages } from './pages/Pages'
import { Progress } from '@chakra-ui/react'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { appStatusSelector } from '../common/selectors/appSelectors'
import { getStartWeather } from '../features/weather/weatherSlice'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNotification } from './hooks/useNotification'
import { Pages } from './pages/Pages'


function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(appStatusSelector)
  const { message, notify } = useNotification()

  if (message) notify()

  useEffect(() => {
    dispatch(getCities())
    dispatch(getStartWeather())
  }, [])

  return (
    <div className='App'>
      {status === 'loading' && <Progress size='xs' isIndeterminate />}
      <Pages />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
