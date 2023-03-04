import { Accordion, Button, HStack } from '@chakra-ui/react'
import x from '../summary-weather/SummaryWeather.module.css'
import s from './DetailsWeather.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { getHourlyForecast } from '../weatherSlice'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { forecastListSelector } from '../../../common/selectors/weatherSelectors'
import { ForecastHourlyCard } from './forecast-hourly-card/ForecastHourlyCard'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const DetailsWeather = () => {
  const { city } = useParams<{ city: string }>()
  const forecastList = useAppSelector(forecastListSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (city)
      dispatch(getHourlyForecast(city))
  }, [])

  const onClickHandler = () => {
    navigate('/')
  }

  return (
    <div className={x.weatherContainer}>
      <HStack spacing={3} className={s.stack}>
        <Button leftIcon={<ArrowBackIcon/>} onClick={onClickHandler}> Back </Button>
        <Accordion defaultIndex={[0]} width='100%' allowMultiple>
        {
          forecastList.map(elem => <ForecastHourlyCard item={elem} />)
        }
        </Accordion>
      </HStack>
    </div>
  )
}