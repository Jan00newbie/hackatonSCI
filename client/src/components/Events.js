import React, { useState, useEffect } from 'react'
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardDatePicker from '@material-ui/pickers'
import api_events from '../api/events.js'
import jotpeg from '../img/pety1.jpg'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
    margin: 0,
    position: 'relative',
    zIndex: 2
  },
  header: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light
  },
  eventsContainer: {
    marginTop: theme.spacing(2),
    width: '100%',
    margin: 0
  },
  event: {
    padding: theme.spacing(0.5)
  },
  card: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cover: {
    width: 150
  },
  aside: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light
  },
  textField: {
    width: '100%'
  }
}))

export default () => {
  const classes = useStyles()
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState({
    city: '',
    date: new Date(),
    slots: 0
  })

  const handleDateChange = () => {}

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
        <Grid className={classes.eventsContainer} container spacing={3}>
          {events.map((event, idx) => (
            <Grid key={idx} xs={12} md={6} item className={classes.event}>
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
                <CardMedia className={classes.cover} image={jotpeg} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper className={classes.aside}>
          <Typography variant="h6" component="h4" align="center">
            Search Engine
          </Typography>
          <TextField
            label="City"
            type="search"
            className={classes.textField}
            name="city"
            value={search.city}
          />

          <TextField
            label="Number"
            type="number"
            className={classes.textField}
            name="slots"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="filled"
          />
        </Paper>
      </Grid>
    </Grid>
  )
}
