import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { RESOURCE_INFO } from '../../../graphql/resource'
import Loading from '../../common/Loading'
import Error from '../../common/Error'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Text from './Text/Text'
import Video from './Video/Video'
import Slides from './Slides/Slides'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import IconButton from '@material-ui/core/IconButton'
import ToggleIcon from 'material-ui-toggle-icon'
import Grid from '@material-ui/core/Grid'
import { useSnackbar } from 'notistack'

const Resource = () => {
  const { resourceId } = useParams()
  const [fav, setFav] = useState(false)
  const resourceInfo = useQuery(RESOURCE_INFO, {
    variables: { resourceId },
  })
  const { enqueueSnackbar } = useSnackbar()
  const handleFavorite = () => {
    if (fav) {
      enqueueSnackbar('取消收藏', {
        variant: 'success'
      })
    } else {
      enqueueSnackbar('收藏成功', {
        variant: 'success'
      })
    }
    setFav(!fav)
  }

  if (resourceInfo.loading) return <Loading />
  if (resourceInfo.error) return <Error error={resourceInfo.error} />

  const resource = resourceInfo.data.resource

  return (
    <Box p={1}>
      <Typography variant='h6' >
        {resource.title}
      </Typography>
      <Grid
        alignContent='center'
      >
        <IconButton
          onClick={handleFavorite}
        >
          <ToggleIcon
            on={fav}
            onIcon={<StarIcon fontSize='small' />}
            offIcon={<StarOutlineIcon fontSize='small' />}
          />
        </IconButton>
        <span>{fav ? '取消收藏' : '收藏'}</span>
      </Grid>
      {resource.category === 'text' && <Text resource={resource} />}
      {resource.category === 'video' && <Video resource={resource} />}
      {resource.category === 'slides' && <Slides resource={resource} />}
    </Box>
  )
}

export default Resource
