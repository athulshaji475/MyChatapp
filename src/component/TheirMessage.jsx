import React from 'react'

function TheirMessage({lstMessage,message}) {
  const isFirstmessagebyuser=!lstMessage || lstMessage.sender.username!==message.sender.username
  return (

    <div className='message-row'>
     
     {
      isFirstmessagebyuser&&(
        <div
         className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}  />
      )
     }
     {
    (message?.attachments?.length>0)
  
    ? (
  <img
    src={message.attachments[0].file}
    alt='alt-image'
    className='message-image'
    style={{marginLeft:isFirstmessagebyuser?'14px':'48px'}}
  />
):    <div className='message' style={{float:'left',backgroundColor:'#CABCDC',marginLeft:isFirstmessagebyuser?'14px':'48px'}}>
      
      {message.text}
    </div>
  
     }
    </div>
  )
}

export default TheirMessage
