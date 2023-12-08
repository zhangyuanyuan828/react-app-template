import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@mantine/core/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withCssVariables defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
