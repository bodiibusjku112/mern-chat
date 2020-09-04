import React from 'react';

class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         message: this.props.message,
         userId: this.props.userId
      }
   }

   render() {
      if (this.state.message.userId === this.state.userId) {
         return (
            <div className="Message Own">
               <div className="message-owner">{this.state.message.user}</div>
               <div className="message-text">{this.state.message.text}</div>
               <div className="likes-counter">{this.state.message.likes.length} likes</div>
               <div className="message-time">{this.state.message.createdAt}</div>
               <button className="edit-button" onClick={() => this.props.editMessage(this.state.message.id)}>Edit</button>
               <button className="delete-button" onClick={() => this.props.deleteMessage(this.state.message.id)}>Delete</button>
            </div>
         );
      }
      return (
         <div className="Message">
            <div className="message-owner">{this.state.message.user}</div>
            <div className="message-text">{this.state.message.text}</div>
            <div className="likes-counter">{this.state.message.likes.length} likes</div>
            <div className="message-time">{this.state.message.createdAt}</div>
            <button className="like-button" onClick={() => this.props.likeMessage(this.state.message.id, this.state.userId)}>Like</button>
         </div>
      );
   }
}

export default Message;