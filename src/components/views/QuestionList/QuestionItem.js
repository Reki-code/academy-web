import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams, useHistory } from 'react-router-dom'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '64px 1fr'
  },
  stats: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
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
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.stats}>
        <div>
          <ThumbUpIcon />
          {question.vote}
        </div>
        <div>
          <QuestionAnswerIcon />
          {question.answerCount}
        </div>
      </div>
      <div className={classes.summary}>
        <div>{question.title}</div>
        <div>{question.content}</div>
        <div>
          <span>{question.author.displayName}</span>
          <span>{new Date(question.updatedAt).toISOString()}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem
