import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CollegePage from './CollegePage'
import UserPage from './UserPage'
import TabPanel from '../../hocs/TabPanel'
import Container from '@material-ui/core/Container'

const Home = () => {
  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
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
    </Container>
  )
}

export default Home
