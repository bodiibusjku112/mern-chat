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
               <div className="message-time">{this.state.message.createdAt}</div>
               <button className="edit-button">Edit</button>
               <button className="delete-button">Delete</button>
            </div>
         );
      }
      return (
         <div className="Message">
            <div className="message-owner">{this.state.message.user}</div>
            <div className="message-text">{this.state.message.text}</div>
            <div className="message-time">{this.state.message.createdAt}</div>
            <button className="like-button">Like</button>
         </div>
      );
   }
}

export default Message;