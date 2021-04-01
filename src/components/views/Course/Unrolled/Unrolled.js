import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/client'
import { ENROLL, ENROLLED_COURSE, COURSE_INFO } from '../../../../graphql/course'

const Unrolled = ({ courseId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const [enroll] = useMutation(ENROLL, {
    variables: { courseId },
    refetchQueries: [{ query: ENROLLED_COURSE }],
    update(cache) {
      const dataInStore = cache.readQuery({
        query: COURSE_INFO,
        variables: { courseId },
      })
      cache.writeQuery({
        query: COURSE_INFO,
        variables: { courseId },
        data: {
          ...dataInStore,
          isEnrolled: true,
        }
      })
    }
  })
  const handleClick = () => {
    enroll()
      .then(() => {
        enqueueSnackbar('加入成功', {
          variant: 'success'
        })
      })
      .catch(error => {
        console.error('Enroll: ', error)
        enqueueSnackbar('加入失败', {
          variant: 'error'
        })
      })
  }

  return (
    <Box pt={2} px={1}>
      <Typography>
        关于这门课
      </Typography>
      <Button
        variant='contained'
        color='primary'
        fullWidth
        onClick={handleClick}
      >
        开始学习
      </Button>
    </Box>
  )
}

export default Unrolled
