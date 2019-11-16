import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Modal, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "./AppBar";
import Home from "./Home";
import FormComponent from "./Form"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    height: "100vh"
  },
  container: {
    width: "100%"
  },
  modal: {
    maxWidth: '500px',
    maxHeight: '600px',
    backgroundColor: 'white'
  }
}))

export default () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBarComponent handleOpen={handleOpen} />
      <div className={classes.root}>
        <Toolbar />
<<<<<<< HEAD
        <Grid className={classes.container} container justify="center">
          <Grid item xs={12} md={8}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/events" render={() => <h1>Home</h1>} />
              <Route path="/login" render={() => <h1>Home</h1>} />
              <Route path="/register" render={() => <h1>Home</h1>} />
              <Route path="/event/:id" render={() => <h1>Home</h1>} />
              <Route path="/about" component={About} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </Grid>
        </Grid>
=======
        <div className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" render={() => <h1>Home</h1>} />
            <Route path="/login" render={() => <h1>Home</h1>} />
            <Route path="/register" render={() => <h1>Home</h1>} />
            <Route path="/event/:id" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>Home</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
>>>>>>> 2f6ccb8bb0b9c0a8d8840ccf68ddcc34a2f298e5
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3">Text in a modal</Typography>
          <FormComponent />
        </div>
      </Modal>
    </Router>
  );
};
