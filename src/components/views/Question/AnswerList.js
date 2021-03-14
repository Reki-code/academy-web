import React, { Fragment } from 'react'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import AnswerItem from './AnswerItem'

const AnswerList = ({ answers }) => {
  return (
    <>
      <Typography variant='h5'>
        回答({answers.length})
      </Typography>
      <List>
        {
          answers.map(answer => (
            <AnswerItem key={answer.id} answer={answer} />
          ))
        }
      </List>
    </>
  )
}

export default AnswerList
