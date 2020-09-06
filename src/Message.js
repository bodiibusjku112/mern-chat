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
               <img className="message-avatar" src={this.state.message.avatar} alt=""/>
               <div className="message-owner">{this.state.message.user}</div>
               <div className="message-text">{this.state.message.text}</div>
               <div className="message-time">{this.state.message.createdAt.slice(0, 10) + " " + this.state.message.createdAt.slice(11, 19)}</div>
               <div className="likes-counter">
                  {this.state.message.likes.length} likes 
                  <button className="edit-button" onClick={() => this.props.editMessage(this.state.message.id)}>Edit</button>
                  <button className="delete-button" onClick={() => this.props.deleteMessage(this.state.message.id)}>Delete</button>
               </div>
               
            </div>
         );
      }
      return (
         <div className="Message">
            <img className="message-avatar" src={this.state.message.avatar} alt=""/>
            <div className="message-owner">{this.state.message.user}</div>
            <div className="message-text">{this.state.message.text}</div>
            <div className="message-time">{this.state.message.createdAt.slice(0, 10) + " " + this.state.message.createdAt.slice(11, 19)}</div>
            <div className="likes-counter">
               {this.state.message.likes.length} likes 
               <button className="like-button" onClick={() => this.props.likeMessage(this.state.message.id, this.state.userId)}>Like</button>
            </div>
            
         </div>
      );
   }
}

export default Message;