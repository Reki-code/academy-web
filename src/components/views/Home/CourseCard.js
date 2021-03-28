import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140
  },
}))

const CourseCard = ({ course }) => {
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => {
    history.push(`course/${course.id}`)
  }

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={course.cover}
        />
        <CardContent>
          <Grid container justify='center' alignItems='center' spacing={1} >
            <Grid item xs={2}>
              <Avatar className={classes.avatar} src={course.teacher.avatar} />
            </Grid>
            <Grid item xs={10}>
              <Grid container direction='column' >
                <Grid item>
                  <Typography variant='h6'>
                    {course.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2' color='textSecondary' >
                    {course.teacher.displayName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CourseCard
