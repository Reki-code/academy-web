import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavRoute from '../../hocs/NavRoute'
import Home from '../Home/Home'
import ChatList from '../ChatList/ChatList'
import Chat from '../Chat/Chat'


const Main = () => {

  return (
    <>
      <Switch>
        <NavRoute exact path='/' component={Home} />
        <NavRoute exact path='/chat' component={ChatList} />
        <Route exact path={`/chat/:conversationId`} component={Chat} />
      </Switch>
    </>
  )
}

export default Main
