import React, { forwardRef, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import TextField from '@material-ui/core/TextField'
import MUIRichTextEditor from 'mui-rte'
import { useMutation } from '@apollo/client'
import { NEW_COURSE, ENROLLED_COURSE } from '../../../../graphql/course'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
  }
}))

const Transition = forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />
})

const NewQuestion = ({ open, handleClose }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    title: '',
    open: false,
    description: '',
  })
  const { enqueueSnackbar } = useSnackbar()
  const rteRef = useRef(null)
  const [newCourse] = useMutation(NEW_COURSE)

  const handleSend = () => {
    newCourse({
      variables: values,
      refetchQueries: [{ query: ENROLLED_COURSE }],
    })
      .then(() => {
        enqueueSnackbar('开设成功', {
          variant: 'success'
        })
        handleClose()
      })
      .catch(() => {
        enqueueSnackbar('开设失败', {
          variant: 'error'
        })
      })
  }
  const handleSave = (data) => {
    setValues({
      ...values,
      description: data,
    })
  }
  const handleTitleChange = ({ target }) => {
    setValues({
      ...values,
      title: target.value,
    })
  }
  const handleOpenChange = ({ target }) => {
    setValues({
      ...values,
      open: target.checked,
    })
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={handleClose} >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            新课程
          </Typography>
          <Button autoFocus color='inherit' onClick={handleSend}>
            提交
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <TextField
          name='title'
          label='课程名'
          onChange={handleTitleChange}
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.open}
              onChange={handleOpenChange}
              name='open'
              color='primary'
            />
          }
          label='公开课'
        />
        <MUIRichTextEditor
          ref={rteRef}
          inlineToolbar
          toolbarButtonSize='small'
          label='课程简介...'
          onBlur={() => rteRef.current?.save()}
          onSave={handleSave}
        />
      </DialogContent>
    </Dialog>
  )
}

export default NewQuestion
