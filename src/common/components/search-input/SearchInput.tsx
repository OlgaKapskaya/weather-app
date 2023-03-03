import { FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { SearchIcon } from '@chakra-ui/icons'

type SearchInputPropsType = {
  label?: string
  searchValue: string
  onChangeText?: (value: string) => void
  disabled?: boolean
}

export const SearchInput: FC<SearchInputPropsType> = ({ label, searchValue, onChangeText, disabled }) => {
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
      <InputGroup>
        <Input onChange={onChangeHandler} value={value} disabled={disabled} />
        <InputRightElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
      </InputGroup>
    </FormControl>
  )
}