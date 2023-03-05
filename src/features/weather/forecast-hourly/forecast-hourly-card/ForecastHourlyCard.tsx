import { ListType } from '../../../../common/types'
import { FC } from 'react'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { HourlyMainInfo } from './hourly-main-info/HourlyMainInfo'
import { OtherInfo } from '../../summary-weather/weather-other-info/OtherInfo'

type ForecastHourlyCardPropsType = {
  item: ListType
}
export const ForecastHourlyCard: FC<ForecastHourlyCardPropsType> = ({ item }) => {
  const currentTime = dayjs.unix(item.dt).format('HH:mm')
  const currentDate = dayjs.unix(item.dt).format('DD.MM.YYYY')

  return (
    <AccordionItem>
      <AccordionButton>
        <HourlyMainInfo currentDate={currentDate}
                        currentTime={currentTime}
                        icon={item.weather[0].icon}
                        description={item.weather[0].description}
                        temp={item.main.temp}
                        feels_like={item.main.feels_like}
        />
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <OtherInfo
                   maxTemp={item.main.temp_max}
                   minTemp={item.main.temp_min}
                   pressure={item.main.pressure}
                   visibility={item.visibility}
                   windSpeed={item.wind.speed}
                   humidity={item.main.humidity}
        />
      </AccordionPanel>
    </AccordionItem>

  )
}