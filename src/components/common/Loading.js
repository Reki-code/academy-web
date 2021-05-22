import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => {
  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='center'
      py={1}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loading
