import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import authContext from '../context/auth/authContext'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(1.5)
  }
}))

export default ({modalSwap}) => {
  const {auth} = useContext(authContext)
  const classes = useStyles();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = evt => {
    evt.preventDefault();
    
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    
    auth(form);
  };

  return (
    <form>
      <div>
        <TextField
          label="E-mail"
          className={classes.textField}
          value={form.email}
          onChange={handleChange}
          name="email"
          type="email"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Password"
          className={classes.textField}
          value={form.password}
          onChange={handleChange}
          name="password"
          type="password"
          margin="normal"
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
      <div className={classes.buttonContainer}>
        <Button type="button" size="small" onClick={modalSwap}>
          I don't have an account
        </Button>
      </div>
    </form>
  )
}
