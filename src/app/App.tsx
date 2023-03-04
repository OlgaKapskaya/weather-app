import './App.css'
import { useEffect } from 'react'
import { getCities } from '../features/cities/citiesSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { Notification } from '../common/components/notification/Notification'
import { useNotification } from './hooks/useNotification'
import { Header } from './header/Header'
import { Pages } from './pages/Pages'

function App() {
  const { isVisible, onClose } = useNotification()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [])

  return (
    <div className='App'>
      <Header />
      <Pages />
      <Notification isVisible={isVisible} onClose={onClose} />
    </div>
  )
}

export default App
