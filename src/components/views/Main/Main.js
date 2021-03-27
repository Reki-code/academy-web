import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import StudentLayout from '../../layout/StudentLayout/StudentLayout'
import TeacherLayout from '../../layout/TeacherLayout/TeacherLayout'
import AuthLayout from '../../layout/AuthLayout/AuthLayout'
import Chat from '../Chat/Chat'
import Course from '../Course/Course'
import Question from '../Question/Question'
import Quiz from '../Quiz/Quiz'
import Set from '../Set/Set'
import { useQuery } from '@apollo/client'
import { ME } from '../../../graphql/user'

const Main = () => {
  const { data: userInfo } = useQuery(ME)

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <div>Loading</div>
          {
            userInfo && (
              <Redirect
                to={userInfo.me.type === 'STUDENT' ? '/student' : '/teacher'}
              />
            )
          }
        </Route>
        <Route path='/student' component={StudentLayout} />
        <Route path='/teacher' component={TeacherLayout} />
        <Route path='/auth' component={AuthLayout} />
        <Route exact path='/chat/:conversationId' component={Chat} />
        <Route path='/course/:courseId' component={Course} />
        <Route path='/question/:questionId' component={Question} />
        <Route path='/quiz/:quizId' component={Quiz} />
        <Route exact path='/set/:token' component={Set} />
      </Switch>
    </>
  )
}

export default Main
