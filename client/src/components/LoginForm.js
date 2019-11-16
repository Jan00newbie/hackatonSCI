import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

export default ({ modalSwap }) => {
  const classes = useStyles()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = evt => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
    evt.preventDefault()
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const data = response.json
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Button variant="contained">Submit</Button>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={modalSwap}>
          I don't have an account
        </Button>
      </div>
    </form>
  )
}
