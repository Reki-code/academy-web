import React from 'react'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { COURSE_INFO } from '../../../graphql/course'
import CourseInfo from './CourseInfo'
import Nav from './Nav'
import Overview from './Overview/Overview'
import QuestionList from './QuestionList/QuestionList'
import QuizList from './QuizList/QuizList'
import MateList from './MateList/MateList'
import Unrolled from './Unrolled/Unrolled'
import Paper from '@material-ui/core/Paper'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const Course = () => {
  const { courseId } = useParams()
  const match = useRouteMatch()
  const courseInfo = useQuery(COURSE_INFO, {
    variables: { courseId }
  })

  if (courseInfo.loading) return <Loading/>
  if (courseInfo.error) return <Error error={courseInfo.error} />

  const isEnrolled = courseInfo.data.course.isEnrolled
  const isTeache = courseInfo.data.me.id === courseInfo.data.course.teacher.id
  
  const content = (() => {
    if (isEnrolled || isTeache) {
      return <>
        <Switch>
          <Route exact path={match.path}>
            <Overview isTeache={isTeache} />
          </Route>
          <Route path={`${match.path}/question`} component={QuestionList} />
          <Route path={`${match.path}/quiz`} component={QuizList} />
          <Route path={`${match.path}/mate`} component={MateList} />
        </Switch>
      </>
    }
    return <Unrolled courseId={courseId} />
  })()

  return (
    <>
      <Paper elevation={3}>
        <CourseInfo course={courseInfo.data.course} />
        { (isEnrolled || isTeache) && <Nav /> }
      </Paper>
      { content }
    </>
  )
}

export default Course
