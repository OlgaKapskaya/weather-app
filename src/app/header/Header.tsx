import s from './Header.module.css'
import { Cities } from '../../features/cities/Cities'
import { Center, Divider, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header className={s.basicHeader}>
      <Cities />

      <Center height='50px'>
        <Divider orientation='vertical' />
      </Center>
      <IconButton aria-label='Set theme'
                  variant='outline'
                  onClick={toggleColorMode}
                  icon={colorMode === 'dark' ? <SunIcon color='gray.300' /> : <MoonIcon color='gray.500' />} />
    </header>
  )
}