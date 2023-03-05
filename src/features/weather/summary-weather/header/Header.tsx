import s from '../SummaryWeather.module.css'
import { Cities } from '../../../cities/Cities'
import { Center, Divider, IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={s.header}>
      <Cities />

      <Center height='40px'>
        <Divider orientation='vertical' />
      </Center>
      <Tooltip hasArrow label='Change color mode'>
        <IconButton aria-label='Set theme'
                    variant='outline'
                    onClick={toggleColorMode}
                    icon={colorMode === 'dark' ? <SunIcon color='gray.300' /> : <MoonIcon color='gray.500' />} />
      </Tooltip>
    </div>
  )
}