import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const ResourceItem = ({ resource }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/resource/${resource.id}`)
  }

  return (
    <>
      <ListItem alignItems='flex-start' onClick={handleClick}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary='操作系统的定义和作用'
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Video
                  </Typography>
              {" 20 min"}
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  )
}

export default ResourceItem
