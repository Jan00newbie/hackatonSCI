import React, { useState } from "react"
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    }
}))

export default () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        age: 0,
        gender: "false",
        city: ''
    })

    const handleChange = (evt) => {
        setForm({ ...form, [evt.target.name]: evt.target.value })
        evt.preventDefault()
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }


    return (
          <form onSubmit={handleSubmit}>
              <div>
                <TextField label="First Name" className={classes.textField} value={form.firstName} onChange={handleChange} margin="normal"/>
                <TextField label="Last Name" className={classes.textField} value={form.lastName} onChange={handleChange} margin="normal"/>
              </div>
              <div>
                <TextField label="Password" className={classes.textField} value={form.password} onChange={handleChange} margin="normal"/>
                <TextField label="Repeat Password" className={classes.textField} value={form.repassword} onChange={handleChange} margin="normal"/>
              </div>
            <label className={classes.label}>
              <Typography variant="caption">Email</Typography>
              <input name="email" onChange={handleChange} value={form.email} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Age</Typography>
              <input name="age" onChange={handleChange} value={form.age} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Gender</Typography>
              <input type="radio" name="gender" value="true" onChange={handleChange} checked={form.gender === "true"} /> Male
              <input type="radio" name="gender" value="false" onChange={handleChange} checked={form.gender === "false"} /> Female
            </label>
            <label className={classes.label}>
              <Typography variant="caption">City</Typography>
              <input name="city" onChange={handleChange} value={form.city} />
            </label>
            <button>Submit</button>
          </form>
    )
}