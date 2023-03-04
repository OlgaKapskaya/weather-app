import { Divider, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react'
import { BiDownArrowAlt, BiUpArrowAlt, WiSunrise, WiSunset } from 'react-icons/all'
import { tempCalculation } from '../../../../../common/helpers/tempCalculation'
import { FC } from 'react'
import { useAppSelector } from '../../../../../common/hooks/useAppSelector'
import { appStatusSelector } from '../../../../../common/selectors/appSelectors'

export type TempAndSonPropsType = {
  maxTemp: number
  minTemp: number
  sunrise?: string
  sunset?: string
}
export const TempAndSon: FC<TempAndSonPropsType> = ({ maxTemp, minTemp, sunset, sunrise }) => {
  const status = useAppSelector(appStatusSelector)

  return (
    <VStack align='start' width='50%' minHeight='100%' height='171px'>
      <HStack>
        <BiUpArrowAlt size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Max temp: {tempCalculation(maxTemp)} °C</Text>
        </SkeletonText>
      </HStack>
      <Divider />
      <HStack>
        <BiDownArrowAlt size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Min temp: {tempCalculation(minTemp)} °C</Text>
        </SkeletonText>
      </HStack>
      <Divider />
      {sunrise && <>
        <HStack>
          <WiSunrise size='30px' />
          <SkeletonText isLoaded={status !== 'loading'}>
            <Text fontSize='xl'>Sunrise: {sunrise}</Text>
          </SkeletonText>
        </HStack>
        <Divider />
      </>}
      {sunset &&
        <HStack>
          <WiSunset size='30px' />
          <SkeletonText isLoaded={status !== 'loading'}>
            <Text fontSize='xl'>Sunset: {sunset}</Text>
          </SkeletonText>
        </HStack>}

    </VStack>
  )
}