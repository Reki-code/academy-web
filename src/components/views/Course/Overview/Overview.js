import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Nav from './Nav'

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
      <Paper variant='outlined' square className={classes.summay}>
        <Typography variant='h6'>
          操作系统概述
        </Typography>
        主要内容：举例介绍操作系统所做的工作；操作系统的定义与特征；操作系统的分类；操作系统发展中典型技术；典型操作系统结构。
      </Paper>

      <List className={classes.res}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary='This is RES title'
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Video
                  </Typography>
                {" 20 min"}
              </>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary='操作系统的定义和作用'
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Video
                  </Typography>
                {" 20 min"}
              </>
            }
          />
        </ListItem>
      </List>

    </div>
  )
}

export default Overview
