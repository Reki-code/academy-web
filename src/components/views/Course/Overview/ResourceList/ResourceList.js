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

const ResourceList = () => {
  const classes = useStyles()

  return (
    <>
      <Paper variant='outlined' square className={classes.summay}>
        <Typography variant='h6'>
          操作系统概述
        </Typography>
        主要内容：举例介绍操作系统所做的工作；操作系统的定义与特征；操作系统的分类；操作系统发展中典型技术；典型操作系统结构。
      </Paper>
      <List>
        <ResourceItem resource={{ id: 1 }} />
        <ResourceItem resource={{ id: 2 }} />
      </List>
    </>
  )
}

export default ResourceList
