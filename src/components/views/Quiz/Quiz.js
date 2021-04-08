import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'
import Button from '@material-ui/core/Button'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUIZ_INFO } from '../../../graphql/quiz'
import Loading from '../../common/Loading'
import Error from  '../../common/Error'
import Question from './Question/Question'
import { useMutation } from '@apollo/client'
import { SUBMIT_QUIZ } from '../../../graphql/quiz'
import Result from './Result/Result'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
  },
  content: {
    flexGrow: 2,
  },
  bottom: {
    display: 'flex',
  },
  pagination: {
    width: '100%',
    '& ul': {
      justifyContent: 'space-evenly',
    }
  }
}))

const Quiz = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1)
  const [answers, setAnswers] = useState([])
  const { quizId } = useParams()
  const quizInfo = useQuery(QUIZ_INFO, {
    variables: { quizId }
  })
  const handleChange = (event, value) => {
    setPage(value)
  }
  const addAnswer = (index) => (answer) => {
    const newAnswers = [...answers]
    newAnswers.splice(index, 1, answer)
    setAnswers(newAnswers)
  }
  const [submitQuiz] = useMutation(SUBMIT_QUIZ)
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const handleClose = () => {
    setOpen(false)
    history.goBack()
  }
  const [grade, setGrade] = useState(0)

  if (quizInfo.loading) return <Loading />
  if (quizInfo.error) return <Error error={quizInfo.error} />

  const quiz = quizInfo.data.quiz
  const questions = quiz.questions
  const total = questions.length
  const handleSubmit = () => {
    submitQuiz({
      variables: { input: {
        quizId,
        answers,
      }}
    })
      .then(({data}) => {
        setGrade(data.submitAnswer.grade)
        setOpen(true)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography align='center' color='textSecondary'>
          {`${page}/${total}`}
        </Typography>
        {
          questions.map((question, index) => (
            <Question
              key={index}
              hide={index !== page - 1}
              question={question}
              answer={answers[index]}
              setAnswer={addAnswer(index)}
            />
          ))
        }
      </div>
      <div className={classes.bottom}>
        <Pagination
          className={classes.pagination}
          count={total}
          page={page}
          onChange={handleChange}
        />
        {
          total === answers.length && <Button onClick={handleSubmit}>提交</Button>
        }
      </div>
      <Result open={open} handleClose={handleClose} grade={grade} />
    </div>
  )
}

export default Quiz
