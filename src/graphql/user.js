import { gql } from '@apollo/client'

export const ME = gql`
  query {
    me {
      id
      avatar
      username
      displayName
    }
  }
`