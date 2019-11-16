import React, { useState, useContext } from "react";
import { TextField, Button, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import authContext from '../context/auth/authContext'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  radioContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: theme.spacing(1.5, 0)
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(1.5)
  }
}));

export default ({modalSwap}) => {
  const classes = useStyles();
  const {auth} = useContext(authContext)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    age: 0,
    gender: "false",
    city: ""
  });

  const handleChange = evt => {
      console.log(evt.target.value)
    setForm({ ...form, [evt.target.name]: evt.target.value });
    evt.preventDefault();
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    auth(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="First Name"
          className={classes.textField}
          value={form.firstName}
          onChange={handleChange}
          name="firstName"
          margin="normal"
        />
        <TextField
          label="Last Name"
          className={classes.textField}
          value={form.lastName}
          onChange={handleChange}
          name="lastName"
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
        <TextField
          label="Repeat Password"
          className={classes.textField}
          value={form.repassword}
          onChange={handleChange}
          name="repassword"
          type="password"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="City"
          className={classes.textField}
          value={form.city}
          onChange={handleChange}
          name="city"
          margin="normal"
        />
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
      <div className={classes.radioContainer}>
        <label>
          Male
          <Radio
            checked={form.gender === "true"}
            onChange={handleChange}
            value="true"
            name="gender"
          />
        </label>
        <label>
          Female
          <Radio
            checked={form.gender === "false"}
            onChange={handleChange}
            value="false"
            name="gender"
          />
        </label>
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained">Submit</Button>
      </div>
      <div className={classes.buttonContainer}>
        <Button type="button" size="small" onClick={modalSwap} >I have an account</Button>
      </div>
    </form>
  );
};
