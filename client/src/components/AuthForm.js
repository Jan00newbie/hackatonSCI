import React from 'react'
import { Modal, Typography } from '@material-ui/core'

export default ({children, classes, onClose, type, modal ,text}) => {
    return (
        <Modal
            open={modal === type}
            onClose={onClose}
            className={classes.modalContainer}
        >
        <div className={classes.modal}>
          <Typography variant="h5" component="h3" align="center">
            {text}
          </Typography>
          {children}
        </div>
      </Modal>
    )
}
