import { gql } from '@apollo/client'

export const ALL_FAVORITES = gql`
  query {
    me {
      id
      displayName
        favorite {
          questions {
          id
          title
          author {
            id
            displayName
          }
          updatedAt
          answerCount
        }
      }
    }
  }
`

export const FAVORITE = gql`
  mutation ($type: String!, $id: String) {
    favorite(input: {
      type: $type
      id: $id
    }) {
      user {
        favorite {
          questions {
            id
            title
          }
        }
      }
    }
  }
`

export const FAVORITE_QUESTION = gql`
  mutation ($id: String) {
    favorite(input: { type: "questions", id: $id}) {
      user {
        id
        displayName
      }
    }
  }
`