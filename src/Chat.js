import React from 'react';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import EditMessage from './EditMessage.js';
import { default as messages } from './messages.json';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages,
      showEdit: false,
      editMessageValue: "",
      editMessageId: "",
      user: {
        name: "BoDya",
        userId: "112",
        avatar: "../public/favicon.ico"
      }
    }

    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.likeMessage = this.likeMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  format(date) {
    if (!date[1]) {
      return "0" + date;
    }
  }

  sendMessage(value) {
    if (value === "") return;
    let newMessages = this.state.messages;
    let date = new Date();

    newMessages.push({
      id: "",
      userId: this.state.user.userId,
      avatar: this.state.user.avatar,
      user: this.state.user.name,
      text: value,
      createdAt: date.getFullYear() + "-" + this.format(date.getMonth()) + "-" + this.format(date.getDate()) + "T" + this.format(date.getHours()) + ":" + this.format(date.getMinutes()) + ":" + this.format(date.getSeconds()) + "." + date.getMilliseconds() + "Z",
      editedAt: "",
      likes: []
    });
    this.setState({messages: newMessages});
  }

  deleteMessage(messageId) {
    let newMessages = this.state.messages;
    for(let i = 0; i < this.state.messages.length; i++) {
      if(newMessages[i].id === messageId) {
        newMessages.splice(i, 1);
        break;
      }
    }
    this.setState({messages: newMessages});
  }

  likeMessage(messageId, userId) {
    let newMessages = this.state.messages;
    let i;
    for (i = 0; i < this.state.messages.length; i++) {
      if (newMessages[i].id === messageId) break;
    }
    for (let k = 0; k < newMessages[i].likes.length; k++) {
      if (newMessages[i].likes[k] === userId) {
        newMessages[i].likes.splice(k, 1);
        this.setState({messages: newMessages});
        return;
      }
    }
    newMessages[i].likes.push(userId);
    this.setState({messages: newMessages});
  }

  editMessage(messageId, value = "") {
    let newMessages = this.state.messages;
    let i;
    for (i = 0; i < this.state.messages.length; i++) {
      if (newMessages[i].id === messageId) break;
    }

    if (value) {
      let date = new Date();
      newMessages[i].text = value;
      newMessages[i].editedAt = date.getFullYear() + "-" + this.format(date.getMonth()) + "-" + this.format(date.getDate()) + "T" + this.format(date.getHours()) + ":" + this.format(date.getMinutes()) + ":" + this.format(date.getSeconds()) + "." + date.getMilliseconds() + "Z";
      this.setState({editMessageValue: "", editMessageId: "", messages: newMessages});
    } else {
      this.setState({editMessageValue: newMessages[i].text, editMessageId: newMessages[i].id});
    }
    this.showEdit();
  }

  showEdit() {
    this.setState({showEdit: !this.state.showEdit});
  }

  render() {
    return (
      <div className="Chat">
        <EditMessage show={this.state.showEdit} close={this.showEdit} value={this.state.editMessageValue} editMessage={this.editMessage} messageId={this.state.editMessageId}/>

        <img src="./logo.ico" alt="logo"/>
        <Header messages={this.state.messages}/>
        <MessageList messages={this.state.messages} userId={this.state.user.userId} deleteMessage={this.deleteMessage} likeMessage={this.likeMessage} editMessage={this.editMessage}/>
        <MessageInput sendMessage={this.sendMessage}/>
        
      </div>
    );
  }
}

export default Chat;
