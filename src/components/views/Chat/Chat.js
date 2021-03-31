import React, { useState, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { MESSAGES, SEND_MESSAGE, CHATS } from '../../../graphql/chat'
import ChatMessages from './ChatMessages'
import Input from './Input'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

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

const Chat = () => {
  const classes = useStyles()
  const { conversationId } = useParams()
  const messagesEndRef = useRef(null)
  const messages = useQuery(MESSAGES, {
    variables: { conversationId }
  })
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onError: (error) => {
      console.error(error)
    },
    refetchQueries: [{ query: MESSAGES, variables: { conversationId } }, { query: CHATS }]
    // update(store, response) {
    //   const dataInStore = store.readQuery({ query: MESSAGES, variables: { conversationId }})
    //   console.log('cacahe', store)
    //   store.writeQuery({
    //     query: MESSAGES,
    //     variables: { conversationId },
    //     data: {
    //       ...dataInStore,
    //       [`conversation({'id':${conversationId})`]: 
    //         [...dataInStore[`conversation({'id':${conversationId})`], response.data.message ],
    //     }
    //   })
    // },
  })
  const [input, setInput] = useState('')
  const handleInput = (event) => {
    setInput(event.target.value)
  }
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  if (messages.loading) return <Loading />
  if (messages.error) return <Error error={messages.error} />
  const chats = messages.data.conversation.messages
  const myId = messages.data.me.id
  const handleSend = () => {
    sendMessage({
      variables: {
        conversationId,
        senderId: myId,
        content: input,
      }
    })
    setInput('')
  }
  return (
    <div className={classes.root}>
      <div className={classes.messages}>
        {
          chats.map(chat => (
            <ChatMessages
              key={chat.id}
              side={chat.sender.id === myId ? 'right' : 'left'}
              avatar={chat.sender.avatar}
              messages={[
                chat.content
              ]}
            />
          ))
        }
        <div ref={messagesEndRef} />
      </div>
      <Input value={input} className={classes.inputBar} handleInput={handleInput} handleSend={handleSend} />
    </div>
  )
}

export default Chat
