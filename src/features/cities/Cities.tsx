import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { SearchInput } from '../../common/components/search-input/SearchInput'
import { chooseCity, findCity, setSearchCities } from './citiesSlice'
import { appStatusSelector } from '../../common/selectors/appSelectors'
import React from 'react'
import { searchCitiesSelector } from '../../common/selectors/citySelectors'


export const Cities = () => {
  const searchCities = useAppSelector(searchCitiesSelector)
  const status = useAppSelector(appStatusSelector)
  const isLoading = status === 'loading'

  const dispatch = useAppDispatch()

  const searchCity = (text: string) => {
    if (text.trim() !== '') {
      dispatch(findCity(text))
    }
  }

  const chooseCityHandler = (city: string) => {
    dispatch(chooseCity(city))
    dispatch(setSearchCities({ cities: [] }))
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SearchInput searchValue=''
                   onChangeText={searchCity}
                   disabled={isLoading}
                   placeholder='Enter city...'
                   options={searchCities}
                   onClickOption={chooseCityHandler} />
    </div>
  )
}

