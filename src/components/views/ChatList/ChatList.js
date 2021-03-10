import 'react-chat-elements/dist/main.css'
import { ChatList as CeChatList } from 'react-chat-elements'

const ChatList = () => {
  return (
    <CeChatList
      onClick={(o) => console.log('click', o)}
      className='chat-list'
      dataSource={[
        {
          id: '1',
          avatar: 'https://facebook.github.io/react/img/logo.svg',
          alt: 'Reactjs',
          title: 'Facebook',
          subtitle: 'What are you doing?',
          date: new Date(),
          unread: 0,
        },
        {
          id: '2',
          avatar: 'https://facebook.github.io/react/img/logo.svg',
          alt: 'Reactjs',
          title: 'Facebook',
          subtitle: 'What are you doing?',
          date: new Date(),
          unread: 0,
        },
        {
          id: '3',
          avatar: 'https://facebook.github.io/react/img/logo.svg',
          alt: 'Reactjs',
          title: 'Facebook',
          subtitle: 'What are you doing?',
          date: new Date(),
          unread: 0,
        },
    ]} />
  )
}

export default ChatList