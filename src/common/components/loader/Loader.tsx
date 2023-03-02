import { CircularProgress } from '@chakra-ui/react'
import s from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={s.container}>
      <CircularProgress isIndeterminate color='green.300' />
    </div>
  )
}