import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './common/constants/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './common/constants/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>,
)
