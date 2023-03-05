import s from '../ForecastHourly.module.css'
import { Button, HStack, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { PATH } from '../../../../common/constants/path'

export const ForecastHourlyHeader = () => {
  const { city } = useParams<{ city: string }>()
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(`/${PATH.CURRENT}`)
  }
  return (
    <HStack className={s.header}>
      <Text fontSize='4xl'> Hourly forecast: <Text as='b'>{city}</Text></Text>
      <Button leftIcon={<ArrowBackIcon />} onClick={onClickHandler}> Back </Button>
    </HStack>
  )
}