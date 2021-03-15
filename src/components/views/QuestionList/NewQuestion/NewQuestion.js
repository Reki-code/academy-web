import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useMutation } from '@apollo/client'
import { ADD_QUESTION, ALL_QESTIONS } from '../../../../graphql/question'

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
  const [addQuestion] = useMutation(ADD_QUESTION)

  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
      }}
      validate={values => {
        const errors = {}
        if (!values.title) {
          errors.title = '请输入问题'
        }
        if (!values.content) {
          errors.content = '请输入描述'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        addQuestion({
          variables: {
            courseId,
            title: values.title,
            content: values.content,
          },
          refetchQueries: [{ query: ALL_QESTIONS, variables: { courseId }}]
        })
          .then(() => {
            handleClose()
            resetForm()
          })
          .catch(error => {
            console.log('error', error)
          })
      }}
    >
      {({ submitForm }) => (
        <Form>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge='start' color='inherit' onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                  新问题
            </Typography>
                <Button autoFocus color='inherit' onClick={submitForm}>
                  发布
            </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.field}>
              <Field
                component={TextField}
                name='title'
                label='问题'
              />
              <Field
                component={TextField}
                name='content'
                multiline
                variant='outlined'
              />
            </div>
          </Dialog>
        </Form>
      )}
    </Formik>
  )
}

export default NewQuestion
