import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Annouuncement from './Announcement'

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '0.7em',
    fontWeight: 'bold',
  },
}))

const CollegePage = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title} gutterBottom>
        学堂公告
      </Typography>
      <Annouuncement />
      <Typography className={classes.title} gutterBottom>
        公开课
      </Typography>
      <Annouuncement />
    </>
  )
}

export default CollegePage
