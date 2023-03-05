import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { SearchInput } from '../../common/components/search-input/SearchInput'
import { chooseCity, findCity, setSearchCities } from './citiesSlice'
import { appStatusSelector } from '../../common/selectors/appSelectors'
import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { searchCitiesSelector } from '../../common/selectors/citySelectors'
import s from './Cities.module.css'


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

  const chooseCityHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //@ts-ignore
    dispatch(chooseCity(e.target.innerText))
    dispatch(setSearchCities({cities: []}))
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SearchInput searchValue=''
                   onChangeText={searchCity}
                   disabled={isLoading}
                   label='Search city' />

      {
        searchCities &&
        <VStack className={s.container}>
          {
            searchCities.map(elem => <Button colorScheme='blue' onClick={chooseCityHandler} className={s.searchButton}>{elem.name}</Button>)
          }
        </VStack>
      }
    </div>
  )
}

