import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
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
        <CastForEducationIcon fontSize='large' />
        <Grid item>
          <Typography variant='h6' >
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
