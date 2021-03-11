import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavRoute from '../../hocs/NavRoute'
import Home from '../Home/Home'
import ChatList from '../ChatList/ChatList'
import Chat from '../Chat/Chat'
import Course from '../Course/Course'
import QuestionList from '../QuestionList/QuestionList'
import Set from '../Set/Set'

const Main = () => {

  return (
    <>
      <Switch>
        <NavRoute exact path='/' component={Home} />
        <NavRoute exact path='/chat' component={ChatList} />
        <Route exact path={'/chat/:conversationId'} component={Chat} />
        <Route exact path={'/course/:courseId'} component={Course} />
        <Route exact path={'/course/:courseId/question'} component={QuestionList} />
        <Route exact path={'/set/:token'} component={Set} />
      </Switch>
    </>
  )
}

export default Main
