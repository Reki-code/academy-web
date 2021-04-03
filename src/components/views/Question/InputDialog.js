import React, { useRef, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MUIRichTextEditor from 'mui-rte'

const InputDialog = ({ dialog, setDialog, onSend }) => {
  const [data, setData] = useState('')
  const rteRef = useRef(null)

  const handleClose = () => {
    setDialog({
      ...dialog,
      open: false,
    })
  }
  const handleSave = (data) => {
    setData(data)
  }
  const handleSend = () => {
    dialog.handleSend(data)
    setDialog({
      ...dialog,
      open: false,
    })
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={dialog.open}
        onClose={handleClose}
      >
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent>
          <MUIRichTextEditor
            ref={rteRef}
            inlineToolbar
            toolbarButtonSize='small'
            label='开始输入...'
            onBlur={() => rteRef.current?.save()}
            onSave={handleSave}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            取消
          </Button>
          <Button onClick={handleSend} color='primary' autoFocus>
            发送
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InputDialog
