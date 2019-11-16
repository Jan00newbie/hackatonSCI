import React, { useState } from "react"
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    label: {
        display: 'block'
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
            <label className={classes.label}>
              <Typography variant="caption">First Name</Typography>
              <input name="firstName" onChange={handleChange} value={form.firstName} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Last Name</Typography>
              <input name="lastName" onChange={handleChange} value={form.lastName} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Email</Typography>
              <input name="email" onChange={handleChange} value={form.email} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Password</Typography>
              <input type="password" name="password" onChange={handleChange} value={form.password} />
            </label>
            <label className={classes.label}>
              <Typography variant="caption">Repeat Password</Typography>
              <input type="password" name="repassword" onChange={handleChange} value={form.repassword} />
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