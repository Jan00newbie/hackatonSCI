import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import AuthProvider from './context/auth/AuthState'
import AlertProvider from './context/alert/AlertState'

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <AlertProvider>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </AlertProvider>
  ,
  document.querySelector('#root'))