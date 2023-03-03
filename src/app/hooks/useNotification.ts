import { useAppSelector } from '../../common/hooks/useAppSelector'
import { appMessageSelector } from '../../common/selectors/appSelectors'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'

export const useNotification = () => {
  const message = useAppSelector(appMessageSelector)

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  useEffect(() => {
    if (message !== null) onOpen()
  }, [message])

  return { isVisible, onClose }
}