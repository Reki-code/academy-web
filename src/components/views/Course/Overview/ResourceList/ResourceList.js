import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ResourceItem from './ResourceItem'
import Box from '@material-ui/core/Box'

const ResourceList = ({ topic }) => {
  const resources = topic.resources

  return (
    <>
      <Paper variant='outlined' square>
        <Box px={2} py={1}>
          <Typography variant='h6'>
            {topic.title}
          </Typography>
          {topic.description}
        </Box>
      </Paper>
      <List>
        {
          resources.map(resource => 
            <ResourceItem key={resource.id} resource={resource} />
          )
        }
      </List>
    </>
  )
}

export default ResourceList
