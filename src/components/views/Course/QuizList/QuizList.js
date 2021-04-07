import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_QUIZZES } from '../../../../graphql/quiz'
import QuizListItem from './QuizListItem'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import Fab from '../../../common/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    backgroundColor: theme.palette.grey[100],
  },
  inline: {
    display: 'inline',
  },
}))

const Quiz = () => {
  const classes = useStyles()
  const { courseId } = useParams()
  const quizzesInfo = useQuery(ALL_QUIZZES, {
    variables: { courseId }
  })

  if (quizzesInfo.loading) return <Loading />
  if (quizzesInfo.error) return <Error error={quizzesInfo.error} />

  const quizzes = quizzesInfo.data.course.quizzes

  return (
    <>
      <div>
        请在截止日期前提交作业。
      </div>
      <List className={classes.list}>
        {
          quizzes.map(quiz => <QuizListItem key={quiz.id} quiz={quiz} />)
        }
      </List>
      <Fab>
        <AddIcon />
        添加作业
      </Fab>
    </>
  )
}

export default Quiz
