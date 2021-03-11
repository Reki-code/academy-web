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
      title
      teacher {
        id
        displayName
      }
    }
  }
`
