import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import timeago from '../../../utils/timeago'
import Comments from './Comments/Comments'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
  },
  answer: {
    display: 'grid',
    gridTemplateColumns: '32px 1fr'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'Center',
  }
}))

const AnswerItem = ({ answer }) => {
  const classes = useStyles()

  return (
    <>
      <ListItem className={classes.root} alignItems="flex-start">
        <ListItemAvatar>
          <div className={classes.stats}>
            <ThumbUpOutlinedIcon fontSize='small' />
            {answer.vote}
            <ThumbDownOutlinedIcon fontSize='small' />
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={
            <span className={classes.flex}>
              <span className={classes.author}>
                <Avatar src={answer.author.avatar} className={classes.avatar} />
                <span>{answer.author.displayName}</span>
              </span>
              <Typography color='textSecondary' component='span' >{timeago(answer.createdAt)}</Typography>
            </span>
          }
          secondary={
            <>
              <Typography color='textPrimary' component='span'>
                {answer.content}
                <Divider component='span' />
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider/>
      <Comments answerId={answer.id} />
    </>
  )
}

export default AnswerItem
