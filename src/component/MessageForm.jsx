import React from 'react'
import { useState } from 'react'
import { sendMessage ,isTyping} from 'react-chat-engine'


function MessageForm(props) {
const [value, setvalue] = useState('')
const {chatId,creds}=props

//on submit-------------------------------
    const handleSubmit=(e)=>{
     e.preventDefault();
     const text=value.trim()
     if(text.length>0) sendMessage(creds,chatId,{text})
     
     
     }

//on change----------------------------------
       const handleChange=(e)=>
        {
          setvalue(e.target.value)
          isTyping(props,chatId)

        }


  return (
    <form className='message-form' onSubmit={handleSubmit}>
     <input 
      className='message-input'
      placeholder='Send a message...'
      value={value}
      onChange={handleChange}
    />
    </form>
  )
}

export default MessageForm
