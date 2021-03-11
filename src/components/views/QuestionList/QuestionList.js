import React from 'react'
import { useParams } from 'react-router-dom'

const QuestionList = () => {
  const { courseId } = useParams()
  return (
    <>
      <div>Question List</div>
      <div>{courseId}</div>
    </>
  )
}

export default QuestionList
