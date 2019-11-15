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
  navbar: {
    display: 'flex',
    'flex-grow': 1,
    'justify-content': 'center'
  },
  button: {
    margin: theme.spacing(1),
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
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Tacopedia</Typography>
          <Hidden smDown>
            <div className={classes.navbar}>
              <Button
                size="small"
                component={Link}
                to="/artists"
                className={classes.button}
              >
                Artyści
              </Button>
              <Button
                size="small"
                component={Link}
                to="/albums"
                href="#text-buttons"
                className={classes.button}
              >
                Albumy
              </Button>
              <Button
                size="small"
                component={Link}
                to="/contact"
                href="#text-buttons"
                className={classes.button}
              >
                Kontakt
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
