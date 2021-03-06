import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import timeago from '../../../utils/timeago'

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inline: {
    display: 'inline',
  },
}))

const ChatListItem = ({ conversation, myId }) => {
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => {
    history.push(`/chat/${conversation.id}`)
  }

  return (
    <>
      <ListItem alignItems='flex-start' onClick={handleClick}>
        <ListItemAvatar>
          <Avatar src={conversation.participants.filter(p => p.id !== myId)[0]?.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <div className={classes.flex}>
              <div>{conversation.participants.filter(p => p.id !== myId)[0]?.displayName}</div>
              <div>{timeago(conversation.latestMessage?.createdAt)}</div>
            </div>
          }
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                {conversation.latestMessage?.sender.id === myId ? '我: ' : ''}
              </Typography>
              {conversation.latestMessage?.content}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default ChatListItem
