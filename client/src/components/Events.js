import React, { useState, useEffect } from 'react'
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EventView from './EventView'

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
    padding: theme.spacing(2, 0),
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
  button: {
    position: 'absolute',
    width: '250%',
    height: '100%'
  },
  card: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    position: 'relative'
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
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState({
    name: '',
    city: '',
    date: new Date().toISOString().substr(0, 10),
    slots: 0
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const updateFilters = evt => {
    setSearch({ ...search, [evt.target.name]: evt.target.value })
    evt.preventDefault()
  }

  useEffect(() => {
    setEvents(api_events)
  }, [])

  return (
    <>
    <Grid className={classes.container} container spacing={3} justify="center">
      <Grid item xs={12} lg={5}>
        <Paper className={classes.header}>
          <Typography variant="h4" component="h2" align="center">
            Available Events: {events.length}
          </Typography>
        </Paper>
        <Grid className={classes.eventsContainer} container spacing={3}>
          {events.map((event, idx) => {
            if (
              (search.name !== '' &&
                new RegExp(search.name.toLowerCase()).exec(
                  event.name.toLowerCase()
                ) === null) ||
              (search.city !== '' &&
                new RegExp(search.city.toLowerCase()).exec(
                  event.city.toLowerCase()
                ) === null) ||
              (search.date !== '' &&
                new Date(event.date) <= new Date(search.city)) ||
              (search.slots !== 0 && event.slots >= search.slots)
            )
              return ''
            else
              return (
                <Grid key={idx} xs={12} lg={6} item className={classes.event}>
                  <Card className={classes.card}>
                    <div className={classes.details}>
                      <CardActionArea className={classes.button} onClick={handleOpen}></CardActionArea>
                        <CardContent className={classes.content}>
                          <Typography component="h6" variant="h6">
                            {event.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {event.city}
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {event.date}
                          </Typography>
                        </CardContent>
                    </div>
                    <CardMedia className={classes.cover} image={jotpeg} />
                  </Card>
                </Grid>
              )
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper className={classes.aside}>
          <Typography variant="h6" component="h4" align="center">
            Search Engine
          </Typography>
          <form>
            <TextField
              label="Name"
              className={classes.textField}
              name="name"
              value={search.name}
              onChange={updateFilters}
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="City"
              type="search"
              className={classes.textField}
              name="city"
              value={search.city}
              onChange={updateFilters}
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="Date"
              type="date"
              name="date"
              defaultValue={search.date}
              className={classes.textField}
              onChange={updateFilters}
              margin="normal"
            />
            <TextField
              label="Slots"
              type="number"
              className={classes.textField}
              onChange={updateFilters}
              autoComplete="off"
              name="slots"
              margin="normal"
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
    <EventView handleClose={handleClose} open={open} />
    </>
  )
}
