import React from 'react'
import { Route, useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    width: '100%',
    zIndex: 100,
  },
})

const Nav = () => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()

  const handleChange = (event, newValue) => {
    history.replace(newValue)
  }

  return (
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
        <Tab value='/f' icon={<FavoriteIcon />} label="FAVORITES" disabled />
        <Tab value='/n' icon={<PersonPinIcon />} label="NEARBY" disabled />
      </Tabs>
    </Paper>
  )
}

const NavRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Nav />
      <Component {...props} />
    </div>
  )} />
)

export default NavRoute