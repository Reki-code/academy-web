import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import Home from '../Home/Home'
import ChatList from '../ChatList/ChatList'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    width: '100%',
  },
})

export default function IconLabelTabs() {
  const location = useLocation()
  const history = useHistory()
  console.log('location', location)
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    history.replace(newValue)
  }

  return (
    <>
      <Paper square className={classes.root} px={0}>
        <Tabs
          value={location.pathname}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
        >
          <Tab value='/' icon={<HomeIcon />} label='主页' />
          <Tab value='/chat' icon={<SmsIcon />} label="私信" />
          <Tab value='/f' icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab value='/n' icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Paper>
      <Switch>
        <Route path='/chat'>
          <ChatList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}
