import { gql } from '@apollo/client'

export const ANNOUNCEMENTS = gql`
  query {
    announcements(searchBy: {limit: 5}) {
      id
      title
      content
      createdAt
    }
  }
`
