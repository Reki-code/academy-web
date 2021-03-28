import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import StarIcon from '@material-ui/icons/Star'
import PersonIcon from '@material-ui/icons/Person'
import TabNav from '../../common/TabNav'
import Home from '../../views/Home/Home'
import ChatList from '../../views/ChatList/ChatList'
import Me from '../../views/Me/Me'
import Favorite from '../../views/Favorite/Favorite'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    flexGrow: 2,
    overflowY: 'auto',
  },
})

const TeacherLayout = () => {
  const classes = useStyles()
  const { path } = useRouteMatch()

  const tabs = [
    { value: `${path}`, icon: <HomeIcon />, label: '主页' },
    { value: `${path}/chat`, icon: <SmsIcon />, label: '私信' },
    { value: `${path}/favorite`, icon: <StarIcon />, label: '收藏' },
    { value: `${path}/me`, icon: <PersonIcon />, label: '我的' },
  ]

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Switch>
          <Route exact path={`${path}`} component={Home} />
          <Route exact path={`${path}/chat`} component={ChatList} />
          <Route exact path={`${path}/favorite`} component={Favorite} />
          <Route exact path={`${path}/me`} component={Me} />
        </Switch>
      </div>
      <TabNav tabs={tabs} />
    </div>
  )
}

export default TeacherLayout
