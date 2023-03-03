import { useAppSelector } from '../../hooks/useAppSelector'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react'
import { FC } from 'react'
import { appMessageSelector, appStatusSelector } from '../../selectors/appSelectors'

type NotificationPropsType = {
  isVisible: boolean
  onClose: () => void
}
export const Notification: FC<NotificationPropsType> = ({ isVisible, onClose }) => {
  const message = useAppSelector(appMessageSelector)
  const status = useAppSelector(appStatusSelector)

  const alertStatus = status === 'failed' ? 'error' : 'success'

  setTimeout(onClose, 9000)

  return (
    isVisible ?
      <Alert status={alertStatus} style={{width: '300px'}}>
        <AlertIcon />
        <Box>
          <AlertTitle>{alertStatus.toUpperCase()}!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
      : <></>
  )
}