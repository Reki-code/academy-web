import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { useQuery } from '@apollo/client'
import { QUESTION } from '../../../graphql/question'
import timeago from '../../../utils/timeago'
import AnswerList from './AnswerList'

const useStyles = makeStyles((theme) => ({
  question: {
    display: 'grid',
    gridTemplateColumns: '32px 1fr'
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'Center',
  }
}))

const Question = () => {
  const classes = useStyles()
  const { questionId } = useParams()
  const questionInfo = useQuery(QUESTION, {
    variables: { questionId }
  })

  if (questionInfo.loading) return <CircularProgress />
  if (questionInfo.error) return <div>loading failed</div>

  const myId = questionInfo.data.me.id
  const question = questionInfo.data.post
  const answers = questionInfo.data.post.answers

  return (
    <Container>
      <Typography gutterBottom variant='h3' component='h1'>
        {question.title}
      </Typography>
      <span>提问于: {timeago(question.createdAt)}</span>
      <span>提问者: {question.author.displayName}</span>
      <Divider />
      <div className={classes.question}>
        <div className={classes.stats}>
          <ThumbUpIcon fontSize='small' />
          { question.vote }
          <ThumbDownIcon fontSize='small' />
        </div>
        <div>
          { question.content }
        </div>
      </div>
      <Divider />
      <AnswerList answers={answers} />
    </Container>
  )
}

export default Question
