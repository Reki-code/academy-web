import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Role from './Role'
import StudentLayout from '../../layout/StudentLayout/StudentLayout'
import TeacherLayout from '../../layout/TeacherLayout/TeacherLayout'
import AuthLayout from '../../layout/AuthLayout/AuthLayout'
import Chat from '../Chat/Chat'
import Course from '../Course/Course'
import Question from '../Question/Question'
import Quiz from '../Quiz/Quiz'
import Set from '../Set/Set'
import Profile from '../Profile/Profile'
import Resource from '../Resource/Resource'

const Main = () => {

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Role />
        </Route>
        <Route path='/student' component={StudentLayout} />
        <Route path='/teacher' component={TeacherLayout} />
        <Route path='/auth' component={AuthLayout} />
        <Route exact path='/chat/:conversationId' component={Chat} />
        <Route path='/course/:courseId' component={Course} />
        <Route path='/question/:questionId' component={Question} />
        <Route path='/quiz/:quizId' component={Quiz} />
        <Route path='/resource/:resourceId' component={Resource} />
        <Route exact path='/set/:token' component={Set} />
        <Route paht='/profile/:userId' component={Profile} />
      </Switch>
    </>
  )
}

export default Main
