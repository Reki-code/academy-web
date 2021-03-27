import React, { useState } from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  root: {

  },
})

const Nav = () => {
  const classes = useStyles()
  const history = useHistory()
  const { url } = useRouteMatch()
  const { pathname } = useLocation()
  const [tab, setTab] = useState(pathname)

  const handleChange = (event, newValue) => {
    setTab(newValue)
    history.replace(newValue)
  }

  return (
      <Tabs
        value={tab}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
      >
        <Tab value={url} label='内容' />
        <Tab value={`${url}/question`} label='问答' />
        <Tab value={`${url}/quiz`} label='作业' />
        <Tab value={`${url}/mate`} label='同学' />
      </Tabs>
  )
}

export default Nav