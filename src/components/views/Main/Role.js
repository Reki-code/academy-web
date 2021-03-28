import React from 'react'
import { Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ME } from '../../../graphql/user'
import Loading from '../../common/Loading'

const Role = () => {
  const { data: userInfo } = useQuery(ME)

  return (
    <>
      <Loading />
      {userInfo?.me.type === 'TEACHER' && <Redirect to='/teacher' />}
      {userInfo?.me.type === 'STUDENT' && <Redirect to='/student' />}
    </>
  )
}

export default Role
