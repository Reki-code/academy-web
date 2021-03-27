import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

const TabNav = ({ tabs }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const handleChange = (event, newValue) => {
    history.replace(newValue)
  }


  return (
    <Paper square>
      <Tabs
        value={pathname}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
      >
        {
          tabs.map(tab => (
            <Tab key={tab.value} {...tab} />
          ))
        }
      </Tabs>
    </Paper>
  )
}

export default TabNav
