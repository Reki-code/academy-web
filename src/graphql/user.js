import { gql } from '@apollo/client'

export const ME = gql`
  query {
    me {
      id
      type
      avatar
      username
      displayName
    }
  }
`