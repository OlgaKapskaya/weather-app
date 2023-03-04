import { HStack } from '@chakra-ui/react'
import { TempAndSon, TempAndSonPropsType } from './temp-and-sun/TempAndSon'
import { WindAndPressure, WindAndPressurePropsType } from './wind-and-pressure/WindAndPressure'
import { FC } from 'react'

type OtherInfoPropsType = TempAndSonPropsType & WindAndPressurePropsType
export const OtherInfo: FC<OtherInfoPropsType> = ({
                                                    sunset,
                                                    maxTemp,
                                                    minTemp,
                                                    sunrise,
                                                    pressure,
                                                    windSpeed,
                                                    visibility,
                                                    humidity,
                                                  }) => {

  return (
    <HStack justifyContent='space-between'>
      <TempAndSon maxTemp={maxTemp} minTemp={minTemp} sunrise={sunrise} sunset={sunset} />
      <WindAndPressure pressure={pressure} windSpeed={windSpeed} humidity={humidity} visibility={visibility} />
    </HStack>
  )
}