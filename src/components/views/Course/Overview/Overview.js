import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Nav from './Nav'
import ResourceList from './ResourceList/ResourceList.js'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  summay: {
    marginTop: 8,
    padding: '8px 16px',
  },
  res: {
    marginTop: 8,
    backgroundColor: theme.palette.background.paper,
  }
}))

const Overview = () => {
  const classes = useStyles()
  const [topic, setTopic] = useState(0)
  const handleChange = (e, newValue) => {
    setTopic(newValue)
  }

  return (
    <div className={classes.root}>
      <Nav
        index={topic}
        handleChange={handleChange}
        count={5}
      />
      <div className={classes.res}>
        <ResourceList />
      </div>
    </div>
  )
}

export default Overview
