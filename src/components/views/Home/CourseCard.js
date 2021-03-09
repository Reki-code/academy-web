import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.secondary,
  }
}))

const CourseCard = () => {
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'
          title='course cover'
        />
        <CardContent>
          <Typography gutterBottom>
            编译原理
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            论文
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CourseCard
