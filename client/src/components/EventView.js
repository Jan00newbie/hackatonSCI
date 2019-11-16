import React from 'react'
import { Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  modal: {
    maxWidth: '500px',
    maxHeight: '600px',
    backgroundColor: 'white',
    padding: theme.spacing(3)
  }
}))

export default ({ handleClose, open }) => {
  const classes = useStyles()
  return (
    <div className={classes.modalContainer}>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modalContainer}
      >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3" align="center">
            Niezle api
          </Typography>
        </div>
      </Modal>
    </div>
  )
}
