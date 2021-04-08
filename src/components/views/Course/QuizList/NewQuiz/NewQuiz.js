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
import { COURSE_ADD_QUIZ, ALL_QUIZZES } from '../../../../../graphql/quiz'
import { useSnackbar } from 'notistack'
import { Formik, Form, Field, FieldArray } from 'formik'
import { TextField } from 'formik-material-ui'
import QuestionArrayHelper from './QuestionArrayHelper'

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

const initialValues = {
  title: '',
  questions: [],
  dueDate: new Date(),
}

const NewQuiz = ({ open, handleClose, courseId }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [addTopic] = useMutation(COURSE_ADD_QUIZ)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log({ values })
        addTopic({
          variables: {
            input: {
              courseId,
              quiz: values,
            }
          },
          refetchQueries: [{ query: ALL_QUIZZES, variables: { courseId } }],
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
        resetForm(initialValues)
        handleClose()
      }}
    >
      {({ values, submitForm, isSubmitting }) => (
        <Form>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge='start' color='inherit' onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                  新作业
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
                label='标题'
                fullWidth
              />
              <br />
              <FieldArray
                name='questions'
                render={
                  arrayHelpers => (
                    <QuestionArrayHelper
                      arrayHelpers={arrayHelpers}
                      values={values}
                    />
                  )
                }
              />
            </DialogContent>
          </Dialog>
        </Form>
      )}
    </Formik>
  )
}

export default NewQuiz
