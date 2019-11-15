import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { lightGreen, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[600]
    },
    secondary: {
      main: lightGreen[500]
    }
  }
})

console.log(lightGreen)

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
