import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_QESTIONS } from '../../../../graphql/question'
import List from '@material-ui/core/List'
import QuestionItem from './QuestionItem'
import Divider from '@material-ui/core/Divider'
import EditIcon from '@material-ui/icons/Edit'
import NewQuestion from './NewQuestion/NewQuestion'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import Fab from '../../../common/Fab'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
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

  if (questionsInfo.loading) return <Loading />
  if (questionsInfo.error) return <Error error={questionsInfo.error} />

  const questions = questionsInfo.data?.course.questions
  const handleNew = () => {
    setNewDialog(true)
  }

  return (
    <div className={classes.root}>
      {
        questions.length === 0
          ? <Typography variant='body1' align='center' color='textSecondary' >
            暂时没有人提问
          </Typography>
          : <List>
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
      }
      <Fab onClick={handleNew}>
        <EditIcon />
        提问
      </Fab>
      <NewQuestion courseId={courseId} open={newDialog} handleClose={handleClose} />
    </div>
  )
}

export default QuestionList
