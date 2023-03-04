import { Divider, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react'
import { AiOutlineEye, WiBarometer, WiHumidity, WiStrongWind } from 'react-icons/all'
import { FC } from 'react'
import { useAppSelector } from '../../../../../common/hooks/useAppSelector'
import { appStatusSelector } from '../../../../../common/selectors/appSelectors'

export type WindAndPressurePropsType = {
  pressure: number
  humidity: number
  windSpeed: number
  visibility: number
}
export const WindAndPressure: FC<WindAndPressurePropsType> = ({ pressure, windSpeed, visibility, humidity }) => {
  const status = useAppSelector(appStatusSelector)

  return (
    <VStack align='start' width='50%'>
      <HStack>
        <WiBarometer size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Pressure: {pressure} mb</Text>
        </SkeletonText>
      </HStack>
      <Divider />
      <HStack>
        <WiHumidity size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Humidity: {humidity} %</Text>
        </SkeletonText>
      </HStack>
      <Divider />
      <HStack>
        <WiStrongWind size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Wind speed: {windSpeed} km/h</Text>
        </SkeletonText>
      </HStack>
      <Divider />
      <HStack>
        <AiOutlineEye size='30px' />
        <SkeletonText isLoaded={status !== 'loading'}>
          <Text fontSize='xl'>Visibility: {visibility / 1000} km</Text>
        </SkeletonText>
      </HStack>
    </VStack>
  )
}