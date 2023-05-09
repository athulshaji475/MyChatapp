import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import axios from 'axios'
import  './App.css'
function App() {
  return (
    
    <ChatEngine
        height="100vh"
        projectID="5e643cba-006e-450b-a108-b81878d8b7d4"
        userName="chatapp"
        userSecret="secret123"
    />
  )
}

export default App
