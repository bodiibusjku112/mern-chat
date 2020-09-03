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
      user: {
        name: "BoDya",
        userId: "112"
      }
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(value) {
    let newMessages = this.state.messages;
    let date = new Date();

    newMessages.push({
      id: "",
      userId: this.state.user.userId,
      avatar: "",
      user: this.state.user.name,
      text: value,
      createdAt: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds() + "Z",
      editedAt: "",
    });
    this.setState({messages: newMessages, messagesLength: this.state.messagesLength + 1});
  }

  render() {
    return (
      <div className="Chat">
        <img src="logo.ico" alt="logo"/>
        <Header messages={this.state.messages} messagesLength={this.state.messagesLength}/>
        <MessageList messages={this.state.messages} userId={this.state.user.userId}/>
        <MessageInput sendMessage={this.sendMessage}/>
        
      </div>
    );
  }
}

export default Chat;
