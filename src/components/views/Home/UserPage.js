import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CourseList from './CourseList'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useQuery } from '@apollo/client'
import { ALL_COURSE } from '../../../graphql/course'

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
  const courseResult = useQuery(ALL_COURSE)

  const handleChange = (event) => {
    setOrder(event.target.value)
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
              <MenuItem value={20}>学习中</MenuItem>
              <MenuItem value={30}>已学习</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      {courseResult.loading
        ? <div>Loading</div>
        : <CourseList courses={courseResult.data.courses} />
      }
    </>
  )
}

export default UserPage
