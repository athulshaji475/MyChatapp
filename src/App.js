import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './component/ChatFeed'
import axios from 'axios'
import  './App.css'
import LoginForm from './component/LoginForm'
function App() {

  if(!localStorage.getItem("username"))return <LoginForm/>
  
  return (
    
    <ChatEngine
        height="100vh"
        projectID="5e643cba-006e-450b-a108-b81878d8b7d4"
        userName="AthulShaji"
        userSecret="athul123"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App
