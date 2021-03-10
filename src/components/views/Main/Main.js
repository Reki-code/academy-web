import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import TabPanel from '../../hocs/TabPanel'
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
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Paper square className={classes.root} px={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
        >
          <Tab icon={<HomeIcon />} label='主页' />
          <Tab icon={<SmsIcon />} label="私信" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChatList />
      </TabPanel>
    </>
  )
}
