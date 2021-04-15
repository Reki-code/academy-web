import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { RESOURCE_INFO } from '../../../graphql/resource'
import Loading from '../../common/Loading'
import Error from '../../common/Error'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Text from './Text/Text'
import Video from './Video/Video'
import Slides from './Slides/Slides'

const Resource = () => {
  const { resourceId } = useParams()
  const resourceInfo = useQuery(RESOURCE_INFO, {
    variables: { resourceId },
  })

  if (resourceInfo.loading) return <Loading />
  if (resourceInfo.error) return <Error error={resourceInfo.error} />

  const resource = resourceInfo.data.resource

  return (
    <Box p={1}>
      <Typography variant='h6' >
        {resource.title}
      </Typography>
      {resource.category === 'text' && <Text resource={resource} />}
      {resource.category === 'video' && <Video resource={resource} />}
      {resource.category === 'slides' && <Slides resource={resource} />}
    </Box>
  )
}

export default Resource
