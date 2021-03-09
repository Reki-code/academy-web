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

const CourseList = () => {
  const classes = useStyles()

  return (
    <List>
      <ListItem className={classes.listItem}>
        <CourseCard />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CourseCard />
      </ListItem>
    </List>
  )
}

export default CourseList