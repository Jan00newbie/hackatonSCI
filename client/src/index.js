import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { lightGreen, red } from '@material-ui/core/colors'

import AuthProvider from './context/auth/AuthState'
import AlertProvider from './context/alert/AlertState'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[600],
      dark: red[800]
    },
    secondary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700]
    }
  }
})

render(

  <AlertProvider>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AuthProvider>
  </AlertProvider>,
  document.getElementById('root')
)
