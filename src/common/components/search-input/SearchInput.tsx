import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

type SearchInputPropsType = {
  label?: string
  searchValue: string
  onChangeText?: (value: string) => void
  disabled?: boolean
}

export const SearchInput:FC<SearchInputPropsType> = ({label, searchValue, onChangeText, disabled}) => {
  const [value, setValue] = useState(searchValue)
  const debouncedValue = useDebounce(value, 500)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  useEffect(() => {
    if (value === searchValue) return
    setValue(searchValue)
  }, [searchValue])

  useEffect(() => {
    onChangeText?.(debouncedValue)
  }, [debouncedValue])

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input onChange={onChangeHandler} value={value} disabled={disabled}/>
    </FormControl>
  )
}