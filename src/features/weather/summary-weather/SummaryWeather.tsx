import s from './SummaryWeather.module.css'
import { Divider, Stack } from '@chakra-ui/react'
import { MainInfo } from './weather-main-info/MainInfo'
import { OtherInfo } from './weather-other-info/OtherInfo'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { getStartWeather } from '../weatherSlice'

export const SummaryWeather = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStartWeather())
  }, [])

  return (
    <div className={s.weatherContainer}>
      <Stack spacing={3} className={s.stack}>
        <MainInfo />
        <Divider />
        <OtherInfo />
        {/*{weather[0] && <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt='weather icon'/>}*/}
      </Stack>

    </div>
  )
}