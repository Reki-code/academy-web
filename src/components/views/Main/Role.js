import React from 'react'
import { Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ME } from '../../../graphql/user'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const Role = () => {
  const { loading, error, data: userInfo } = useQuery(ME)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      {userInfo.me?.type === 'TEACHER' && <Redirect to='/teacher' />}
      {userInfo.me?.type === 'STUDENT' && <Redirect to='/student' />}
    </>
  )
}

export default Role
