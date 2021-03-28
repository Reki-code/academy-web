import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../../graphql/user'
import { useSnackbar } from 'notistack'
import AsyncLocalStorage from '@createnextapp/async-local-storage'

const LoginForm = () => {
  const history = useHistory()
  const [login] = useMutation(LOGIN)
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = '不能为空'
        }
        if (!values.password) {
          errors.password = '不能为空'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        login({
          variables: values
        })
          .then(({ data }) => {
            enqueueSnackbar('登录成功', {
              variant: 'success'
            })
            const token = data?.login.value
            AsyncLocalStorage.setItem('user-token', token)
              .then(() => {
                history.replace('/')
              })
          })
          .catch(error => {
            enqueueSnackbar('密码错误', {
              variant: 'error'
            })
            console.log({error})
          })
          .finally(() => setSubmitting(false))
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container
            direction='column'
          >
            <Field
              component={TextField}
              name='username'
              type='text'
              label='学号/工号'
            />
            <br />
            <Field
              component={TextField}
              type='password'
              label='密码'
              name='password'
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              color='primary'
              variant='contained'
              disabled={isSubmitting}
              onClick={submitForm}
            >
              登录
          </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
