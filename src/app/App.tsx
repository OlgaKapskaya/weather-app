import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { Cities } from '../features/cities/Cities'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { Loader } from '../common/components/loader/Loader'
import { weatherAPI } from '../features/weather/weatherAPI'

function App() {
  const isInitialized = useAppSelector(state => state.app.isInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCities())

    weatherAPI.getSummary('Minsk')
      .then(res => console.log(res))
  }, [])

  if (!isInitialized) {
    return <Loader />
  }

  return (
    <div className='App'>
      <Cities />
    </div>
  )
}

export default App
