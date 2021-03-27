import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../../graphql/user'

const LoginForm = () => {
  const history = useHistory()
  const [login] = useMutation(LOGIN)

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        login({
          variables: values
        })
          .then(({ data }) => {
            const token = data?.login.value
            localStorage.setItem('user-token', token)
            history.replace('/')
          })
          .catch(error => {
            console.log({error})
          })
          .finally(() => setSubmitting(false))
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
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
            disabled={isSubmitting}
            onClick={submitForm}
          >
            登录
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
