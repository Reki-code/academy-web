import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 8,
  },
  inline: {
    display: 'inline',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  weight: {
    color: theme.palette.text.secondary,
  }
}))

const QuizListItem = ({ quiz = { id: '1'} }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push(`/quiz/${quiz.id}`)
  }

  return (
    <Paper className={classes.root} square onClick={handleClick} >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <AssignmentIcon />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <div className={classes.flex}>
                <div>第一周测试</div>
                <div>60%</div>
              </div>
              <Typography className={classes.weight} align='right' variant='body2'>权重5%</Typography>
              <Divider />
            </>
          }
          secondary='直到 3月8日'
        />
      </ListItem>
    </Paper>
  )
}

export default QuizListItem
