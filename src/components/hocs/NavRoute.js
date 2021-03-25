import React from 'react'
import { Route, useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import StarIcon from '@material-ui/icons/Star'
import PersonIcon from '@material-ui/icons/Person'

const Nav = () => {
  const location = useLocation()
  const history = useHistory()

  const handleChange = (event, newValue) => {
    history.replace(newValue)
  }

  return (
    <Paper square>
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
      >
        <Tab value='/' icon={<HomeIcon />} label='主页' />
        <Tab value='/chat' icon={<SmsIcon />} label='私信' />
        <Tab value='/favorite' icon={<StarIcon />} label='收藏' />
        <Tab value='/me' icon={<PersonIcon />} label='我的' />
      </Tabs>
    </Paper>
  )
}

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

const NavRoute = ({ exact, path, component: Component }) => {
  const classes = useStyles()

  return (
    <Route exact={exact} path={path} render={(props) => (
      <div className={classes.root}>
        <div className={classes.content}>
          <Component {...props} />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    )} />
  )
}

export default NavRoute