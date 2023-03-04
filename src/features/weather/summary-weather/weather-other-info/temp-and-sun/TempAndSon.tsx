import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { BiDownArrowAlt, BiUpArrowAlt, WiSunrise, WiSunset } from 'react-icons/all'
import { tempCalculation } from '../../../../../common/helpers/tempCalculation'
import { useAppSelector } from '../../../../../common/hooks/useAppSelector'
import {
  maxTempSelector,
  minTempSelector,
  sunriseSelector,
  sunsetSelector,
} from '../../../../../common/selectors/weatherSelectors'

export const TempAndSon = () => {
  const maxTemp = useAppSelector(maxTempSelector)
  const minTemp = useAppSelector(minTempSelector)
  const sunrise = useAppSelector(sunriseSelector)
  const sunset = useAppSelector(sunsetSelector)

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