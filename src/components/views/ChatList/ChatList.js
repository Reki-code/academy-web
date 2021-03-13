import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { useQuery } from '@apollo/client'
import { CHATS } from '../../../graphql/chat'
import ChatListItem from './ChatListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

const ChatList = () => {
  const classes = useStyles()

  const chatList = useQuery(CHATS)
  if (chatList.loading) {
    return <div>Loading</div>
  }
  if (chatList.error) {
    return <div>{chatList.error.toString()}</div>
  }
  const conversations = chatList.data.me.conversations
  const myId = chatList.data.me.id

  return (
    <>
      <List className={classes.root}>
        {conversations.map(conversation => (
          <ChatListItem
            conversation={conversation}
            myId={myId}
            key={conversation.id}
          />))}
      </List>
    </>
  )
}

export default ChatList