import 'react-chat-elements/dist/main.css'
import { ChatList as CeChatList } from 'react-chat-elements'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CHATS } from '../../../graphql/chat'

const ChatList = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const handleClick = (chat) => {
    history.push(`${match.path}/${chat.id}`)
  }
  const chatList = useQuery(CHATS)
  if (chatList.loading) {
    return <div>Loading</div>
  }
  if (chatList.error) {
    return <div>{chatList.error.toString()}</div>
  }
  const conversations = chatList.data.me.conversations
  const myId = chatList.data.me.id

  return (
    <CeChatList
      onClick={handleClick}
      className='chat-list'
      dataSource={
        conversations.map(conversation => {
          return {
            id: conversation.id,
            avatar: 'https://avatars.githubusercontent.com/u/32997723?s=460&u=ebb97e29c0bc717c30aa61b99f75520bebe73aa2&v=4',
            title: conversation.participants.filter(p => p.id !== myId)[0].displayName,
            subtitle: conversation.latestMessage.content,
            date: conversation.latestMessage.createdAt,
          }
        })
      } />
  )
}

export default ChatList