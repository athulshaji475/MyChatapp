import React from 'react'
import Mymessage from './Mymessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

function ChatFeed({props}) {
    console.log(props)
    const {chats,ActiveChat,userName,messages}=props
    const chat=chats&&chats[ActiveChat]


    const  renderMessage=()=>{
        const keys=Object.key[messages];
        console.log(keys)
    }

    renderMessage()

  return (
    <div>
      Chatfeed
    </div>
  )
}

export default ChatFeed
