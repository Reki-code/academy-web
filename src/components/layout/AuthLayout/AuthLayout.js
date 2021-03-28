import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LoginForm from './LoginForm'

const AuthLayout = () => {
  return (
    <>
      <Grid container
        style={{ height: '100vh' }}
        spacing={3}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Typography variant='h4' >
            在线学堂
          </Typography>
        </Grid>
        <Grid item>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  )
}

export default AuthLayout
