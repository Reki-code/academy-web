import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const Result = ({ grade, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>结果</DialogTitle>
      <DialogContent>
        <DialogContentText>
          本次作业成绩为 {grade}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          确认
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Result
