import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ResourceItem from './ResourceItem'

const useStyles = makeStyles((theme) => ({
  summay: {
    marginTop: 8,
    padding: '8px 16px',
  },
}))

const ResourceList = ({ topic }) => {
  const classes = useStyles()

  const resources = topic.resource

  return (
    <>
      <Paper variant='outlined' square className={classes.summay}>
        <Typography variant='h6'>
          {topic.title}
        </Typography>
        {topic.description}
      </Paper>
      <List>
        {
          resources.map(resource => 
            <ResourceItem resource={resource} />
          )
        }
      </List>
    </>
  )
}

export default ResourceList
