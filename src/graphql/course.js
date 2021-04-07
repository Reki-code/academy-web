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
      type
      courseEnrolled {
        ...simpleCourseInfo
      }
      courseTeache {
        ...simpleCourseInfo
      }
    }
  }
`

export const NEW_COURSE = gql`
  mutation ($title: String!, $open: Boolean, $description: String) {
    createCourse(
      input: { title: $title, open: $open, description: $description }
    ) {
      course {
        id
      }
    }
  }
`

export const OPEN_COURSE = gql`
  ${SIMPLE_COURSE_INFO}
  query {
    courses(searchBy: {open: true	}){
      ...simpleCourseInfo
      countEnrolled
      createdAt
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

export const ENROLL = gql`
  mutation ($courseId: String!) {
    enroll(input: {
      courseId: $courseId
    }) {
      enrollment {
        courseEnrolled {
          id
          isEnrolled
          teacher {
            id
          }
        }
      }
    }
  }
`

export const COURSE_INFO = gql`
  ${SIMPLE_COURSE_INFO}
  query ($courseId: ID!) {
    me {
      id
    }
    course(id: $courseId) {
      ...simpleCourseInfo
      isEnrolled
      description
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
