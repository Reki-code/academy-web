import { gql } from '@apollo/client'

export const RESOURCES = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      topics {
        title
        description
        resource {
          category
        }
      }
    }
  }
`

export const RESOURCES_TITLE = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      topics {
        title
        description
      }
    }
  }
`
