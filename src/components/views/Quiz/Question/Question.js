import React from 'react'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Single from './Single'
import Multiple from './Multiple'

const Question = (props) => {
  const { question, hide } = props
  if (hide) return null
  const content = question.content
  const input = {
    single: Single,
    multiple: Multiple,
  }
  const Input = input[question.type]

  return (
    <div>
      <Typography >{content.stem}</Typography>
      <Divider />
      <Input {...props} />
    </div>
  )
}

export default Question
