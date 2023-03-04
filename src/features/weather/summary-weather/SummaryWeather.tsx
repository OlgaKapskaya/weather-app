import s from './SummaryWeather.module.css'
import { Button, Divider, Stack } from '@chakra-ui/react'
import { MainInfo } from './weather-main-info/MainInfo'
import { OtherInfo } from './weather-other-info/OtherInfo'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { getStartWeather } from '../weatherSlice'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../common/constants/path'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import {
  citySelector,
  humiditySelector,
  maxTempSelector,
  minTempSelector,
  pressureSelector,
  sunriseSelector,
  sunsetSelector,
  visibilitySelector,
  windSpeedSelector,
} from '../../../common/selectors/weatherSelectors'

export const SummaryWeather = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const maxTemp = useAppSelector(maxTempSelector)
  const minTemp = useAppSelector(minTempSelector)
  const sunrise = useAppSelector(sunriseSelector)
  const sunset = useAppSelector(sunsetSelector)
  const pressure = useAppSelector(pressureSelector)
  const humidity = useAppSelector(humiditySelector)
  const windSpeed = useAppSelector(windSpeedSelector)
  const visibility = useAppSelector(visibilitySelector)

  const city = useAppSelector(citySelector)

  useEffect(() => {
    dispatch(getStartWeather())
  }, [])

  const onShowHourlyForecast = () => {
    navigate(PATH.DETAILS + `/${city}`)
  }

  return (
    <div className={s.weatherContainer}>

      <Stack spacing={3} className={s.stack}>
        <MainInfo />
        <Button onClick={onShowHourlyForecast}> Show hourly forecast </Button>
        <Divider />
        <OtherInfo sunset={sunset}
                   sunrise={sunrise}
                   maxTemp={maxTemp}
                   minTemp={minTemp}
                   pressure={pressure}
                   visibility={visibility}
                   windSpeed={windSpeed}
                   humidity={humidity}
        />
      </Stack>

    </div>
  )
}