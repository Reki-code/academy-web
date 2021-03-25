import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_MATE } from '../../../../graphql/course'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'

const MateList = () => {
  const { courseId } = useParams()
  const mateInfo = useQuery(ALL_MATE, {
    variables: { courseId }
  })

  if (mateInfo.loading) return <Loading />
  if (mateInfo.error) return <Error error={mateInfo.error} />

  const users = mateInfo.data.course.userEnrolled
  console.log({users})

  return (
    <div>MateList</div>
  )
}

export default MateList
