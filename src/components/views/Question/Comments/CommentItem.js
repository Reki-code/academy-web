import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import timeago from '../../../../utils/timeago'

// comments {
//   content
//   author {
//     displayName
//   }
// }

const CommentItem = ({ comment }) => {

  return (
    <>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>

        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography varinat='body1'>
              {comment.author.displayName}
            </Typography>
          }
          secondary={
            comment.content
          }
        />
      </ListItem>
    </>
  )
}

export default CommentItem
