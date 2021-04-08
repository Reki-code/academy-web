import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CourseList from './CourseList'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useQuery } from '@apollo/client'
import { ENROLLED_COURSE } from '../../../graphql/course'
import Loading from '../../common/Loading'
import Error from '../../common/Error'
import Button from '@material-ui/core/Button'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import NewCourse from './NewCourse/NewCourse'

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

const UserPage = () => {
  const classes = useStyles()
  const [order, setOrder] = useState(20)
  const [newCourse, setNewCourse] = useState(false)
  const coursesInfo = useQuery(ENROLLED_COURSE)

  const handleChange = (event) => {
    setOrder(event.target.value)
  }

  if (coursesInfo.loading) return <Loading />
  if (coursesInfo.error) return <Error error={coursesInfo.error} />

  const type = coursesInfo.data.me.type

  const courses = (() => {
    return type === 'TEACHER'
      ? coursesInfo.data.me.courseTeache
      : coursesInfo.data.me.courseEnrolled
  })()
  const handleCloseNew = () => {
    setNewCourse(false)
  }
  const handleNew = () => {
    console.log('new course')
    setNewCourse(true)
  }

  return (
    <>
      <Box className={classes.order}>
        <div className={classes.column1}>
          <Typography className={classes.title} gutterBottom>
            课程概览
          </Typography>
        </div>
        <div className={classes.column2}>
          <FormControl className={classes.formControl}>
            <Select
              value={order}
              onChange={handleChange}
            >
              <MenuItem value={10}>全部</MenuItem>
              <MenuItem value={20}>
                {type === 'STUDENT' ? '学习中' : '正在教'}
              </MenuItem>
              <MenuItem value={30}>已学习</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <CourseList courses={courses} />
      {
        type === 'TEACHER' &&
        (<>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleNew}
          >
            <ImportContactsIcon style={{ marginRight: 8 }} />
            开设新的课程
          </Button>
          <NewCourse open={newCourse} handleClose={handleCloseNew} />
        </>)
      }
    </>
  )
}

export default UserPage
