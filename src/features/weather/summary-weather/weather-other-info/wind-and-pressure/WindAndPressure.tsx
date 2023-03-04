import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineEye, WiBarometer, WiHumidity, WiStrongWind } from 'react-icons/all'
import { useAppSelector } from '../../../../../common/hooks/useAppSelector'
import {
  humiditySelector,
  pressureSelector,
  visibilitySelector,
  windSpeedSelector,
} from '../../../../../common/selectors/weatherSelectors'

export const WindAndPressure = () => {
  const pressure = useAppSelector(pressureSelector)
  const humidity = useAppSelector(humiditySelector)
  const windSpeed = useAppSelector(windSpeedSelector)
  const visibility = useAppSelector(visibilitySelector)
  return (
    <VStack align='start' width='50%'>
      <HStack>
        <WiBarometer size='30px' />
        <Text fontSize='xl'>Pressure: {pressure} mb</Text>
      </HStack>
      <Divider />
      <HStack>
        <WiHumidity size='30px' />
        <Text fontSize='xl'>Humidity: {humidity} %</Text>
      </HStack>
      <Divider />
      <HStack>
        <WiStrongWind size='30px' />
        <Text fontSize='xl'>Wind speed: {windSpeed} km/h</Text>
      </HStack>
      <Divider />
      <HStack>
        <AiOutlineEye size='30px' />
        <Text fontSize='xl'>Visibility: {visibility / 1000} km</Text>
      </HStack>
    </VStack>
  )
}