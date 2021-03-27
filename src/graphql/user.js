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

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(
      username: $username
      password: $password
    ) {
      value
    }
  }
`
