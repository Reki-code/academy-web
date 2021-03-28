import { gql } from '@apollo/client'

const SIMPLE_COURSE_INFO = gql`
  fragment simpleCourseInfo on Course {
    id
    cover
    title
    teacher {
      id
      avatar
      displayName
    }
  }
`

export const ENROLLED_COURSE = gql`
  ${SIMPLE_COURSE_INFO}
  query {
    me {
      id
      courseEnrolled {
        ...simpleCourseInfo
      }
    }
  }
`

export const OPEN_COURSE = gql`
  ${SIMPLE_COURSE_INFO}
  query {
    courses(searchBy: {open: true	}){
      ...simpleCourseInfo
    }
  }
`

export const ALL_COURSE = gql`
  ${SIMPLE_COURSE_INFO}
  query all_course {
    courses(searchBy: { }) {
      ...simpleCourseInfo
    }
  }
`

export const COURSE_INFO = gql`
  ${SIMPLE_COURSE_INFO}
  query ($courseId: ID!) {
    course(id: $courseId) {
      ...simpleCourseInfo
    }
  }
`

export const ALL_MATE = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      userEnrolled {
        id
        avatar
        displayName
      }
    }
  }
`
