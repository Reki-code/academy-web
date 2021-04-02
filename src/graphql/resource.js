import { gql } from '@apollo/client'

export const RESOURCES = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      topics {
        title
        description
        resources {
          id
          title
          category
        }
      }
    }
  }
`

export const RESOURCE_INFO = gql`
  query ($resourceId: ID!) {
    resource (id: $resourceId) {
      id
      title
      category
      content
      url
    }
  }
`
