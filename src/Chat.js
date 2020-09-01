import React from 'react';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import { default as messages } from './messages.json';

function Chat() {
  return (
    <div className="Chat">
      <img src="logo.ico" alt="logo"/>
      <Header messages={messages}/>
      <MessageList/>
      <MessageInput/>
      
    </div>
  );
}

export default Chat;
