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
import Paper from '@material-ui/core/Paper'

const Course = () => {
  const { courseId } = useParams()
  const match = useRouteMatch()
  const courseInfo = useQuery(COURSE_INFO, {
    variables: { courseId }
  })

  return (
    <>
      <Paper elevation={3}>
        {
          courseInfo.loading
            ? <div>Loading</div>
            : courseInfo.error
              ? <div>Error</div>
              : <CourseInfo course={courseInfo.data.course} />
        }
        <Nav />
      </Paper>
      <Switch>
        <Route exact path={match.path} component={Overview} />
        <Route path={`${match.path}/question`} component={QuestionList} />
        <Route path={`${match.path}/quiz`} component={QuizList} />
        <Route path={`${match.path}/mate`} component={MateList} />
      </Switch>
    </>
  )
}

export default Course
