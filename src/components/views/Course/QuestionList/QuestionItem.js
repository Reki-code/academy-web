import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams, useHistory } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import { longFormat } from '../../../../utils/timeFormat'

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
  block: {
    display: 'block',
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
              <Typography variant='body2' color='textPrimary' component='span'>
                {question.content}
              </Typography>
              <span className={classes.block}>
                <span>{question.author.displayName}</span>
                <span>{longFormat(question.updatedAt)}</span>
              </span>
            </>
          }
        />
      </ListItem>
      <Divider component='li' />
    </>
  )
}

export default QuestionItem
