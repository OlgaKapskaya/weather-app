import { useAppSelector } from '../../common/hooks/useAppSelector'
import { appMessageSelector } from '../../common/selectors/appSelectors'
import { useColorMode } from '@chakra-ui/react'
import { toast } from 'react-toastify'
import { setAppMessage } from '../appSlice'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'

export const useNotification = () => {
  const dispatch = useAppDispatch()
  const message = useAppSelector(appMessageSelector)

  const { colorMode } = useColorMode()

  const notify = () => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      theme: colorMode,
    })
    dispatch(setAppMessage(null))
  }

  return { message, notify }
}