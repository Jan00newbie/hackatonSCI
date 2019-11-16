import React, { useState } from "react";
import { Typography, TextField, Button, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default () => {
  const classes = useStyles();
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
    setForm({ ...form, [evt.target.name]: evt.target.value });
    evt.preventDefault();
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = response.json;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="First Name"
          className={classes.textField}
          value={form.firstName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Last Name"
          className={classes.textField}
          value={form.lastName}
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Password"
          className={classes.textField}
          value={form.password}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Repeat Password"
          className={classes.textField}
          value={form.repassword}
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="City"
          className={classes.textField}
          value={form.city}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="E-mail"
          className={classes.textField}
          value={form.email}
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div>
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
      <Button variant="contained">Submit</Button>
    </form>
  );
};
