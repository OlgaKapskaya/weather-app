import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { Pages } from './pages/Pages'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [])

  return (
    <div className='App'>
      <Pages />
    </div>
  )
}

export default App
