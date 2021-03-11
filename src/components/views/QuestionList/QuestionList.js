import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_QESTIONS } from '../../../graphql/question'
import QuestionItem from './QuestionItem'
import Divider from '@material-ui/core/Divider'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const QuestionList = () => {
  const classes = useStyles()
  const { courseId } = useParams()
  const questionsInfo = useQuery(ALL_QESTIONS, {
    variables: { courseId }
  })

  if (questionsInfo.loading) {
    return <div>Loading</div>
  }
  if (questionsInfo.error) {
    return <div>Error</div>
  }
  const questions = questionsInfo.data.course.questions

  return (
    <div className={classes.root}>
      <div>Question List</div>
      {
        questions
          .map(question =>
            <>
              <QuestionItem key={question.id} question={question} />
              <Divider />
            </>
          )
      }
      <Fab className={classes.fab} variant='extended'>
        <EditIcon className={classes.extendedIcon} />
        提问
      </Fab>
    </div>
  )
}

export default QuestionList
