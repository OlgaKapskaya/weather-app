import s from './SummaryWeather.module.css'
import { Divider, Stack } from '@chakra-ui/react'
import { MainInfo } from './weather-main-info/MainInfo'
import { OtherInfo } from './weather-other-info/OtherInfo'

export const SummaryWeather = () => {

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