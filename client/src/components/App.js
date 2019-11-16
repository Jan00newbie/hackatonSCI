import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toolbar, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from './AppBar'
import Home from './Home'
import Events from './Events'
import NewEvent from './NewEvent'
import About from './About'
import LoginComponent from './LoginForm'
import RegisterComponent from './RegisterForm'
import AuthForm from './AuthForm'
import { AlertsList } from './Alerts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh'
  },
  svg: {
    width: '100%',
    height: '446px'
  },
  container: {
    width: '100%'
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  modal: {
    maxWidth: '500px',
    maxHeight: '600px',
    backgroundColor: 'white',
    padding: theme.spacing(3)
  },
  svgImage: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    zIndex: '1'
  }
}))

export default () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)

  const loginModalOpen = () => {
    setModal('login')
  }

  const registerModalOpen = () => {
    setModal('register')
  }

  const modalClose = () => {
    setModal(false)
  }

  const modalSwap = () => {
    if (modal === 'register') {
      modalClose()
      loginModalOpen()
    } else if (modal === 'login') {
      modalClose()
      registerModalOpen()
    }
  }

  return (
    <Router>
      <CssBaseline />
      <AppBar
        modalControls={{
          openLogin: loginModalOpen,
          openRegister: registerModalOpen
        }}
      />

      <div className={classes.root}>
        <svg
          width="100%"
          height="446"
          viewBox="0 0 100% 446"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.svgImage}
        >
          <path
            d="M0 21H1948.71C1948.71 21 2309.36 343.753 1948.71 335.246C1588.07 326.74 1475.74 86.051 973.003 335.246C470.262 584.442 379.932 335.246 0 335.246V21Z"
            fill="white"
          />
          <path
            d="M0 0H1948.71C1948.71 0 2309.36 322.753 1948.71 314.246C1588.07 305.74 1475.74 65.051 973.003 314.246C470.262 563.442 379.932 314.246 0 314.246V0Z"
            fill="#8BC34C"
          />
        </svg>
        <AlertsList />
        <Toolbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>

      <AuthForm
        onClose={modalClose}
        classes={classes}
        type="login"
        modal={modal}
        text="Log In"
      >
        <LoginComponent modalSwap={modalSwap} />
      </AuthForm>

      <AuthForm
        onClose={modalClose}
        classes={classes}
        type="register"
        modal={modal}
        text="Register"
      >
        <RegisterComponent modalSwap={modalSwap} />
      </AuthForm>
    </Router>
  )
}
