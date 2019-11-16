import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Button,
  Toolbar,
  Slide,
  Hidden,
  useScrollTrigger
} from '@material-ui/core'
import logo from '../img/logoBig.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.secondary.main
  },
  navbar: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  logo: {
    height: '48px'
  },
  button: {
    margin: theme.spacing(1, 2),
    color: 'white'
  }
}))

const Link = forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
))

export default function({ modalControls: { openLogin, openRegister } }) {
  const classes = useStyles()
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <Hidden smDown>
            <div className={classes.navbar}>
              <Button
                size="small"
                component={Link}
                to="/events"
                href="#text-buttons"
                className={classes.button}
              >
                Events
              </Button>
              <Button
                size="small"
                component={Link}
                to="/about"
                href="#text-buttons"
                className={classes.button}
              >
                About
              </Button>
              <Button
                size="small"
                className={classes.button}
                onClick={openLogin}
              >
                Log In
              </Button>
              <Button
                size="small"
                className={classes.button}
                onClick={openRegister}
                color="primary"
                variant="contained"
              >
                Sign In
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
