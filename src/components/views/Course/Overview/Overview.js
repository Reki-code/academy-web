import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import ResourceList from './ResourceList/ResourceList'
import { useQuery } from '@apollo/client'
import { RESOURCES } from '../../../../graphql/resource'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import Fab from '../../../common/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  res: {
    marginTop: 8,
  }
}))

const Overview = ({ isTeache }) => {
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

  const topics = resourcesInfo.data.course.topics

  const handleAdd = () => {
    console.log('add')
  }

  return (
    <div>
      {
        topics.length === 0
          ? <Typography variant='body1' align='center' color='textSecondary' >
            没有内容
          </Typography>
          : <>
            <Nav
              index={topic}
              handleChange={handleChange}
              count={topics.length}
            />
            <div className={classes.res}>
              <ResourceList topic={topics[topic]} />
            </div>
          </>
      }
      {
        isTeache && <Fab onClick={handleAdd}>
          <AddIcon />
          添加主题
        </Fab>
      }
    </div>
  )
}

export default Overview
