import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CourseCard from './CourseCard'

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 8,
    '& .MuiCard-root': {
      width: '100%',
    },
  }
}))

const CourseList = ({ loading, courses }) => {
  const classes = useStyles()

  if (loading) return <div>loading</div>
  return (
    <List>
      {courses.map(course => (
        <ListItem key={course.id} className={classes.listItem}>
          <CourseCard course={course} />
        </ListItem>
      ))}
    </List>
  )
}

export default CourseList