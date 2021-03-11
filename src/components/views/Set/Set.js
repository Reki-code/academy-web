import React from 'react'
import { useParams, Redirect } from 'react-router-dom'

const Set = () => {
  const { token } = useParams()
  localStorage.setItem('user-token', token)

  return (
    <Redirect to='/' />
  )
}

export default Set