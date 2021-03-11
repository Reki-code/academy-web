import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
  const { courseId } = useParams()
  return (
    <>
      <div>Course</div>
      <div>{ courseId }</div>
    </>
  )
}

export default Course
