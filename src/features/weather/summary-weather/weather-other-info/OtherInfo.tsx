import { HStack } from '@chakra-ui/react'
import { TempAndSon } from './temp-and-sun/TempAndSon'
import { WindAndPressure } from './wind-and-pressure/WindAndPressure'

export const OtherInfo = () => {

  return (
    <HStack justifyContent='space-between'>
      <TempAndSon/>
      <WindAndPressure/>
    </HStack>
  )
}