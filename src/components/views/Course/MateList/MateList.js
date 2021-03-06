import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_MATE } from '../../../../graphql/course'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import List from '@material-ui/core/List'
import MateListItem from './MateListItem'
import Typography from '@material-ui/core/Typography'

const MateList = () => {
  const { courseId } = useParams()
  const mateInfo = useQuery(ALL_MATE, {
    variables: { courseId }
  })

  if (mateInfo.loading) return <Loading />
  if (mateInfo.error) return <Error error={mateInfo.error} />

  const users = mateInfo.data.course.userEnrolled

  return (
    <>
      {
        users.length === 0
          ? <Typography variant='body1' align='center' color='textSecondary' >
            还没有人开始学习这门课
          </Typography>
          : <List>
            {
              users.map(user => <MateListItem key={user.id} user={user} />)
            }
          </List>
      }
    </>
  )
}

export default MateList
