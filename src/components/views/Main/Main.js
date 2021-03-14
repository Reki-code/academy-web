import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavRoute from '../../hocs/NavRoute'
import Home from '../Home/Home'
import ChatList from '../ChatList/ChatList'
import Chat from '../Chat/Chat'
import Course from '../Course/Course'
import Question from '../Question/Question'
import Quiz from '../Quiz/Quiz'
import Set from '../Set/Set'

const Main = () => {

  return (
    <>
      <Switch>
        <NavRoute exact path='/' component={Home} />
        <NavRoute exact path='/chat' component={ChatList} />
        <Route exact path={'/chat/:conversationId'} component={Chat} />
        <Route path={'/course/:courseId'} component={Course} />
        <Route path={'/question/:questionId'} component={Question} />
        <Route path={'/quiz/:quizId'} component={Quiz} />
        <Route exact path={'/set/:token'} component={Set} />
      </Switch>
    </>
  )
}

export default Main
