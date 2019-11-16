import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Modal, Toolbar, CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBarComponent from './AppBar'
import Home from './Home'
import Events from './Events'
import About from './About'
import LoginComponent from './LoginForm'
import RegisterComponent from './RegisterForm'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh'
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
      <AppBarComponent
        modalControls={{
          openLogin: loginModalOpen,
          openRegister: registerModalOpen
        }}
      />
      <div className={classes.root}>
        <Toolbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/login" render={() => <h1>Home</h1>} />
          <Route path="/register" render={() => <h1>Home</h1>} />
          <Route path="/event/:id" render={() => <h1>Home</h1>} />
          <Route path="/about" component={About} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
      <Modal
        open={modal === 'login'}
        onClose={modalClose}
        className={classes.modalContainer}
      >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3" align="center">
            Log In
          </Typography>
          <LoginComponent modalSwap={modalSwap} />
        </div>
      </Modal>
      <Modal
        open={modal === 'register'}
        onClose={modalClose}
        className={classes.modalContainer}
      >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3" align="center">
            Register
          </Typography>
          <RegisterComponent modalSwap={modalSwap} />
        </div>
      </Modal>
    </Router>
  )
}
