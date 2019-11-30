import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>Aside</Paper>
    </>
  )
}