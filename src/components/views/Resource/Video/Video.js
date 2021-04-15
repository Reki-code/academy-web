import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Video = ({ resource }) => {
  return (
    <div>
      <Card>
        <CardMedia
          component='video'
          alt='video'
          image={resource.url}
          type='video/mp4'
          controls
        />
        <CardContent>
          <Typography
            variant='body1'
          >
            {resource.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Video
