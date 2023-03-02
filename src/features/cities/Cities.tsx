import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { SearchInput } from '../../common/components/search-input/SearchInput'
import { findCity } from './citiesSlice'



export const Cities = () => {
  const status = useAppSelector(state => state.app.status)
  const isLoading = status === "loading"

  const dispatch = useAppDispatch()

  const searchCity = (text: string) => {
    if (text.trim() !== "") {
      dispatch(findCity(text))
    }
  }


  return (
    <>
      <SearchInput searchValue="" onChangeText={searchCity} disabled={isLoading}/>
    </>
  )
}

