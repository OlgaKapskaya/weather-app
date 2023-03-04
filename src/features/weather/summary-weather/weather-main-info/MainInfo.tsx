import s from './MainInfo.module.css'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import {
  citySelector, currentTempSelector, dateSelector, feelTempSelector,
  mainSelector,
  timeSelector,
  weatherSelector,
} from '../../../../common/selectors/weatherSelectors'
import { Text } from '@chakra-ui/react'
import { tempCalculation } from '../../../../common/helpers/tempCalculation'

export const MainInfo = () => {
  const city = useAppSelector(citySelector)
  const time = useAppSelector(timeSelector)
  const date = useAppSelector(dateSelector)
  const currentTemp = useAppSelector(currentTempSelector)
  const feelTemp = useAppSelector(feelTempSelector)
  const weather = useAppSelector(weatherSelector)

  return (
    <>
      <div className={s.infoContainer}>
        <Text fontSize='5xl'>{city}</Text>
        <div>
          <Text fontSize='lg' marginTop='0'>{date} </Text>
          <Text fontSize='lg' marginTop='0'>{time} </Text>
        </div>
      </div>
      <div className={s.tempContainer}>
        <div className={s.currentTemp}>
          <Text fontSize='7xl'>{tempCalculation(currentTemp)} °C</Text>
          <Text fontSize='lg'>RealFeel {tempCalculation(feelTemp)} °C</Text>
          <Text fontSize='md'>{weather[0] && weather[0].description}</Text>
        </div>
      </div>
    </>
  )
}