import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams, useHistory } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 0,
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
  },
  summary: {

  },
}))

const QuestionItem = ({ question }) => {
  const classes = useStyles()
  const { courseId } = useParams()
  const history = useHistory()
  const handleClick = () => {
    history.push(`/question/${question.id}`)
  }

  return (
    <>
      <ListItem className={classes.root} alignItems='flex-start' onClick={handleClick}>
        <ListItemAvatar>
          <div className={classes.stats}>
            <div className={classes.flex}>
              <ThumbUpIcon />
              {question.vote}
            </div>
            <div className={classes.flex}>
              <QuestionAnswerIcon />
              {question.answerCount}
            </div>
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={question.title}
          secondary={
            <>
              <Typography variant='body2' color='textPrimary'>
                {question.content}
              </Typography>
              <div>
                <span>{question.author.displayName}</span>
                <span>{new Date(question.updatedAt).toISOString()}</span>
              </div>
            </>
          }
        />
      </ListItem>
      <Divider component='li' />
    </>
  )
}

export default QuestionItem
