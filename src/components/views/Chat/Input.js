import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    flexGrow: 10,
    '& > div': {
      marginTop: 8,
      marginBottom: 8,
    }
  },
  button: {
    flex: 1,
  }
}))

const Input = ({ value, handleInput, handleSend, className }) => {
  const classes = useStyles()

  return (
    <Paper className={`${className} ${classes.root}`} elevation={2} >
      <TextField variant='outlined'
        value={value}
        size='small'
        placeholder='发送私信'
        onChange={handleInput}
        className={classes.text} />
      <IconButton color='primary'
        className={classes.button}
        onClick={handleSend} >
        <SendIcon />
      </IconButton>
    </Paper>
  )
}

export default Input
