import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import albums from '../api/albums'
import xd from '../api/siema'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    margin: 0
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 400,
    margin: '0 auto'
  },
  title: {
    fontSize: '.75rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      marginBottom: '.5rem'
    }
  },
  subtext: {
    fontSize: '.75rem'
  }
}))

export default ({
  match: {
    params: { albumTitle }
  },
  location
}) => {
  const classes = useStyles()
  const [album] = albums.filter(obj => xd(obj.title) === albumTitle)

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" component="h3">
          {album.artist} - <i>"{album.title}"</i>
        </Typography>
      </Grid>
      <ul>
        {album.tracklist.map((track, idx) => (
          <li key={idx}>{track.title}</li>
        ))}
      </ul>
    </>
  )
}
