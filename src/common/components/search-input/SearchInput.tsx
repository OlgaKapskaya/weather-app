import { Button, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { SearchIcon } from '@chakra-ui/icons'
import s from '../../../features/cities/Cities.module.css'
import { ICity } from 'country-state-city'

type SearchInputPropsType = {
  label?: string
  searchValue: string
  onChangeText?: (value: string) => void
  disabled?: boolean
  placeholder?: string
  options?: ICity[]
  onClickOption?: (value: string) => void
}

export const SearchInput: FC<SearchInputPropsType> = memo(({
                                                             label,
                                                             searchValue,
                                                             onChangeText,
                                                             disabled,
                                                             placeholder,
                                                             options,
                                                             onClickOption,
                                                           }) => {
  const [value, setValue] = useState(searchValue)
  const debouncedValue = useDebounce(value, 500)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onClickOptionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //@ts-ignore
    onClickOption?.(e.target.innerText)
    setValue('')
  }

  useEffect(() => {
    if (value === searchValue) return
    setValue(searchValue)
  }, [searchValue])

  useEffect(() => {
    onChangeText?.(debouncedValue)
  }, [debouncedValue])

  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input onChange={onChangeHandler} value={value} disabled={disabled} placeholder={placeholder} />
        <InputRightElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
      </InputGroup>
      {
        options && options?.length > 0 &&
        <VStack className={s.container}>
          {
            options.map(elem => <Button colorScheme='blue'
                                        key={elem.latitude}
                                        onClick={onClickOptionHandler}
                                        className={s.searchButton}>
              {`${elem.name}, ${elem.countryCode}`}
            </Button>)
          }
        </VStack>
      }
    </>
  )
})