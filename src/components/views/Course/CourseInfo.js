import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Nav from './Nav'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: '100%',
    objectFit: 'cover',
  },
  avatar: {
    margin: 'auto'
  },
})

const CourseInfo = ({ course }) => {
  const classes = useStyles()

  return (
    <Paper elevation={3}>
      <img 
        className={classes.media}
        src={course.cover}
      />
      <Grid container justify='center' alignItems='center' spacing={1} >
        <Grid item xs={2}>
          <Avatar className={classes.avatar} src={course.teacher.avatar} />
        </Grid>
        <Grid item xs={10}>
          <Grid container direction='column' >
            <Grid item>
              <Typography variant='h6'>
                {course.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' >
                教师: {course.teacher.displayName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Nav />
    </Paper>
  )
}

export default CourseInfo