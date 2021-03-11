import React from 'react'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { COURSE_INFO } from '../../../graphql/course'
import CourseInfo from './CourseInfo'
import QuestionList from '../QuestionList/QuestionList'

const Course = () => {
  const { courseId } = useParams()
  const match = useRouteMatch()
  const courseInfo = useQuery(COURSE_INFO, {
    variables: { courseId }
  })

  return (
    <>
      {
        courseInfo.loading
          ? <div>Loading</div>
          : courseInfo.error
            ? <div>Error</div>
            : <CourseInfo course={courseInfo.data.course} />
      }
      <Switch>
        <Route exact path={match.path}>main page</Route>
        <Route path={`${match.path}/question`} component={QuestionList} />
      </Switch>
    </>
  )
}

export default Course
