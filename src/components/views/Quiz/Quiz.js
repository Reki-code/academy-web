import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 2,
  },
  pagination: {
    width: '100%',
    '& ul': {
      justifyContent: 'space-evenly',
    }
  }
}))

const Quiz = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography>Page: {page}</Typography>
      </div>
      <Pagination
      className={classes.pagination} count={10} page={page} onChange={handleChange} />
    </div>
  )
}

export default Quiz
