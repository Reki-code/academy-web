import { gql } from '@apollo/client'

export const FIND_CHAT = gql`
  query ($participant: String!) {
    conversation(searchBy: {
      participants: [
        $participant
      ]
    }) {
      id
    }
  }
`

export const CHATS = gql`
  query {
    me {
      id
      conversations {
        id
        participants {
          id
          displayName
          avatar
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
