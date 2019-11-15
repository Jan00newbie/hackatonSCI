import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  main: {
    border: '1px solid white',
    backgroundColor: 'red'
  },
  paper: {
    padding: theme.spacing(3, 2)
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  )
}
