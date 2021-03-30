import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Annouuncement from './Announcement'
import CourseList from './CourseList'
import { useQuery } from '@apollo/client'
import { OPEN_COURSE } from '../../../graphql/course'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '0.7em',
    fontWeight: 'bold',
  },
  order: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  column1: {
    flexBasis: '60%',
  },
  column2: {
    flexBasis: '30%',
    textAlign: 'right',
  },
}))

const CollegePage = () => {
  const classes = useStyles()
  const [order, setOrder] = useState(10)
  const openCourses = useQuery(OPEN_COURSE)

  const handleChange = (event) => {
    setOrder(event.target.value)
  }

  const courseList = () => {
    if (openCourses.loading) return <Loading />
    if (openCourses.error) return <Error error={openCourses.error} />
    const courses = openCourses.data.courses
    if (order === 20) {
      return <CourseList courses={courses.slice().
        sort((a, b) => (a.countEnrolled >= b.countEnrolled)
      )}/>
    }
    return <CourseList courses={courses} />
  }

  return (
    <>
      <Typography className={classes.title} gutterBottom>
        学堂公告
      </Typography>
      <Annouuncement />
      <Box className={classes.order}>
        <div className={classes.column1}>
          <Typography className={classes.title} gutterBottom>
            公开课
          </Typography>
        </div>
        <div className={classes.column2}>
          <FormControl className={classes.formControl}>
            <Select
              value={order}
              onChange={handleChange}
            >
              <MenuItem value={10}>开设时间</MenuItem>
              <MenuItem value={20}>学习人数</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      { courseList() }
    </>
  )
}

export default CollegePage
