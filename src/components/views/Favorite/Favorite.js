import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_FAVORITES } from '../../../graphql/favorite'
import Loading from '../../common/Loading'
import Error from '../../common/Error'
import { useHistory } from 'react-router-dom'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'
import Typograph from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'


const Favorite = () => {
  const { loading, error, data } = useQuery(ALL_FAVORITES)
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`/question/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const questions = data.me.favorite.questions

  return (
    <>
      <List subheader={<ListSubheader>问题</ListSubheader> }>
        {
          questions.map(question => (
            <ListItem>
              <ListItemText >
                {question.title}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleClick(question.id)} edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default Favorite
