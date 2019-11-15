import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Button,
  Toolbar,
  Slide,
  Hidden,
  Typography,
  useScrollTrigger
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.secondary.main
  },
  navbar: {
    display: 'flex',
    'flex-grow': 1,
    'justify-content': 'flex-end'
  },
  logo: {
    color: 'white'
  },
  button: {
    margin: theme.spacing(1, 2),
    color: 'white'
  }
}))

const Link = forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
))

export default function() {
  const classes = useStyles()
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.logo} variant="h6">Party Together</Typography>
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
                href="#text-buttons"
                className={classes.button}
              >
                Log In / Sign In
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
