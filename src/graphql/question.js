import { gql } from '@apollo/client'

export const ALL_QESTIONS = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      questions {
        id
        title
        content
        author {
          displayName
        }
        vote
        answerCount
        updatedAt
      }
    }
  }
`
