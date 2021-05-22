import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReportProblemIcon from '@material-ui/icons/ReportProblem'
import Typography from '@material-ui/core/Typography'

const Error = ({error}) => {
  console.error('error', error)
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={1}
      py={1}
    >
      <ReportProblemIcon color='error' fontSize='large' />
      <Typography variant='body1' color='error' >{error.toString()}</Typography>
    </Grid>
  )
}

export default Error
