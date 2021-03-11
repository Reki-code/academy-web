import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
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
})

const CourseInfo = ({ course }) => {
  const classes = useStyles()

  return (
    <Paper elevation={3}>
      <img className={classes.media} src='https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'
      />
      <Avatar />
      <div>intro</div>
      <div>Course: <span>{course.title}</span></div>
      <div>Teacher: <span>{course.teacher.displayName}</span></div>
      <Nav />
    </Paper>
  )
}

export default CourseInfo