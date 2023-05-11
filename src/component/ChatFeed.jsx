import React from 'react'
import Mymessage from './Mymessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

function ChatFeed(props) {
  console.log(props);
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];


  const renserReadReciepts=(message,isMyMessage)=>{
 return  chat.people.map((person,index)=>person.last_read===message.id && (

<div
  key={`read_${index}`}
  className='read-reciepts'
  style={{
    float:isMyMessage?'right':'left',
    backgroundImage: message.sender && `url(${person.person.avatar})` 
  }}
/>
))
  }

  const renderMessage = () => {
    const keys = Object.keys(messages);
    console.log("keys===>" + keys);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <Mymessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renserReadReciepts(message,isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading....!";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat?.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessage()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed
