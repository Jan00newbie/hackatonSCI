import React, { useState, useContext } from "react";
import { TextField, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import authContext from '../context/auth/authContext'
import { RadioBool } from "./RadioBool";

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
  const {register} = useContext(authContext)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    age: 0,
    isMale: true,
    city: ""
  });

  const handleChange = evt => {
    evt.preventDefault();
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(form);
    register(form);
  };

  return (
    <form>
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
        <RadioBool 
          texts={['Male', 'Female']}
          onChange={handleChange}
          name='isMale'
          value={form.isMale}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </div>
      <div className={classes.buttonContainer}>
        <Button type="button" size="small" onClick={modalSwap} >I have an account</Button>
      </div>
    </form>
  );
};
