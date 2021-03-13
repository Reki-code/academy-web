import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import QuizListItem from './QuizListItem'

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    backgroundColor: theme.palette.grey[100],
  },
  inline: {
    display: 'inline',
  },
}))

const Quiz = () => {
  const classes = useStyles()

  return (
    <div>
      <div>
        请在截止日期前提交作业。
      </div>
      <List className={classes.list}>
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
      </List>
    </div>
  )
}

export default Quiz
