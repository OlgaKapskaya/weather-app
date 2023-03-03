import s from './SummaryWeather.module.css'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { citySelector, mainSelector, weatherSelector } from '../../../common/selectors/weatherSelectors'
import { Stack, Text } from '@chakra-ui/react'
import { tempCalculation } from '../../../common/helpers/tempCalculation'

export const SummaryWeather = () => {
  const weather = useAppSelector(weatherSelector)
  const city = useAppSelector(citySelector)
  const main = useAppSelector(mainSelector)
  const time = useAppSelector(state => state.weather.currentTime)



  return (
    <div className={s.weatherContainer}>
      <Stack spacing={3} alignItems='center'>
        <Text fontSize='5xl'>{city}</Text>
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt='weather icon'/>
        <Text fontSize='lg'>Time: {time} </Text>

        <Text fontSize='6xl'>{tempCalculation(main.temp)} °C</Text>
        <Text fontSize='lg'>RealFeel {tempCalculation(main.feels_like)} °C</Text>
        <Text fontSize='md'>{weather[0] && weather[0].description}</Text>
      </Stack>

    </div>
  )
}