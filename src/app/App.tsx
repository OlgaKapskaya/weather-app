import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { Loader } from '../common/components/loader/Loader'
import { Notification } from '../common/components/notification/Notification'
import { appIsInitializedSelector } from '../common/selectors/appSelectors'
import { useNotification } from './hooks/useNotification'
import { Header } from './header/Header'
import { Pages } from './pages/Pages'
import { weatherAPI } from '../features/weather/weatherAPI'

function App() {
  const isInitialized = useAppSelector(appIsInitializedSelector)
  const { isVisible, onClose } = useNotification()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [])

  useEffect(() => {
    weatherAPI.getHourly('Minsk')
      .then(res => console.log(res))
  }, [])

  if (!isInitialized) {
    return <Loader />
  }

  return (
    <div className='App'>
      <Header />
      <Pages />
      <Notification isVisible={isVisible} onClose={onClose} />
    </div>
  )
}

export default App
