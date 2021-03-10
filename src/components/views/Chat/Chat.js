import React, { useState, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ChatMessages from './ChatMessages'
import Input from './Input'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    overflowY: 'auto',
    overflowX: 'hidden',
    flexGrow: 10,
  },
  inputBar: {
    flex: 1,
  }
}))

const AVATAR =
  'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg'

const chats = [
  { sender: { id: '1' }, content: 'this is a message1' },
  { sender: { id: '1' }, content: 'this is a message2' },
  { sender: { id: '1' }, content: 'this is a message3' },
  { sender: { id: '1' }, content: 'this is a message4' },
  { sender: { id: '1' }, content: 'this is a message5' },
  { sender: { id: '1' }, content: 'this is a message6' },
  { sender: { id: '2' }, content: 'this is a message7' },
  { sender: { id: '2' }, content: 'this is a message8' },
  { sender: { id: '1' }, content: 'this is a message9' },
  { sender: { id: '1' }, content: 'this is a message10' },
  { sender: { id: '1' }, content: 'this is a message11' },
  { sender: { id: '1' }, content: 'this is a message1' },
  { sender: { id: '1' }, content: 'this is a message2' },
  { sender: { id: '1' }, content: 'this is a message3' },
  { sender: { id: '1' }, content: 'this is a message4' },
  { sender: { id: '1' }, content: 'this is a message5' },
  { sender: { id: '1' }, content: 'this is a message6' },
  { sender: { id: '2' }, content: 'this is a message7' },
  { sender: { id: '2' }, content: 'this is a message8' },
  { sender: { id: '1' }, content: 'this is a message9' },
  { sender: { id: '1' }, content: 'this is a message10' },
  { sender: { id: '1' }, content: 'this is a message11' },
]

const me = {
  id: '2'
}

const init = { lastSender: 'hh', chatMessages: [] }

const reducer = (groupedMessages, message) => {
  if (message.sender.id === groupedMessages.lastSender) { // same sender
    groupedMessages.chatMessages
  } else { // different sender

  }
}

const Chat = () => {
  const classes = useStyles()
  const messagesEndRef = useRef(null)
  const [input, setInput] = useState('')
  const handleInput = (event) => {
    setInput(event.target.value)
  }
  const handleSend = () => {
    console.log(input)
    setInput('')
  }
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  return (
    <div className={classes.root}>
      <div className={classes.messages}>
        {
          chats.map(chat => (
            <ChatMessages
              side={me.id === chat.sender.id ? 'right' : 'left'}
              messages={[
                chat.content
              ]}
            />
          ))
        }
        {/* <ChatMessages
          avatar={AVATAR}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMessages
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        />
        <ChatMessages avatar={AVATAR} messages={['Im good.', 'See u later.']} /> */}
        <div ref={messagesEndRef} />
      </div>
      <Input value={input} className={classes.inputBar} handleInput={handleInput} handleSend={handleSend} />
    </div>
  )
}

export default Chat
