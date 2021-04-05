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
import { ADD_QUESTION, ALL_QESTIONS } from '../../../../../graphql/question'

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

const NewQuestion = ({ open, handleClose, courseId }) => {
  const classes = useStyles()
  const [question, setQuestion] = useState(null)
  const rteRef = useRef(null)
  const [addQuestion] = useMutation(ADD_QUESTION)

  const handleSend = () => {
    addQuestion({
      variables: {
        courseId,
        ...question,
      },
      refetchQueries: [{ query: ALL_QESTIONS, variables: { courseId } }]
    })
      .then(() => {
        handleClose()
        resetForm()
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const handleSave = (data) => {
    setQuestion({
      ...question,
      content: data,
    })
  }
  const handleChange = ({ target }) => {
    setQuestion({
      ...question,
      title: target.value,
    })
  }

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              新问题
            </Typography>
            <Button autoFocus color='inherit' onClick={handleSend}>
              发布
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <TextField
            name='title'
            label='问题'
            onChange={handleChange}
          />
          <MUIRichTextEditor
            ref={rteRef}
            inlineToolbar
            toolbarButtonSize='small'
            label='描述你的问题...'
            onBlur={() => rteRef.current?.save()}
            onSave={handleSave}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default NewQuestion
