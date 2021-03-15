import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 64,
  },
}))

const Comments = ({ answerId }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>{ answerId }</div>
  )
}

export default Comments
