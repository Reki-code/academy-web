import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import CommentIcon from '@material-ui/icons/Comment'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { useQuery } from '@apollo/client'
import { FIND_CHAT } from '../../../../graphql/chat'
import { useHistory } from 'react-router-dom'

const MateListItem = ({ user }) => {
  const { data: chatInfo } = useQuery(FIND_CHAT, {
    variables: { participant: user.id }
  })
  const history = useHistory()
  const handleClick = () => {
    history.push(`/chat/${chatInfo.conversation.id}`)
  }

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={user.avatar} />
        </ListItemAvatar>
        <ListItemText>
          {user.displayName}
        </ListItemText>
        <ListItemSecondaryAction>
          {
            chatInfo && (
              <Button onClick={handleClick}>
                <CommentIcon />
              </Button>
            )
          }
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default MateListItem
