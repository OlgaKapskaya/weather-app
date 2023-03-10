import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './common/constants/theme'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </Provider>,
)
