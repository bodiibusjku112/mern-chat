import React from 'react';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import { default as messages } from './messages.json';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages,
      messagesLength: messages.length,
    }
  }
  render() {
    return (
      <div className="Chat">
        <img src="logo.ico" alt="logo"/>
        <Header messages={this.state.messages} messagesLength={this.state.messagesLength}/>
        <MessageList messages={this.state.messages}/>
        <MessageInput/>
        
      </div>
    );
  }
}

export default Chat;
