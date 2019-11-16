import React, { useState, useEffect } from 'react'
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import api_events from '../api/events.js'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
    margin: 0
  },
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  paperContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: '100%'
  },
  eventsContainer: {
    width: '100%',
    margin: 0
  },
  event: {
    padding: theme.spacing(1),
  },
  card: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  aside: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  }
}))

export default () => {
  const classes = useStyles()
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(api_events)
  }, [])

  return (
    <Grid className={classes.container} container spacing={3} justify="center">
      <Grid item xs={12} md={5}>
        <Paper className={classes.header}>
          <Typography variant="h5" component="h3" align="center">
            Avaiable Events: {events.length}
          </Typography>
        </Paper>
        <Paper className={classes.paperContainer}>
          <Grid className={classes.eventsContainer} container spacing={2}>
            {events.map((event, idx) => (
              <Grid key={idx} xs={12} md={6} className={classes.event}>
                <Card className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {event.location}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {event.date}
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}></div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper className={classes.aside}>
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
