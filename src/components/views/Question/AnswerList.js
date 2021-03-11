import React, { Fragment } from 'react'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import AnswerItem from './AnswerItem'

const AnswerList = ({ answers }) => {
  return (
    <>
      <Typography variant='h5'>
        回答({answers.length})
      </Typography>
      {
        answers.map(answer => (
          <Fragment key={answer.id}>
            <AnswerItem answer={answer} />
            <Divider />
          </Fragment>
        ))
      }
    </>
  )
}

export default AnswerList
