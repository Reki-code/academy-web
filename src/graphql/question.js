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
        avatar
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

export const ADD_QUESTION = gql`
  mutation ($courseId: String!, $title: String, $content: String) {
    courseAddQuestion(input: {
      courseId: $courseId
      question: {
        title: $title
        content: $content
      }
    }) {
      course {
        id
      }
    }
  }
`

export const ADD_ANSWER = gql`
  mutation ($questionId: String!, $answer: String) {
    questionAddAnswer(input: {
      questionId: $questionId
      answer: $answer
    }) {
      question {
        id
      }
      answer {
        id
      }
    }
  }
`
