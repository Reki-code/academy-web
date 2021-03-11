import React from 'react'
import { useParams } from 'react-router-dom'

const Question = () => {
  const { questionId } = useParams()

  return (
    <div>
      QUESTION
    </div>
  )
}

export default Question
