import React, { Fragment, forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 400,
    margin: '0 auto'
  },
  cardContent: {
    padding: '12px 16px'
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

const Link = forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
))

const Header = ({ year }) => (
  <Grid item xs={12}>
    <Typography variant="h5" component="h3">
      {year}
    </Typography>
  </Grid>
)

export default () => {
  const classes = useStyles()
  let year

  return (
    <>
      {albums.map((album, idx) => {
        const albumDateYear = new Date(album.date).getFullYear()
        const mapYear = year
        year = albumDateYear

        return (
          <Fragment key={idx}>
            {mapYear != albumDateYear && <Header year={albumDateYear} />}
            <Grid item xs={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  component={Link}
                  to={`/albums/${xd(album.title)}`}
                >
                  <CardMedia
                    component="img"
                    alt={album.img.alt}
                    height="150"
                    image={`/img/album_arts/${album.img.url}`}
                    title={`${album.artist} - ${album.img.alt}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.title}
                      variant="h6"
                      component="h5"
                    >
                      {album.title}
                    </Typography>
                    <Box display={{ xs: 'none', md: 'block' }}>
                      <Typography
                        className={classes.subtext}
                        align="right"
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {album.artist}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Fragment>
        )
      })}
    </>
  )
}
