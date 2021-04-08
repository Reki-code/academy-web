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
import { useMutation } from '@apollo/client'
import { COURSE_ADD_TOPIC, RESOURCES } from '../../../../../graphql/resource'
import { useSnackbar } from 'notistack'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

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

const NewTopic = ({ open, handleClose, courseId }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    title: '',
    description: '',
  })
  const { enqueueSnackbar } = useSnackbar()

  const [addTopic] = useMutation(COURSE_ADD_TOPIC)

  const handleSend = () => {
    
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
    <Formik
      initialValues={{
        title: '',
        description: '',
        resources: [],
      }}
      onSubmit={(values, { setSubmitting }) => {
        addTopic({
          variables: {
            input: {
              courseId,
              ...values,
            }
          },
          refetchQueries: [{query: RESOURCES, variables: {courseId}}],
        })
          .then(() => {
            enqueueSnackbar('添加成功', {
              variant: 'success'
            })
          })
          .catch(() => {
            enqueueSnackbar('添加失败', {
              variant: 'error'
            })
          })
        setSubmitting(false)
        handleClose()
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge='start' color='inherit' onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                  新主题
                </Typography>
                <Button autoFocus color='inherit' onClick={submitForm}>
                  提交
                </Button>
              </Toolbar>
            </AppBar>
            <DialogContent>
              <Field
                component={TextField}
                name='title'
                label='主题'
                fullWidth
              />
              <br />
              <Field
                component={TextField}
                name='description'
                label='描述'
                fullWidth
                multiline
              />
              {/* {isSubmitting} */}
            </DialogContent>
          </Dialog>
        </Form>
      )}
    </Formik>
  )
}

export default NewTopic
