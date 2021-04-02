import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import ResourceList from './ResourceList/ResourceList'
import { useQuery } from '@apollo/client'
import { RESOURCES } from '../../../../graphql/resource'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  res: {
    marginTop: 8,
    backgroundColor: theme.palette.background.paper,
  }
}))

const Overview = () => {
  const classes = useStyles()
  const { courseId } = useParams()
  const resourcesInfo = useQuery(RESOURCES, {
    variables: { courseId },
  })
  const [topic, setTopic] = useState(0)
  const handleChange = (e, newValue) => {
    setTopic(newValue)
  }

  if (resourcesInfo.loading) return <Loading />
  if (resourcesInfo.error) return <Error error={resourcesInfo.error} />

  console.log({resourcesInfo})
  const topics = resourcesInfo.data.course.topics
  if (topics.length === 0) return <div>Empty</div>

  return (
    <div className={classes.root}>
      <Nav
        index={topic}
        handleChange={handleChange}
        count={topics.length}
      />
      <div className={classes.res}>
        <ResourceList topic={topics[topic]} />
      </div>
    </div>
  )
}

export default Overview
