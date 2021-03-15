import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_QESTIONS } from '../../../graphql/question'
import List from '@material-ui/core/List'
import QuestionItem from './QuestionItem'
import Divider from '@material-ui/core/Divider'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import NewQuestion from './NewQuestion/NewQuestion'

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
  const [newDialog, setNewDialog] = useState(false)
  const handleClose = () => {
    setNewDialog(false)
  }
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
  const handleNew = () => {
    setNewDialog(true)
  }

  return (
    <div className={classes.root}>
      <div>Question List</div>
      <List>
        {
          questions
            .map(question =>
              <Fragment key={question.id}>
                <QuestionItem question={question} />
                <Divider />
              </Fragment>
            )
        }
      </List>
      <Fab className={classes.fab} variant='extended' onClick={handleNew}>
        <EditIcon className={classes.extendedIcon} />
        提问
      </Fab>
      <NewQuestion courseId={courseId} open={newDialog} handleClose={handleClose} />
    </div>
  )
}

export default QuestionList
