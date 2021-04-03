import React from 'react'
import List from '@material-ui/core/List'
import CommentItem from './CommentItem'

const Comments = ({ comments }) => {
  if (comments.length === 0) return null

  return (
    <List>
      {
        comments.map(comment => <CommentItem comment={comment} />)
      }
      
    </List>
  )
}

export default Comments
