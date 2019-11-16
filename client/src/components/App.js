import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Modal, Toolbar, CssBaseline, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AppBarComponent from "./AppBar"
import Home from "./Home"
import FormComponent from "./Form"
import About from "./About"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh"
  },
  container: {
    width: "100%"
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modal: {
    maxWidth: '500px',
    maxHeight: '600px',
    backgroundColor: 'white',
    padding: theme.spacing(3)
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
        <div className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" render={() => <h1>Home</h1>} />
            <Route path="/login" render={() => <h1>Home</h1>} />
            <Route path="/register" render={() => <h1>Home</h1>} />
            <Route path="/event/:id" render={() => <h1>Home</h1>} />
            <Route path="/about" component={About} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modalContainer}
      >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3" align="center">Rejestracja</Typography>
          <FormComponent />
        </div>
      </Modal>
    </Router>
  );
};
