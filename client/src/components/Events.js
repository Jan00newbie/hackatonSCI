import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
    margin: 0
  },
  paper: {
    padding: theme.spacing(2)
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container} container spacing={2} justify="center">
      <Grid item xs={12} md={5}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
