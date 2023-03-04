import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { BiDownArrowAlt, BiUpArrowAlt, WiSunrise, WiSunset } from 'react-icons/all'
import { tempCalculation } from '../../../../../common/helpers/tempCalculation'
import { FC } from 'react'

export type TempAndSonPropsType = {
  maxTemp: number
  minTemp: number
  sunrise: string
  sunset: string
}
export const TempAndSon: FC<TempAndSonPropsType> = ({ maxTemp, minTemp, sunset, sunrise }) => {

  return (
    <VStack align='start' width='50%'>
      <HStack>
        <BiUpArrowAlt size='30px' />
        <Text fontSize='xl'>Max temp: {tempCalculation(maxTemp)} °C</Text>
      </HStack>
      <Divider />
      <HStack>
        <BiDownArrowAlt size='30px' />
        <Text fontSize='xl'>Min temp: {tempCalculation(minTemp)} °C</Text>
      </HStack>
      <Divider />
      <HStack>
        <WiSunrise size='30px' />
        <Text fontSize='xl'>Sunrise: {sunrise}</Text>
      </HStack>
      <Divider />
      <HStack>
        <WiSunset size='30px' />
        <Text fontSize='xl'>Sunset: {sunset}</Text>
      </HStack>
    </VStack>
  )
}