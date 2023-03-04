import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineEye, WiBarometer, WiHumidity, WiStrongWind } from 'react-icons/all'
import { FC } from 'react'

export type WindAndPressurePropsType = {
  pressure: number
  humidity: number
  windSpeed: number
  visibility: number
}
export const WindAndPressure: FC<WindAndPressurePropsType> = ({ pressure, windSpeed, visibility, humidity }) => {

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