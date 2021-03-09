import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CollegePage from './CollegePage'
import UserPage from './UserPage'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <div>{children}</div>
      )}
    </div>
  )
}

const Home = () => {
  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <>
        <Tabs value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered>
          <Tab label='学校首页' />
          <Tab label='个人主页' />
        </Tabs>
      </>
      <TabPanel value={value} index={0}>
        <CollegePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserPage />
      </TabPanel>
    </>
  )
}

export default Home
