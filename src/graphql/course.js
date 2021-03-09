import { gql } from '@apollo/client'

export const ALL_COURSE = gql`
  query all_course {
  courses(searchBy: { }) {
    id
    title
    teacher {
      username
    }
  }
}
`