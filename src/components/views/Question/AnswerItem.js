import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import Paper from '@material-ui/core/Paper'
import timeago from '../../../utils/timeago'

const useStyles = makeStyles((theme) => ({
  answer: {
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

const AnswerItem = ({ answer }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.answer}>
        <div className={classes.stats}>
          <ThumbUpIcon fontSize='small' />
          {answer.vote}
          <ThumbDownIcon fontSize='small' />
        </div>
        <div>
          {answer.content}
        </div>
      </div>
      <Paper variant='outlined' square >
        {answer.author.displayName}
        发布于{timeago(answer.createdAt)}
      </Paper>
    </>
  )
}

export default AnswerItem
