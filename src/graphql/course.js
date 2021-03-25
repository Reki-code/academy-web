import { gql } from '@apollo/client'

export const ALL_COURSE = gql`
  query all_course {
  courses(searchBy: { }) {
    id
    title
    teacher {
      id
      displayName
    }
  }
}
`

export const COURSE_INFO = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      cover
      title
      teacher {
        id
        avatar
        displayName
      }
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
