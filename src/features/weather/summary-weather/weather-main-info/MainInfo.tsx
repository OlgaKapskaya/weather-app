import s from './MainInfo.module.css'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import {
  citySelector,
  currentTempSelector,
  dateSelector,
  feelTempSelector,
  timeSelector,
  weatherSelector,
} from '../../../../common/selectors/weatherSelectors'
import { SkeletonText, Text, VStack } from '@chakra-ui/react'
import { tempCalculation } from '../../../../common/helpers/tempCalculation'
import { appStatusSelector } from '../../../../common/selectors/appSelectors'

export const MainInfo = () => {
  const city = useAppSelector(citySelector)
  const time = useAppSelector(timeSelector)
  const date = useAppSelector(dateSelector)
  const currentTemp = useAppSelector(currentTempSelector)
  const feelTemp = useAppSelector(feelTempSelector)
  const weather = useAppSelector(weatherSelector)

  const status = useAppSelector(appStatusSelector)

  return (
    <>
      <div className={s.infoContainer}>
        <Text fontSize='5xl'>{city}</Text>
        <VStack align='end'>
          <Text fontSize='lg' marginTop='0'>{date} </Text>
          <Text fontSize='lg' marginTop='0'>{time} </Text>
        </VStack>
      </div>
      <div className={s.tempContainer}>
        <div className={s.currentTemp}>
          <SkeletonText isLoaded={status !== 'loading'}>
            <Text fontSize='7xl'>{tempCalculation(currentTemp)} °C</Text>
            <Text fontSize='lg'>Real feel: {tempCalculation(feelTemp)} °C</Text>
            <Text fontSize='md'>{weather[0] && weather[0].description}</Text>
          </SkeletonText>

        </div>
      </div>
    </>
  )
}