import { gql } from '@apollo/client'

export const CHATS = gql`
  query {
    me {
      id
      conversations {
        id
        participants {
          id
          displayName
        }
        latestMessage {
          sender {
            id
          }
          content
          createdAt
        }
      }
    }
  }
`

export const MESSAGES = gql`
  query ($conversationId: ID!) {
    me {
      id
    }
    conversation(id: $conversationId) {
      messages {
        id
        sender {
          id
        }
        content
        createdAt
      }
    }
  }
`

export const SEND_MESSAGE = gql`
  mutation ($conversationId: String!, $senderId: String!, $content: String) {
    createMessage(input: {
      conversation: $conversationId,
      sender: $senderId,
      content: $content,
    }) {
      message {
        id
      }
    }
  }
`