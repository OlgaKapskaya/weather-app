import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'

function App() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCities())
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App
