import { Text, VStack } from '@chakra-ui/react'
import s from '../ForecastHourlyCard.module.css'
import { tempCalculation } from '../../../../../common/helpers/tempCalculation'
import { FC } from 'react'

type HourlyMainInfoPropsType = {
  currentDate: string
  currentTime: string
  icon: string
  temp: number
  feels_like: number
  description: string
}
export const HourlyMainInfo: FC<HourlyMainInfoPropsType> = ({
                                                              currentDate,
                                                              currentTime,
                                                              temp,
                                                              icon,
                                                              feels_like,
                                                              description,
                                                            }) => {
  return (
    <>
      <VStack alignItems='flex-start'>
        <Text as='b'> {currentDate} </Text>
        <Text as='b'> {currentTime}</Text>
      </VStack>

      <VStack className={s.container}>
        <div className={s.weather}>
          <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='weather icon' />
          <Text as='b' fontSize='2xl'> {tempCalculation(temp)} °C</Text>
        </div>
        <div> {description} </div>
      </VStack>

      <VStack>
        <Text> Real feel: {tempCalculation(feels_like)} °C</Text>
      </VStack>
    </>
  )
}