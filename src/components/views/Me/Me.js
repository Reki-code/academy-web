import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { useQuery } from '@apollo/client'
import { ME } from '../../../graphql/user'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  info: {
    padding: theme.spacing(1),
  },
  avatar: {
    margin: 'auto'
  },
  logout: {
    width: '100%',
    color: 'red',
  },
}))

const Me = () => {
  const classes = useStyles()
  const meInfo = useQuery(ME)
  const history = useHistory()
  const handleLogout = () => {
    history.push('/auth')
  }

  if (meInfo.loading) return <Loading />
  if (meInfo.error) return <Error error={meInfo.error} />

  const info = meInfo.data.me
  console.log({info})

  return (
    <>
      <Paper className={classes.info}>
        <Grid container justify='center' alignItems='center' spacing={1} >
          <Grid item xs={2}>
            <Avatar className={classes.avatar} src={info.avatar} />
          </Grid>
          <Grid item xs={10}>
            <Grid container direction='column' >
              <Grid item>
                <Typography variant='h6'>
                  {info.displayName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' >
                  学号{info.username}
                 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <div>ME</div>
      <Button
        className={classes.logout}
        onClick={handleLogout}
      >
        退出登录
      </Button>
    </>
  )
}

export default Me
