import React from 'react'

const Error = ({error}) => {
  console.error('error', error)
  return <div>{error.toString()}</div>
}

export default Error
