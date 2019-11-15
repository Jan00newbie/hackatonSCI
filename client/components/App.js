import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toolbar, CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar_Component from './AppBar'
import Artists_Component from './Artists'
import Artist_Component from './Artist'
import Albums_Component from './Albums'
import Album_Component from './Album'
import Aside_Component from './Aside'
import Footer_Component from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: '100%',
    margin: 0
  },
  aside: {
    padding: theme.spacing(2)
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Router>
      <CssBaseline />
      <AppBar_Component />
      <Toolbar />
      <div className={classes.root}>
        <Grid className={classes.container} container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={2}
            >
              <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>} />
                <Route path="/events" render={() => <h1>Home</h1>} />
                <Route path="/login" render={() => <h1>Home</h1>} />
                <Route path="/register" render={() => <h1>Home</h1>} />
                <Route path="/event/:id" render={() => <h1>Home</h1>} />
                <Route path="/about" render={() => <h1>Home</h1>} />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Aside_Component className={classes.aside} />
          </Grid>
        </Grid>
      </div>
      <Footer_Component />
    </Router>
  )
}
