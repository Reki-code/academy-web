import React from 'react'
import { useParams } from 'react-router-dom'

const Resource = () => {
  const { resourceId } = useParams()

  return (
    <>
      <div>Resource</div>
      <div>{resourceId}</div>
    </>
  )
}

export default Resource
