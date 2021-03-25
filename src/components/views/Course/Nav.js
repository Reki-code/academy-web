import React, { useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
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
  const match = useRouteMatch()
  const [tab, setTab] = useState('')

  const handleChange = (event, newValue) => {
    setTab(newValue)
    history.replace(`${match.url}${newValue}`)
  }

  return (
      <Tabs
        value={tab}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
      >
        <Tab value='' label='内容' />
        <Tab value='/question' label='问答' />
        <Tab value='/quiz' label='作业' />
        <Tab value='/mate' label='同学' />
      </Tabs>
  )
}

export default Nav