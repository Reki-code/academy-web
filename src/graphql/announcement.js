import { gql } from '@apollo/client'

export const ANNOUNCEMENTS = gql`
  query {
    announcements(searchBy: {limit: 5}) {
      title
      content
      createdAt
    }
  }
`
