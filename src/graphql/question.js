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

export const QUESTION = gql`
  query ($questionId: ID!) {
    me {
      id
    }
    post(id: $questionId) {
      id
      title
      content
      author {
        displayName
      }
      createdAt
      vote
      votes {
        voter {
          id
        }
        vote
      }
      answers {
        id
        vote
        content
        author {
          avatar
          displayName
        }
        createdAt
        comments {
          content
          author {
            displayName
          }
        }
      }
    }
  }
`
