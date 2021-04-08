import { gql } from '@apollo/client'

export const ALL_QUIZZES = gql`
  query ($courseId: ID!) {
    course(id: $courseId) {
      id
      quizzes {
        id
        title
        dueDate
      }
    }
  }
`

export const QUIZ_INFO = gql`
  query ($quizId: ID!) {
    quiz(id: $quizId) {
      id
      title
      questions {
        type
        content {
          stem
          options
        }
        answer {
          single
          multiple
        }
      }
    }
  }
`

export const COURSE_ADD_QUIZ = gql`
  mutation ($input: CourseAddQuizInput!) {
    courseAddQuiz(
      input: $input
    ) {
      course {
        id
      }
    }
  }
`
